<template>
    <li>
    <button class="container"
        role="checkbox"
        :aria-checked="selected"
        :class="{'is-Selected' : selected}"
        @click="select()">
        {{title}}
    </button>

    </li>
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

li {
    list-style: none;
}

.container {
    display: flex;
    align-items: center;
    margin: 5px;
    padding: 9px 12px;
    border-radius: 8px;
    cursor: pointer;
    display: inline-block;
    font-weight: bold;
    font-size: .7em;
    outline: none;
    transition: .2s ease-out;

    color: var(--grey-8);
    background: var(--grey-2);

}

@media (hover: hover) {
    .container:hover {
        color: #fff;
        background: linear-gradient(60deg, var(--primary-5), var(--secondary-3));
    }
}

.container:focus {
    box-shadow: 0 0 0 3pt rgba(169, 227, 125, .4);
}

.container:active {
    box-shadow: 0 0 0 4pt rgba(169, 227, 125, .6);
}

.is-Selected {
    color: #fff;
    background: linear-gradient(60deg, var(--primary-5), var(--secondary-3));
}

</style>
