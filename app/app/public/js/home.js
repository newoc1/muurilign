
Vue.component('task', {
	props: ['points', 'title'],
	template: `
	<div class="item" v-bind:style="customStyle">
		<div class="item-content">
			<span>{{title}}</span>
		</div>
	</div>	
	`,	
	computed: {
		customStyle: function(){
			console.log(this);
			return {				
					height: '100px',
					width: `${this.points*100}px`				
			}
		}
	}	
});

Vue.component('dev-lane', {
	props: ['developer'],
	template: `	
		<div class="grid">
			 <task
	      v-for="item in developer.tasks"
	      v-bind:points="item.points"
	      v-bind:title="item.title"
	      v-bind:key="item.id">
	    </task>
		</div>	
	`,
	mounted: function(){

		this.gridInstance = new Muuri(this.$el, {dragEnabled:true,
		});
		console.log('mounted');
	},	
	updated: function(){		
		this.gridInstance = new Muuri(this.$el, {dragEnabled:true,
		});
		console.log('updated', this.gridInstance);
	}
})

Vue.component('dev-details', {
	props: ['developer'],
	template: `
	<div>
		<div class="developer-panel">
			{{developer.name}}
		</div>
		<dev-lane v-bind:developer="developer"></dev-lane>
	</div>
		`
})

function createTestDevelopers(){
	var devs = [];
	for(var i = 0; i < 5; i++){
		devs.push(createTestDeveloper())
	}
	return devs;
}

function createTestDeveloper(){
	return {
		name: faker.name.findName(),
		tasks: createTasks()
	}
}

function createTasks(){
	var tasks = [];
	for(var i = 0; i < 3; i++){
		tasks.push(createTask());
	}
	return tasks;
}

function createTask(){
	return {
		id: faker.random.uuid(),
		points: faker.random.number({min:1, max:5}),
		title: faker.name.jobTitle()
	}
}


var vm = new Vue({
  el: '#sprint',
  data: {
    developers: createTestDevelopers()
  }
});