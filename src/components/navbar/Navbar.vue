<template>
    <nav class="top-nav">
        <ul>
            <img class="logo" src="../../assets/images/icons8-news.svg" />
            <!--<li v-for="menu, index in menuList" :key="index">
                <a v-if="index == optionActive" href="#">{{ menu }}</a>
                <a v-else href="#">{{ menu }}</a>
            </li>-->
            <MenuTabs />
            <img class="profile" src="../../assets/images/user-profile.svg" alt="">
        </ul>
    </nav>
</template>

<script>
import MenuTabs from './MenuTabs.vue';
export default {
    name: 'NavbarTop',
    components: {
        MenuTabs
    },
    data() {
        return {
            menuList: [
                'News', 'Articles', 'Categories'
            ],
            optionActive: 0
        }
    }
}
</script>

<style lang="scss" scoped>
img {
    color: green;
    height: 3rem;
}

.profile {
    width: 40px;
    height: 40px;
}

.top-nav {
    
    background-color: var(--white);
    overflow: hidden;
    position: fixed;    /* Set the navbar to fixed position */
    top: 0;    /* Position the navbar at the top of the page */
    width: 100%;    /* Full width */
    height: 70px;
    z-index: 99;
}

nav {
    display:flex;
    justify-content: center;
    ul {
        width: 100%;
        display: flex;
        list-style: none;
        align-items: center;
        justify-content: space-between;
        padding-right: 2rem;
    }
}
</style>