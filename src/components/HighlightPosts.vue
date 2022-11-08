<template>
    <div class="highlight">
      <div class="large">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" class="high-image" />
        <div class="bottom-left-large">#TAG</div>
      </div>
  
      <div class="small">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" class="" />
        <div class="bottom-left-small-top">#TAG</div>
        <div class="pad-between"></div>
        <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" class="" />
        <div class="bottom-left-small">#TAG</div>
      </div>
  
      <div class="small">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" class="" />
        <div class="bottom-left-small-top">#TAG</div>
        <div class="pad-between"></div>
        <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" class="" />
        <div class="bottom-left-small">#TAG</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HighlightPosts'
  }
  </script>
  
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style lang="scss" scoped>
  h3 {
    margin: 40px 0 0;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: inline-block;
    margin: 0 10px;
  }
  
  a {
    color: #42b983;
  }
  
  * {
    box-sizing: border-box;
  }
  
  
    
  .bottom-left-large {
    position: absolute;
    bottom: 30px;
    left: 30px;
    //background-color: #2F4F4F;
    padding: 0.2rem 0.5rem;
    background: #1c2620;
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
  }
  
  .bottom-left-small {
    position: absolute;
    bottom: 30px;
    left: 30px;
    padding: 0.2rem 0.5rem;
    background: #1c2620;
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
  }
  .bottom-left-small-top {
    position: absolute;
    top: 190px;
    left: 30px;
    padding: 0.2rem 0.5rem;
    background: #1c2620;
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
  }
  
  .pad-between {
    padding-bottom: 1rem;
  }
  .highlight {
    position: relative;
    padding-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    padding-bottom: 4rem;
  
    .large {
      display: inline-block;
      position: relative;
      width: 46%;
      float: left;
      padding-right: 1rem;
    }
    
    .small {
      display: inline-block;
      position: relative;
      width: 22%;
      float: center;
      padding: 1rem ;
    }
  }
  
  img {
    width: 100%;
    border-radius: 2%;
  }
  
  
  </style>
  