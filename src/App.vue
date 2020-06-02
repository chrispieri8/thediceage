<template>
  <div id="app" class="grid-layout">

    <main-header class="header" />

    <main class="main-content">
      <router-view/>
    </main>

    <main-footer class="footer"></main-footer>

    <div class="background"></div>
  </div>
</template>

<script>
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

  /* raleway-regular - latin */
  @font-face {
    font-display: swap;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    src: local('Raleway'), local('Raleway-Regular'),
        url('./assets/raleway-v14-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('./assets/raleway-v14-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* raleway-italic - latin */
  @font-face {
    font-display: swap;
    font-family: 'Raleway';
    font-style: italic;
    font-weight: 400;
    src: local('Raleway Italic'), local('Raleway-Italic'),
        url('./assets/raleway-v14-latin-italic.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('./assets/raleway-v14-latin-italic.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* raleway-700 - latin */
  @font-face {
    font-display: swap;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    src: local('Raleway Bold'), local('Raleway-Bold'),
        url('./assets/raleway-v14-latin-700.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('./assets/raleway-v14-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  .header {
    grid-row: 1 2;
  }

  .main-content {
    width: 100%;
    max-width: var(--max-page-width);
    margin-left: auto;
    margin-right: auto;
    grid-row: 2 3;
  }

  .footer {
    grid-row-start: 3;
  }

  .grid-layout {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 70px auto 80px;

  }
</style>

<style>

:root {

  --primary-1: #F7FBF5;
  --primary-2: #D8F6D9;
  --primary-3: #B8F6A9;
  --primary-4: #9BEB83;
  --primary-5: #63D768; /* main */
  --primary-6: #2EC740;
  --primary-7: #1DB954;
  --primary-8: #1C6E39;
  --primary-9: #18322C;
  --primary-10: #0E1D1A;


  --secondary-1: #84ECF8;
  --secondary-2: #4BDEF5;
  --secondary-3: #2AC1E1; /* main */
  --secondary-4: #439FB4;
  --secondary-5: #015978;
  --secondary-6: #003957;

  --accent-1: #FCBFCD;
  --accent-2: #F68C96;
  --accent-3: #ED5846;
  --accent-4: #AC3E38;

  --grey-1: #F7FAFC;
  --grey-2: #EDF2F7;
  --grey-3: #E2E8F0;
  --grey-4: #CBD5E0;
  --grey-5: #A0AEC0;
  --grey-6: #718096;
  --grey-7: #4A5568;
  --grey-8: #2D3748;
  --grey-9: #1A202C;

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
  color: var(--grey-9);
  position: relative;
}

/* Remove Some Default button behavior */
button {
  border-style: none;
  border: none;
  font-family: 'Raleway', sans-serif;
}

.background {
  position: absolute;
  z-index: -99;
  opacity: .8;
  top: 0;
  left: 0;
  height: 286px;
  width: 100%;
  background-image: url('./assets/bg_row_1.svg'),
                    url('./assets/bg_row_2.svg'),
                    url('./assets/bg_row_3.svg'),
                    url('./assets/grid.svg');
  background-size: 300px 300px,
                    300px 300px,
                    300px 300px,
                    102px 90px;
  background-position: 0 -100px,
                        60px -5px,
                        0 85px,
                        0 0;
  background-repeat: repeat-x,
                      repeat-x,
                      repeat-x,
                      repeat;
  }

</style>
