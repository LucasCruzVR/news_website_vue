<template>
    <div>
        <Navbar />
        <div class="body">
            <HighlightPosts />
            <div class="last-news">
                <h2>Últimas notícias</h2>
                <div class="news-blocks">
                    <NewsCards />
                </div>
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
    padding: 1rem 3rem;
    margin: 0;
}

.last-news {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
}

.news-blocks {
    display: flex;
    flex-direction: row;
    justify-content: center;
}
</style>