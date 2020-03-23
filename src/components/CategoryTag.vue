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
    margin: 5px;
    padding: 5px;
    border: 1.5px solid;
    border-radius: 8px;
    cursor: pointer;
    display: inline-block;
    font-weight: bold;
    font-size: .6em;
    outline: none;
    transition: .2s ease-out;
}

@media (hover: hover) {
    .container:hover {
        color: var(--dark-primary-color);
        border-color: var(--dark-primary-color);
    }
}

.container:focus {
    box-shadow: 0 0 0 3pt rgba(169, 227, 125, .4);
}

.is-Selected {
    color: var(--dark-primary-color);
    border-color: var(--dark-primary-color);
}

</style>
