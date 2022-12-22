<template>
    <div class="highlight">
      <div class="item h-2 w-2">
        <img src="@/assets/images/empty-image.png" class="" />
        <span class="tag">#Most Viewed</span>
      </div>
  
      <div class="item h-1 w-1">
        <img src="@/assets/images/empty-image.png" class="" />
        <div class="tag">#Last Article</div>
      </div>
  
      <div class="item h-1 w-1">
        <img src="@/assets/images/empty-image.png" class="" />
        <div class="tag">#Game</div>
      </div>

      <div class="item h-1 w-1">
        <img src="@/assets/images/empty-image.png" class="" />
        <div class="tag">#Technology</div>
      </div>

      <div class="item h-1 w-1">
        <img src="@/assets/images/empty-image.png" class="" />
        <div class="tag">#World</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HighlightPosts',
    data() {
      return {
        highlightImages: ['Most Viewed', 'Article', 'Game', 'Technology', 'World']
      }
    }
  }
  </script>
  
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

.highlight {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 9rem;
  gap: 0.5rem;
  align-itens: center;
  .item {
    position: relative;
    
    img {
      width: 100%;
      height: 100%;
      border-radius: 0.8rem;
    }
    .tag {
      position: absolute;
      background-color: rgba(0, 50, 100, 0.5);
      border-radius: 0.8rem;
      left: 0;
      bottom: 0;
      width: 100%;
      color: var(--white);
      padding: 0.7rem;
      font-size: 1rem;
    }
  }
}

.h-1 {
  grid-row: span 1;
}
.h-2 {
  grid-row: span 2;
}
.w-1 {
  grid-column: span 1;
}
.w-2 {
  grid-column: span 2;
}
</style>
  