<template>
  <div class="main">

    <div class="prefrences">
      <input class="search" type="text" placeholder="e.g. Hero Realms" v-model="search">
      <div class="category-tags">
        <template v-for="(tag, index) in tags">
          <CategoryTag :title='tag' v-on:tagSelected="tagSelected" :key="index" />
        </template>
      </div>
    </div>

    <transition-group name="list-complete" tag="p" class="posts-container">
      <div class="posts" v-for="blogPost in blogPosts" :key="blogPost.name">
        <BlogPostCard :game='blogPost' />
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
      if (!games[0].image) {
        return games;
      }
      return this.$store.state.games.filter((game) => {
        return game.name.toLowerCase().includes(this.search.toLowerCase());
      }).filter((game) => {
        return this.selectedTags.length === 0
          || game.tags.some((tag) => this.selectedTags.indexOf(tag) >= 0);
      });
    },
  },
};
</script>

<style scoped>

.main {
  padding: 0 20px;
}

.search {
  color: var(--secondary-color);
  padding: 5px 15px;
  font-family: 'Raleway', sans-serif;
  font-size: 1em;
  width: 50%;
  min-width: 250px;
  text-decoration: none;
  outline: none;
  transition: outline .2s ease-out;
  /* border: 1px solid; */
  /* border-radius: 8px; */
}

.search:hover, .search:active, .search:focus {
  outline: 7px solid rgba(169, 227, 125, .4);
}

.posts-container {
  display: flex;
  flex-wrap: wrap;
  /* padding: 0 20px */
  /* justify-content: space-around; */
}

.posts {
  flex-basis: 50%;
  transition: all .4s ease-in-out;
  /* min-width: 469px; */
  /* flex-grow: 1; */
}

@media only screen and (max-width: 950px) {
  .posts {
    flex-basis: 100%
  }

  .posts-container {
    justify-content: center;
  }
}

@media only screen and (max-width: 580px) {
  .posts {
    flex-basis: 100%
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
.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}
</style>
