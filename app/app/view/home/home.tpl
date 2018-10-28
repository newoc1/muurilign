<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
    <script src="https://unpkg.com/web-animations-js@2.3.1/web-animations.min.js"></script>
		<script src="https://unpkg.com/hammerjs@2.0.8/hammer.min.js"></script>
		<script src="https://unpkg.com/muuri@0.7.1/dist/muuri.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script> 
    <script src="/public/lib/faker.js"></script>
		<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <link href="/public/home.css" rel="stylesheet"/>
  </head>
  <body>
<div id="sprint">
  
  <dev-details 
    v-for="dev in developers"
    v-bind:developer="dev"
    v-bind:key="dev.name"
  ></dev-details>
</div>  	   
    <script src="/public/js/home.js"></script>
  </body>
</html>