<template>
    <div>
        <ul class="">
            <li v-for="menu, index in menuList" :key="index" class="">
                <router-link v-if="menu.route == optionActive" :to="{ name: menu.route }"><a  class="active-color">{{
                        menu.name
                }}</a></router-link>
                <router-link v-else  :to="{ name: menu.route }"><a @click="changeOption(menu.route, index)">{{ menu.name
                }}</a></router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import MenuList from '@/router/menuTabs'
export default {
    name: 'MenuTabs',
    data() {
        return {
            menuList: MenuList,
            optionActive: this.$route.name
        }
    },
    methods: {
        changeOption(route, index) {
            this.optionActive = route
            this.$emit("changeOption", index);
            console.log(this.optionActive)
        }
    }
}
</script>

<style lang="scss" scoped>
a {
    color: var(--black);
    text-align: center;
    padding: 0px 16px;
    text-decoration: none;
    font-size: 20px;
    font-weight: 500;

    .active-color {
        color: var(--blue-extradark);
    }
}

ul {
    display: flex;
    list-style: none;
    width: 100%;
    justify-content: space-between;

    li {
        justify-content: center;
    }
}

.active-color {
    color: var(--blue);
}
</style>