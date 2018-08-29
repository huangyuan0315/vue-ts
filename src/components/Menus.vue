<template>
<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#fff"
    text-color="black" active-text-color="red">
    <router-link to="/">
        <el-menu-item index="1">
           HOME
        </el-menu-item>
    </router-link>
    <router-link to="/checkboxs">
        <el-menu-item index="2">
          CHECKBOX
        </el-menu-item>
    </router-link>
    <slot></slot>
</el-menu>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Menu, MenuItem } from "element-ui";
Vue.use(Menu);
Vue.use(MenuItem);
@Component
export default class HelloWorld extends Vue {
  activeIndex: string = "1";
  handleSelect(key: string, keyPath: Array<string>) {
    console.log(key, keyPath);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-menu {
  display: flex;
  justify-content: center;
}
</style>
