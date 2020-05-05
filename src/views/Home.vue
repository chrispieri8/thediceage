<template>
  <div class="main">

    <div class="prefrences">
      <div class="search-container">
        <img src="../assets/search-icon.svg" alt="search-icon">
        <input class="search" type="text" placeholder="e.g. Hero Realms" v-model="search">

      </div>

      <div class="category-tags">
        <template v-for="(tag, index) in tags">
          <CategoryTag :title='tag' v-on:tagSelected="tagSelected" :key="index" />
        </template>
      </div>
    </div>

    <transition-group name="list-complete" tag="p" class="posts-container">
      <div class="posts" v-for="blogPost in blogPosts" :key="blogPost.title">
        <BlogPostCard :game='blogPost' class="post" />
      </div>
    </transition-group>

  </div>
</template>

<script>
// @ is an alias to /src
import BlogPostCard from '@/components/BlogPostCard.vue';
import CategoryTag from '@/components/CategoryTag.vue';

export default {
  name: 'Home',
  components: {
    BlogPostCard,
    CategoryTag,
  },
  data() {
    return {
      tags: ['Deck Building', 'Cooperative'],
      selectedTags: [],
      search: '',
    };
  },
  methods: {
    tagSelected(title) {
      const index = this.selectedTags.indexOf(title);
      if (index > -1) {
        this.selectedTags.splice(index, 1);
      } else {
        this.selectedTags.push(title);
      }
    },
  },
  computed: {
    blogPosts() {
      const { games } = this.$store.state;
      if (!games[0].id) {
        return games;
      }
      return this.$store.state.games.filter((game) => {
        return game.title.toLowerCase().includes(this.search.toLowerCase());
      }).filter((game) => {
        return this.selectedTags.length === 0
          || game.my_tags.some((tag) => this.selectedTags.indexOf(tag) >= 0);
      });
    },
  },
};
</script>

<style scoped>

.main {
  padding: 0 20px;
}

.search-container {
  position: relative;
  width: 50%;
  min-width: 300px;
  margin: 0 auto;
}

.search-container img {
  position: absolute;
  top: 12px;
  left: 20px;
  height: 1.3em;
  z-index: 4;
}

.search {
  position: relative;
  color: var(--grey-8);
  padding: 8px 55px;
  font-family: 'Raleway', sans-serif;
  text-decoration: none;
  width: 100%;
  font-size: 1em;
  outline: none;
  transition: outline .2s ease-out;

  border: double 4px transparent;
  border-radius: 18px;
  background-image: linear-gradient(white, white),
                    linear-gradient(60deg,
                    var(--primary-4), var(--primary-5), var(--primary-6),
                    var(--secondary-2), var(--secondary-3), var(--secondary-4));
  background-origin: border-box;
  background-clip: padding-box, border-box;
  background-size: 200% 200%;
}

.search::placeholder {
  color: #A0AEC0;
}

.search:hover, .search:active, .search:focus {
  animation: animatedGradient 2s alternate ease infinite;
}

@keyframes animatedGradient {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}

.posts-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.posts {
  transition: all .4s ease-in-out;
}

.post {
    cursor: pointer;
    transition: all .2s ease-in-out;
}

@media (hover: hover) {
  .post:hover {
      box-shadow: 0 25px 55px rgba(0,0,0,.2),
                  0 16px 28px rgba(0,0,0,.24);
      transform: scale(1.05);
  }
}

@media only screen and (max-width: 600px) {
  .posts {
    width: 100%;
  }
}

.prefrences {
  margin: 10px auto;
  text-align: center;
}

.category-tags {
  display: flex;
  flex-wrap: wrap;
  max-width: 400px;
  margin: 10px auto;
  justify-content: center;
}

.list-complete-item {
  transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}

.list-complete-enter, .list-complete-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.list-complete-leave-active {
  position: absolute;
}
</style>
