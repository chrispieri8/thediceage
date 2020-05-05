<template>
    <div>
        <div class="stat-row">
            <img class="stat-icon" alt="Rating" src="@/assets/trophy.svg" >
            <div class="stat-info">
                {{rating}}
            </div>
        </div>
        <div class="stat-row">
            <img class="stat-icon" alt="Timer" src="@/assets/timer.svg" >
            <div class="stat-info">
                {{time[0]}}
            </div>
        </div>
        <div class="stat-row">
            <img class="stat-icon" alt="People" src="@/assets/meeple.svg" >
            <div class="stat-info">
                {{players[0]}}
                <span v-if="players[1]">+</span>
            </div>
        </div>

        <!-- <iframe
            style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0"
            :src="amazon_src">
        </iframe> -->
    </div>

</template>

<script>
export default {
    name: 'BlogStats',
    props: ['rating', 'amazon', 'time', 'players'],
    computed: {
        amazon_src() {
            return this.amazon;
        },
        my_stats() {
            return this.stats;
        },
    },
};
</script>

<style scoped>
.stat-row {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.stat-icon {
    height: 60px;
}

.stat-info {
    font-size: 1.5em;
    margin-left: 10px;
}

</style>
