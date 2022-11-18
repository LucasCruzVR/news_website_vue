<template>
    <div>
        <ul class="">
            <li v-for="menu, index in menuList" :key="index" class="">
                <a v-if="index == optionActive" class="" href="#">{{menu}}</a>
                <a v-else class=""  href="#" @click="changeOption(index)">{{menu}}</a>
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

a {
    float: left;
  color: #050505;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 20px;
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
</style>