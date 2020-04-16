<template>
    <div>
        <div class="main">
            <div>
                <router-link to="/" style="display : flex">
                    <img class="logo" alt="Dice Age Logo" src="../assets/logo.svg" >
                    <img class="logo_title" alt="Dice Age Title" src="../assets/logo_title.svg" >
                </router-link>
            </div>
            <div>
                <router-link class="link" to="/about"><h4>About</h4></router-link>
            </div>

        </div>
    </div>
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
    /* min-width: 350px; */
    max-height: 100px;
    /* padding: 10px; */
    /* margin: auto; */
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* .row {
} */

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
