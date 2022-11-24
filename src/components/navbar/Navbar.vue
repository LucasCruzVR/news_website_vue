<template>
    <nav class="top-nav">
        <ul>
            <img class="logo" src="../../assets/images/icons8-news.svg"/>
            <!--<li v-for="menu, index in menuList" :key="index">
                <a v-if="index == optionActive" href="#">{{ menu }}</a>
                <a v-else href="#">{{ menu }}</a>
            </li>-->
            <MenuTabs/>
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
    height: 4rem;
}

.profile {
    width: 50px;
    height: 50px;
}

.top-nav {
    background-color: var(--white);
    display: flex;
    max-height: 70px;
    width: 100%;
}

a {
    display: flex;
    //color: #070606;
    color: var(--black);
    padding: 0px;
    text-decoration: none;
    font-size: 17px;
}

nav {
    
    ul {
        display: flex;
        list-style: none;
        align-items: center;
        width: 100%;
        padding: 0px 15px;
        justify-content: space-between;
    }
}
</style>