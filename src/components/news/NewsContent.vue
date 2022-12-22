<template>
    <div class="body">
        <div class="top">
            <h2 v-if="post.title">{{ post.title }}</h2>
            <h2 v-else>Write a TITLE</h2>
            <h3 v-if="post.title">{{ post.title_description }}</h3>
            <h3 v-else>Write a TITLE DESCRIPTION</h3>
            <div class="image-container">
                <img v-if="post.image" :src="post.image">
                <img v-else src="@/assets/images/empty-image.png">
            </div>
        </div>
        <div class="text">
            <span>{{ post.content }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NewsContent',
    props: {
        post: Object
    },
    data() {
        return {
        }
    }
}
</script>

<style lang="scss" scoped>
    
</style>