<template>

    <div class="main">
        <div class="title">
            <h1>{{blogPost.title}}</h1>
        </div>

        <!-- <BlogStats v-if="blogPost.stats" class="stats-row" :time="blogPost.stats.time" :rating="blogPost.stats.rating"  :amazon="blogPost.amazon"
                    :players="blogPost.stats.players" /> -->

        <div class="content-row">
            <div class="description" v-html="blogPost.html"></div>
            <div class="stats-column">
                <BlogStats v-if="blogPost.stats" :time="blogPost.stats.time" :rating="blogPost.stats.rating"  :amazon="blogPost.amazon"
                    :players="blogPost.stats.players"
                />
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
            const result = this.$store.state.games.find((game) => game.title === this.title);
            return result || {};
        },
        jsonLD() {
            if (!this.blogPost.authors) {
                return null;
            }
            return {
                '@context': 'https://schema.org',
                '@type': 'BlogPosting',
                mainEntityOfPage: {
                    '@type': 'WebPage',
                    '@id': this.blogPost.url,
                },
                headline: this.blogPost.title,
                image: [
                    this.blogPost.feature_image,
                ],
                datePublished: this.blogPost.published_at,
                dateModified: this.blogPost.updated_at,
                author: {
                    '@type': 'Person',
                    name: this.blogPost.authors[0].name,
                },
                publisher: {
                    '@type': 'Organization',
                    name: 'The Dice Age',
                    logo: {
                        '@type': 'ImageObject',
                        url: 'https://thediceage.com/logo_w_title.png',
                    },
                },
            };
        },
    },
    metaInfo() {
        return {
            title: this.blogPost.title,
            htmlAttrs: {
                lang: 'en',
                amp: true,
            },
            meta: [
                {
                    name: 'description',
                    content: this.blogPost.excerpt,
                },
            ],
            script: [{
                type: 'application/ld+json',
                json: this.jsonLD,
            }],
        };
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

.title {
    text-align: center;
    font-size: 1.5em;
    color: var(--grey-9);
}

.description {
    white-space: pre-line;
    flex-basis: 75%;
    flex-shrink: 2;
    color: var(--grey-9);
}

.description >>> img {
    max-width: 100%;
}

.description >>> .kg-embed-card {
    overflow: hidden;
    padding-top: 56.25%;
    margin: 0;
    position: relative;
}

.description >>> .kg-embed-card iframe {
    border: 0;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
}

.description >>> .kg-embed-card iframe:empty {
    background-repeat: no-repeat;
    background-image:
        linear-gradient(rgba(0,0,0,.1) 100%);
    background-size:
        100% 100%;
    background-position:
        0 0;
}

.description >>> a {
    text-decoration: none;
    color: var(--grey-9);
    position: relative;
}

.description >>> a::after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 75%;
    left: -0.1em;
    right: -0.1em;
    bottom: 0;
    transition: top 200ms cubic-bezier(0, .8, .13, 1);
    background-color: var(--primary-3);
}

.description >>> a:hover::after {
    top: 0;
}

.description >>> li {
    margin-top: .5em;
    margin-bottom: .5em;
}

.description >>> ol {
    list-style: none;
    counter-reset: my-counter;
    padding-left: 50px;
}

.description >>> ol li {
    counter-increment: my-counter;
    position: relative;
    margin: 0 0 1em 0;
}

.description >>> ol li::before {
    content: counter(my-counter);
    color: var(--primary-5);
    font-size: 1.2em;
    font-weight: bold;
    margin-right: .3em;
    border: 3px solid var(--primary-5);
    border-radius: 50%;
    transform: rotate(-10deg);
    position: absolute;
    top: -5px;
    left: -45px;
    height: 1.5em;
    width: 1.5em;
    text-align: center;
    list-style-position: inside;
    line-height: 1.1em;
}

.description >>> ul {
    /* list-style: circle url('../assets/clock-regular.svg') inside; */
    /* padding-left: 2rem; */
    /* list-style-type: none; */
}

/* .description >>> ul li { */
    /* padding-left: 2rem; */
    /* background-image: url('../assets/clock-regular.svg'); */
    /* background-position: 0 0;
    background-size: 1.2rem 1.2rem; */
    /* background-repeat: no-repeat; */
    /* margin-top: 1em; */
    /* margin-bottom: 1em; */
/* } */

/* .description >>> ul li{
    background-image: url('../assets/clock-regular.svg');
    background-repeat: no-repeat;
    background-position: 0 0;
} */


.stats-column {
    flex-basis: 19%;
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
      flex-flow: column wrap;
      /* flex-wrap: wrap; */
      max-height: 300px;
      justify-content: space-around;
  }
}

</style>
