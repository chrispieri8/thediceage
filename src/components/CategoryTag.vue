<template>
  <a class="container"
    tabindex="0"
    :class="{'is-Selected' : selected}"
    v-on:keyup.enter="select()"
    @mousedown="mouseDown($event)"
    @click="select()">
      {{title}}
  </a>
</template>

<script>
export default {
    name: 'CategoryTag',
    data() {
        return {
            selected: false,
        };
    },
    props: {
        title: String,
    },
    computed: {

    },
    methods: {
        select() {
            this.selected = !this.selected;
            this.$emit('tagSelected', this.title);
        },
        mouseDown(e) {
            if (e) {
                e.preventDefault();
            }
        },
    },
};
</script>

<style scoped>
.container {
    display: flex;
    align-items: center;
    margin: 5px;
    padding: 7px 10px;
    /* border: 2px solid; */
    border-radius: 8px;
    cursor: pointer;
    display: inline-block;
    font-weight: bold;
    font-size: .7em;
    outline: none;
    transition: .2s ease-out;

    color: var(--grey-8);
    background: var(--grey-2);
    /* background-clip: border-box; */

    /* border: double 4px transparent;
    border-radius: 18px;
    background-image: linear-gradient(white, white),
                        linear-gradient(60deg, var(--primary-color), var(--blue));
    background-origin: border-box;
    background-clip: padding-box, border-box; */
}

@media (hover: hover) {
    .container:hover {
        color: #fff;
        background: linear-gradient(60deg, var(--primary-5), var(--secondary-3));
        /* background-clip: content-box; */
        /* border: solid 1.5px transparent; */
        /* padding: 8px 11px; */
    }
}

.container:focus {
    box-shadow: 0 0 0 3pt rgba(169, 227, 125, .4);
}

.container:active {
    box-shadow: 0 0 0 4pt rgba(169, 227, 125, .6);
}

.is-Selected {
    /* color: var(--dark-primary-color);
    border-color: var(--dark-primary-color); */

    color: #fff;
        background: linear-gradient(60deg, var(--primary-5), var(--secondary-3));
}

</style>
