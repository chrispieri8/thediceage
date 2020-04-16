<template>
    <div>
        <div class="stat-row">
            <img class="stat-icon" alt="Rating" src="@/assets/trophy.svg" >
            <div class="stat-info">
                {{stats}}
                <span class="stat-unit">/10</span>
            </div>
        </div>
        <div class="stat-row">
            <img class="stat-icon" alt="Timer" src="@/assets/timer.svg" >
            <div class="stat-info">
                25 <span class="stat-unit">-</span> 30
                <span class="stat-unit">mins</span>
            </div>
        </div>
        <div class="stat-row">
            <img class="stat-icon" alt="People" src="@/assets/meeple.svg" >
            <div class="stat-info">3 <span class="stat-unit">-</span> 4 <span class="stat-unit">players</span> </div>
        </div>

        <!-- <div class="stat-row">
            <img class="stat-icon" alt="Coin" src="@/assets/coin.svg" >
            <div class="stat-info">$19.99</div>
        </div> -->

        <iframe
            style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0"
            :src="amazon_src">
        </iframe>
    </div>

</template>

<script>
export default {
    name: 'BlogStats',
    props: ['rating', 'amazon'],
    computed: {
        stats() {
            return this.rating;
        },
        amazon_src() {
            return this.amazon;
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
    width: 71px;
    height: 77px;
}

@media only screen and (max-width: 650px) {
    .stat-icon {
        /*  */
    }

}

.stat-info {
    font-size: 1.2em;
    font-weight: bold;
    margin-left: 10px;
}

.stat-unit {
    font-size : 12px;
}
</style>
