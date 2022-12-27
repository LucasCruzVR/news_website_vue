<template>
  <div class="body">
    <h1 v-if="!preview">Share a Post</h1>
    <h1 v-else>Post Preview</h1>
    <div v-if="!preview" class="create-news">
      <div class="inputs">
        <InputText label="Title" :inputValue="post.title" v-model="post.title" />
        <InputText label="Title Description" :inputValue="post.title_description" v-model="post.title_description" />
      </div>
      <ContentText label="Content" :textContent="post.content" v-model="post.content" class="content" />
      <div class="selects">
        <Select label="Category" :inputValue="post.category" v-model="post.category" />
        <div class="image-upload">
          <div class="send-image">
            <label for="file" class="input-file">Select an image</label>
            <input type="file" @change="selectedImage" id="file"/>
          </div>
          <input type="text" class="image-text" readonly disabled  v-model="post.image.name">
        </div>
      </div>
      <div class="buttons">
        <button class="secondary-button" @click="preview = !preview">Preview</button>
        <button class="primary-button" v-if="loading" @click="save">
          <img class="button-animation" src="@/assets/images/chart-donut.png" />
        </button>
        <button class="primary-button" v-else @click="save">Save</button>
      </div>
    </div>
    <NewsContent v-else :post="post"/>
    <button class="secondary-button" v-if="preview" @click="preview = !preview">Back</button>
    {{post.title }}
    
  </div>
</template>

<script>
import InputText from '@/components/inputs/InputText';
import ContentText from '@/components/inputs/TextQuillEditor.vue';
import Select from '@/components/inputs/Select';
import * as NewsService from '../../services/NewsService.js';
import NewsContent from '@/components/news/NewsContent.vue';

export default {
    name: 'NewsCreate',
    components: {
        InputText,
        ContentText,
        Select,
        NewsContent
    },
    data() {
        return {
            post: {
                title: "",
                title_description: "",
                content: "",
                category: {},
                image: "",
                image_url: ""
            },
            preview: false,
            loading: false,
        }
    },
    methods: {
        selectedImage(event) {
            this.post.image = event.target.files[0];
            this.post.image_url = URL.createObjectURL(this.post.image)
        },
        async save() {
            try {
                this.loading = true;
                var form = new FormData();
                form.append("title", this.post.title);
                form.append("title_description", this.post.title_description);
                form.append("category_id", this.post.category.id);
                form.append("content", this.post.content);
                form.append("image_file", this.post.image);
                console.log(form);
                await NewsService.publish(form
                );
                this.loading = false;
            } catch (err) {
                this.loading = false;
                console.log(err)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.body {
  height: 100%;
  background-color: var(--white-light);
  padding: 2rem 3rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.create-news {
  padding: 1rem;
  background-color: var(--white-dark);
  max-width: 90%;
  border-radius: 10px;
}

.content {
  overflow: hidden;
  overflow-wrap: break-word;
}

.inputs {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.selects {
  display: flex;
  width: 100%;
  justify-content: space-around;
}

.buttons {
  padding-top: 0.75rem;
  justify-content: flex-end;
  align-content: center;
  display: flex;
}

button {
  margin: 0 0.75rem;
  color: var(--black);
  font-family: "Ubuntu-Bold";
  height: 3rem;
  padding: 0 4rem;
  border-radius: 0.25rem;
  text-align: center;
  font-size: 12px;
  font-weight: 100;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  border: none;
  transition: ease-in-out 0.15s;
  cursor: pointer;
}

.primary-button {
  background: linear-gradient(to left bottom, var(--blue-dark), var(--blue-light));
}

.secondary-button {
  background: white;
  border: 2px solid var(--blue);
  color: var(--blue-dark);
}

input {
  padding-top: 2rem;
  padding-left: 4rem;
}

.button-animation {
  animation: is-rotating 1s infinite;
}

@keyframes is-rotating {
  to {
    transform: rotate(1turn);
  }
}

input[type="file"] {
  display: none;
}

.input-file {
  margin-top: 12px;
  padding: 1.1rem 0.6rem;
  width: 12rem;
  background-color: #333;
  color: #FFF;
  text-transform: uppercase;
  font-size: 12px;
  text-align: center;
  display: block;
  cursor: pointer;
  border-radius: .5rem;
  font-family: "Ubuntu-Bold";
}

.send-image {
  display: flex;
  gap: .5rem;
  flex-direction: column;
  padding-bottom: 2rem;
  padding-right: 1rem;
}

.image-text {
  font-family: inherit;
  font-weight: bold;
  width: 15rem;
  border: 0;
  border-bottom: 3px solid var(--gray-4);
  outline: 0;
  font-size: 1rem;
  color: var(--black);
  padding: 10px 0 0 0;
  margin-top: 0.8rem;
  background: transparent;
  transition: border-color 0.2s;
  border-radius: 0;
}
.image-upload {
  display: flex;
  
}
</style>
