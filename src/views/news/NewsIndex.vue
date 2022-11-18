<template>
    <div class="body">
        <HighlightPosts/>
        <div >
            <NewsCards/>
        </div>
    </div>
</template>

<script>
import HighlightPosts from '@/components/HighlightPosts.vue';
import NewsCards from '@/components/NewsCards.vue';
export default {
    name: "NewsIndex",
    components: {
        HighlightPosts,
        NewsCards
    }
}
</script>

<style lang="scss" scoped>
.body {
    padding: 0;
    margin: 0;
    background-color: #DCDCDC;
}
</style>