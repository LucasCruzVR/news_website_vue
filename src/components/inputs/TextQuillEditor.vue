<template>
  <div class="item-form">
    
    <label>{{ label }}</label>
    <quill-editor

      class="editor"
      v-model="content"
      @input="handleInput"
      container: container
      ref="refQuillEditor"
    ><div id="toolbar" slot="toolbar">
        <button class="ql-custom-button" @click="twitter"><TwitterIcon/></button>
      </div></quill-editor>
  </div>
</template>
<script>
var TwitterWidgetsLoader = require('twitter-widgets');
import TwitterIcon from "vue-material-design-icons/Twitter.vue";
import "quill/dist/quill.snow.css";
export default {
  name: "TextQuillEditor",
  props: {
    label: String,
    textContent: String,
  },
  components: {TwitterIcon},
  data() {
    return {
      content: this.textContent
    };
  },mounted() {  TwitterWidgetsLoader.load(); },
  methods: {
    handleInput(input) {
      this.$emit("input", input);
    },
    twitter() {
        this.content = (this.content ? this.content : "") + '<blockquote class="twitter-tweet"><a href="https://twitter.com/klobrille/status/1605204582380052480"></a></blockquote>'
    }
  },
};
</script>

<style lang="scss" scoped>
.item-form {
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 2rem;
}
textarea {
  width: 90%;
  border: solid #dedede 0.15rem;
  resize: none;
  height: 400px;
  border-radius: 5px;
}
.editor {
  background-color: var(--white-light);
}
</style>
