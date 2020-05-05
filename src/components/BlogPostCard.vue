<template>
  <div class="container" @click="goToPost()">
    <template v-if="game.id">
    <div class="game-content"></div>
    <div class="game-image" v-bind:style="{ backgroundImage: 'url(' + game.feature_image + ')' }" alt="Game"></div>
    <div class="game-title">{{game.title}}</div>
    <div class="game-stats">
        <div>
            <img class="stat-icon" src="../assets/calendar-alt-regular.svg">
            {{publishDate}}
        </div>
        <div>
            <img class="stat-icon" src="../assets/clock-regular.svg">
            {{game.stats.time[0]}}
            <span v-if="game.stats.time[1]">
                - {{game.stats.time[1]}}
            </span>
        </div>
        <div>
            <img class="stat-icon" src="../assets/user-friends-solid.svg">
            {{game.stats.players[0]}}
            <span v-if="game.stats.players[1]">
                - {{game.stats.players[1]}}
            </span>
        </div>
    </div>
    <div class="game-rating">
        {{game.stats.rating}}
        <span class="out-of-10">/10</span>
    </div>
    <div class="game-tags">
        {{game.my_tags.join(' + ')}}
    </div>

    </template>
  </div>
</template>

<script>
export default {
    name: 'BlogPostCardLg',
    props: {
        game: Object,
    },
    methods: {
        goToPost() {
            this.$router.push({
                name: 'BlogPosts',
                params: {
                    title: this.game.title,
                },
            });
        },
    },
    computed: {
        publishDate() {
            const date = new Date(this.game.created_at).toLocaleDateString('en-US');
            return date;
        },
    },
};
</script>

<style scoped>
    .container {
        display: grid;
        grid-template-rows: 180px auto 63px auto;
        grid-template-columns: 170px 110px;
        border-radius: 50px 50px 30px 10px;
        min-height: 280px;
        margin-bottom: 10%;
        /* box-shadow: 0 1px 2px rgba(0,0,0,0.07); */
    }

    .game-image {
        grid-area: 1/1/2/3;
        background-position: center top;
        border-radius: 50px 50px 0 0;
        border-bottom: 5px solid var(--primary-5);
    }

    .game-title {
        grid-area: 2/1/3/3;
        font-weight: bold;
        font-size: 30px;
        padding: 0 20px;
        margin-top: 20px;
        margin-bottom: 10px;
        line-height: 30px;
    }

    .game-content {
        grid-area: 2/1/5/3;
    }

    .game-stats {
        grid-area: 3/1/4/2;
        padding-left: 20px;
        font-size: 16px;
    }

    .game-rating {
        grid-area: 3/2/4/3;
        justify-self: end;
        padding-right: 20px;
        color: var(--primary-5);
        font-weight: bold;
        font-size: 40px;
    }

    .out-of-10 {
        color: var(--primary-5);
        font-weight: bold;
        font-size: 13px;
    }

    .game-tags {
        grid-area: 4/1/5/3;
        padding-left: 20px;
        padding-right: 20px;
        margin: 10px 0;
        font-size: 16px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: bold;
    }

    .stat-icon {
        height: 15px;
        margin-right: 10px;
    }

    .container:empty {
        box-shadow: none;
        background-repeat: no-repeat;
        background-image:
            linear-gradient(rgba(0,0,0,.1) 100%),
            linear-gradient(rgba(0,0,0,.1) 100%),
            linear-gradient(rgba(0,0,0,.1) 100%),
            linear-gradient(rgba(0,0,0,.1) 100%);
        background-size:
            100% 170px,
            70% 20px,
            30% 20px,
            50% 20px;
        background-position:
            0 0,
            20px 180px,
            20px 210px,
            20px 240px;
    }

@media only screen and (max-width: 600px) {
    .container {
        width: 100%;
        grid-template-rows: 40px 70px 40px;
        grid-template-columns: 150px auto 1fr;
        border-radius: 0;
        min-height: 0;
        margin-bottom: 2%;
    }

    .game-image {
        grid-area: 1/1/4/2;
        background-size: cover;
        border-bottom: none;
        border-radius: 0;
    }

    .game-title {
        grid-area: 1/2/2/4;
        font-size: 1.4em;
        margin-top: 5px;
        padding-left: 10px;
        padding-right: 0;
    }

    .game-stats {
        grid-area: 2/2/3/3;
        font-size: 1em;
        padding-left: 10px;
        align-self: center;
    }

    .game-rating {
        grid-area: 2/3/3/4;
        font-size: 2em;
        align-self: center;
        padding-right: 10px;
    }

    .game-tags {
        grid-area: 3/2/4/4;
        font-size: 1em;
        margin: 0;
        align-self: center;
        padding-left: 10px;
    }

    .out-of-10 {
        display: none;
    }

    .container:empty {
        background-image:
            linear-gradient(rgba(0,0,0,.1) 100%),
            linear-gradient(rgba(0,0,0,.1) 100%),
            linear-gradient(rgba(0,0,0,.1) 100%),
            linear-gradient(rgba(0,0,0,.1) 100%),
            linear-gradient(rgba(0,0,0,.1) 100%);
        background-size:
            150px 150px,
            50% 20px,
            25% 20px,
            30% 20px,
            40% 20px;
        background-position:
            0 0,
            160px 10px,
            160px 50px,
            160px 80px,
            160px 120px;
    }
}
</style>>
