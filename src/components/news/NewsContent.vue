<template>
  <div class="body">
    <div class="top">
      <h2 v-if="post.title">{{ post.title }}</h2>
      <h2 v-else>This is your title</h2>
      <h3 v-if="post.title">{{ post.title_description }}</h3>
      <h3 v-else>This is your description</h3>
      <div class="image-container">
        <img v-if="post.image" :src="post.image_url" />
        <img v-else src="@/assets/images/empty-image.png" />
      </div>
      <div class="info">
        <div>
          <label>Category:</label>
          <span>{{post.category.name}}</span>
        </div>
        <div>
          <label>Publicated at:</label>
          <span>post.created_at</span>
        </div>
        <div>
          <label>Publicado por:</label>
          <span>Lucas Cruz</span>
        </div>
      </div>
    </div>
    <div class="text">
      <span v-if="post.content">{{ post.content }}</span>
      <span v-else>No content</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsContent",
  props: {
    post: Object,
  },
  data() {
    return {};
  },
  created() {
    console.log(this.post.image_url)
  }
};
</script>

<style lang="scss" scoped>
.body {
  height: 100%;
  padding: 2rem 3rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 70rem;
  word-break: break-all;
}

.info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: var(--gray-1);
  font-weight: bold;
}

img {
    width: 100%;
    width: 60rem;
    max-width: 60rem;
    height: 25rem;
}
.top {
    h1 {
        word-break: break-all;
    }
}


</style>
