<template>
    <header>
        <nav class="main">
            <router-link to="/" style="display : flex" accesskey="h">
                <img class="logo" alt="The Dice Age" src="../assets/logo.svg" >
                <img class="logo_title" alt="" src="../assets/logo_title.svg" >
            </router-link>
            <router-link class="link" to="/about"><h4>About</h4></router-link>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'MainHeader',
};
</script>

<style scoped>

.main {
    max-width: var(--max-page-width);
    padding: 0 20px;
    max-height: 100px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    display: block;
    height: 50px;
    margin-right: 10px;
}

.logo_title {
    display: block;
    height: 35px;
    margin-top: 5px;
}

.link {
    text-decoration: none;
    color : inherit;
}

.link.router-link-exact-active {
  color: var(--primary-5);
}

</style>
