<template>
    <div class="body">
        <div class="top">
            <h1>{{ content.title }}</h1>
            <h3>{{ content.title_description }}</h3>
            <div class="image-container">
                <img :src="content.image">
            </div>
            <span>content</span>
        </div>
        <div class="text">
            <span>{{ content.content }}</span>
        </div>
    </div>
</template>

<script>
import * as NewsService from '@/services/NewsService'
export default {
    name: 'NewsShow',
    created() {
        this.getNews();
    },
    data() {
        return {
            id: this.$route.params.id,
            loading: false,
            content: []
        }
    },
    methods: {
        async getNews() {
            try {
                this.loading = true;
                this.content = await NewsService.getPublished(this.id);
                this.content = this.content.data
                console.log(this.content)
                this.loading = false
            } catch (err) {
                console.log(err);
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.body {
    padding: 1rem 5rem;
    margin: 0;
    background-color: var(--white-light);
}

.top { 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0rem
}

.image-container {
    width: 1000px;
    height: 400px;
}

img {
    width: 100%;
    height: 100%;
}

.text {
    padding: 3rem 7rem;
}
</style>