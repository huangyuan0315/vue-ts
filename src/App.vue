<template>
  <div id="app">
   <Menus></Menus>
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
const Menus = (): any => import('@/components/Menus.vue');
@Component({
  name: "app",
  components:{ Menus }
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
a{
  text-decoration: none;
}
</style>
