<template>
    <div class="post" @click="goToPost()">
        <template v-if="game.rating">
            <img class="post-image" v-bind:src="game.image" alt="Game">
            <div class="post-description">
                <div class="title">{{game.name}}</div>
                <div class="game-description">{{game.timestamp}} - {{game.description}}</div>
                <div v-for="(tag, index) in game.tags" :key="index">
                    <h5 class="tag">{{tag}}</h5>
                </div>
                <!-- <div class="bottom-row"> -->
                    <!-- <div class="review-date"> -->
                        <!-- 🗒  -->
                        <!-- {{game.timestamp}} -->
                    <!-- </div> -->
                <!-- </div> -->
                <div class="rating">{{game.rating}}</div>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    name: 'BlogPostCard',
    props: {
        game: Object,
    },
    methods: {
        goToPost() {
            this.$router.push({
                name: 'BlogPosts',
                params: {
                    title: this.game.name,
                },
            });
        },
    },
};
</script>

<style scoped>
.post {
    position: relative;
    display: flex;
    height: 220px;
    margin: 1%;
    cursor: pointer;
    box-shadow: 0 1px 2px rgba(0,0,0,0.07);
    transition: all .3s ease;
    overflow: hidden;
}

.title {
    font-weight: bold;
    font-size: 1.3em;
}

.bottom-row {
    display: flex;
    justify-content: space-between;
}

.rating {
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-weight: bold;
    font-size: 1.3em;
}

.tag {
    margin: 0;
}

.review-date {
    font-size: .8em;
}

.game-description {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    /* overflow: hidden; */
    font-size: .8em;
    /* flex-basis: 5.6em; */
    /* max-height: 90px; */
}

.post-description {
    padding: 2%;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    width: 100%;
}

.post-image {
    display: block;
    /* max-height: 220px; */
    object-fit: cover;
    width: 220px;
    transition: all .3s ease;
}

.post:hover .post-image {
    width: 230px;
    /* height: 230px; */
}

@media only screen and (max-width: 580px) {
    .post {
        height: 155px;
    }

    .post-image  {
        width: 155px;
    }

    .post:hover .post-image {
        width: 160px;
    /* height: 230px; */
    }

    .game-description {
        -webkit-line-clamp: 3;
    }
}

.post:hover {
    box-shadow: 0 3px 5px rgba(0,0,0,0.07);
}

.post:empty {
    box-shadow: none;
    background-repeat: no-repeat;
    background-image:
        linear-gradient(rgba(0,0,0,.1) 100%),
        linear-gradient(rgba(0,0,0,.1) 100%),
        linear-gradient(rgba(0,0,0,.1) 100%),
        linear-gradient(rgba(0,0,0,.1) 100%),
        linear-gradient(rgba(0,0,0,.1) 100%),
        linear-gradient(rgba(0,0,0,.1) 100%);
    background-size:
        40% 100%,
        40% 15%,
        50% 10%,
        50% 10%,
        50% 10%,
        35% 10%;
    background-position:
        0 0,
        70% 5%,
        84% 30%,
        84% 45%,
        84% 60%,
        65% 95%;
}
</style>
