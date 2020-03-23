<template>
  <div id="app" class="grid-layout">
    <!-- <side-nav class="side-nav"></side-nav> -->
    <main-header class="header" />

    <div class="main-content">
      <router-view/>
    </div>

    <main-footer class="footer"></main-footer>
  </div>
</template>

<script>
// import SideNav from './components/SideNav.vue';
import MainHeader from './components/MainHeader.vue';
import MainFooter from './components/MainFooter.vue';

export default {
  name: 'App',
  components: { MainFooter, MainHeader },
  created() {
    this.$store.dispatch('getGames');
  },
};
</script>

<style scoped>
  /* .side-nav {
    grid-column: 1 2;
    grid-row-start: 1;
    grid-row-end: 3;
  } */

  /* .header, .main-content, .footer {
    padding: 20px;
  } */

  .header {
    grid-row: 1 2;
  }

  .main-content {
    /* grid-column-start: 2; */
    /* max-width: var(--max-page-width); */
    width: 100%;
    max-width: var(--max-page-width);
    margin-left: auto;
    margin-right: auto;
    grid-row: 2 3;
  }

  .footer {
    /* grid-column-start : 2; */
    grid-row-start: 3;
  }

  .grid-layout {
    min-height: 100vh;
    display: grid;
    /* grid-template-columns: 250px 1fr; */
    grid-template-rows: 70px auto 80px;
    /* max-width: var(--max-page-width); */
    /* margin: auto; */

  }
</style>

<style>

:root {
  --primary-color : #A9E37D;
  --dark-primary-color: hsl(94, 65%, 55%);
  --darker-primary-color: hsl(94, 65%, 47%);
  /* --primary-color : #3f72af; */
  --light-primary-color : #f9f7f7;
  --grey-color : hsla(94, 3%, 69%, 1);
  /* --secondary-color : #2c3e50; */
   --secondary-color : #282828;
  --max-page-width : 1080px;
}

body, html {
  margin: 0;
  box-sizing: border-box;
  line-height: 1.4;
}

/* https://css-tricks.com/snippets/css/fluid-typography/ */
html {
  font-size: 16px;
}

@media screen and (min-width: 320px) {
  html {
    font-size: calc(16px + 4 * ((100vw - 320px) / 680));
  }
}

@media screen and (min-width: 1000px) {
  html {
    font-size: 20px;
  }
}


*,
*::before,
*::after {
  box-sizing: inherit;
}

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: var(--secondary-color);
  background-color: var(--light-primary-color);
}
</style>
