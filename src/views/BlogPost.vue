<template>

    <div class="main">
        <div>
            <h1>{{blogPost.name}}</h1>
        </div>

        <p class="intro">
            {{blogPost.description}}
        </p>

        <div class="iframe-container" v-if="blogPost.youtubeURL && blogPost.youtubeURL.length">
            <div class="skeleton"></div>
            <iframe
            v-bind:src='blogPost.youtubeURL' frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        </div>

        <!-- <div class="stats-row"> -->
            <BlogStats :rating="blogPost.rating" class="stats-row" />
        <!-- </div> -->

        <div class="content-row">
            <div class="description">

                <p>
                    {{blogPost.review}}
                </p>

            </div>
            <div class="stats-column">
                <BlogStats :rating="blogPost.rating" />
            </div>
        </div>

    </div>
</template>

<script>
import BlogStats from '@/components/BlogStats.vue';

export default {
    name: 'BlogPost',
    components: { BlogStats },
    props: {
        title: { type: String },
    },
    computed: {
        blogPost() {
            const result = this.$store.state.games.find((game) => game.name === this.title);
            return result || {};
        },
    },
};
</script>

<style scoped>

.main {
    padding: 0 20px;
    position: relative;
}

.content-row {
    display: flex;
    justify-content: space-between;
    position: relative;
}

.intro{
    font-style: italic;
}

.description {
    white-space: pre-line;
    flex-basis: 75%;
    flex-shrink: 2;
}

.stats-column {
    flex-basis: 21%;
    margin-top: 18px;
    position: sticky;
    top: 10px;
    right: 0;
    height: min-content;
}

.stats-row {
    display: none;
    margin-top: 1em;
}

@media only screen and (max-width: 650px) {
  .description {
    flex-basis: 100%
  }

  .stats-column {
    display: none;
  }

  .stats-row {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
  }
}

.iframe-container {
  overflow: hidden;
  padding-top: 56.25%;
  position: relative;
}

.iframe-container iframe, .skeleton {
   border: 0;
   height: 100%;
   left: 0;
   position: absolute;
   top: 0;
   width: 100%;
}

/* 4x3 Aspect Ratio */
.iframe-container-4x3 {
  padding-top: 75%;
}

.skeleton {
    background-repeat: no-repeat;
    background-image:
        linear-gradient(rgba(0,0,0,.1) 100%);
    background-size:
        100% 100%;
    background-position:
        0 0;
}

</style>
