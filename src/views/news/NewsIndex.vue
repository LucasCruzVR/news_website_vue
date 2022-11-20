<template>
    <div>
        <Navbar />
        <div class="body">
            <HighlightPosts />
            <h2>Últimas notícias</h2>
            <div class="news-blocks">
                <NewsCards />
                <NewsCards />
            </div>
        </div>
    </div>

</template>

<script>
import HighlightPosts from '@/components/HighlightPosts.vue';
import NewsCards from '@/components/NewsCards.vue';
import Navbar from '@/components/navbar/Navbar.vue';
export default {
    name: "NewsIndex",
    components: {
        HighlightPosts,
        NewsCards,
        Navbar
    }
}
</script>

<style lang="scss" scoped>
.body {
    padding: 0;
    margin: 0;
    background-color: #e7e7e7;
}
.news-blocks {
    display: flex;
    flex-direction: row;
}
</style>