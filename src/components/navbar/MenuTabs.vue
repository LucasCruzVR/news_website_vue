<template>
    <div>
        <ul class="navbar-nav">
            <li v-for="menu, index in menuList" :key="index" class="nav-item">
                <a v-if="index == optionActive" class="nav-link active-color" href="#">{{menu}}</a>
                <a v-else class="nav-link"  href="#" @click="changeOption(index)">{{menu}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'MenuTabs',
    data() {
        return {
            menuList: [
                'News', 'Articles', 'Categories'
            ],
            optionActive: 0
        }
    },
    methods: {
        changeOption(index) {
            this.optionActive = index;
            console.log(index);
            this.$emit("changeOption", index);
        }
    }
}
</script>

<style lang="scss" scoped>
.active-color {
    color: #fff;
}
a:visited, a:hover {
    color: #fff;
}

li {
    padding: 0 0.5rem;
    a.active-color{
        border-bottom: 2px solid #fff;
        display: block;
        padding: 2px 0;
    }
}
</style>