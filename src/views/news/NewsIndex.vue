<template>
  <div>
    <div class="body">
      <HighlightPosts class="center"/>
      <div class="last-news center">
        <h2>Last News</h2>
        <div v-if="!loading && newsInfo.length" class="news-blocks">
          <NewsCards :posts="newsInfo" />
        </div>
        <div v-if="!newsInfo.length" class="news-blocks">
          There is no news to be shown
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HighlightPosts from "@/components/news/HighlightPosts.vue";
import NewsCards from "@/components/news/NewsCards.vue";
import * as NewsService from "@/services/NewsService";
export default {
  name: "NewsIndex",
  components: {
    HighlightPosts,
    NewsCards,
  },
  data() {
    return {
      newsInfo: [],
      article: {},
      games: {},
      world: {},
      technology: {},
      loading: true,
    };
  },
  created() {
    this.getAllNews();
  },
  methods: {
    async getAllNews() {
      try {
        const allNews = await NewsService.getAllPublished();
        this.newsInfo = allNews.data.data;
        this.article = await NewsService.getHighlightsByCategory('Article');
        this.games = await NewsService.getHighlightsByCategory('Games');
        this.world = await NewsService.getHighlightsByCategory('World');
        this.technology = await NewsService.getHighlightsByCategory('Technology');
        this.loading = false;
      } catch (err) {
        this.loading = false;
        console.log(err);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.body {
  padding: 1rem 5rem;
  margin: 0;
}

.last-news {
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
}

.news-blocks {
  display: flex;
}
.center {
  justify-content: center;
}
</style>
