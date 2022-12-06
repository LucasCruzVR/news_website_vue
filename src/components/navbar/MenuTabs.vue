<template>
    <div>
        <ul class="">
            <li v-for="menu, index in menuList" :key="index" class="">
                <a v-if="index == optionActive" class="active-color" href="#">{{menu}}</a>
                <a v-else class=""  href="#" @click="changeOption(index)">{{menu}}</a>
                <div v-if="index == optionActive" class="active"></div>
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
                'News', 'Articles', 'Categories', 'Post'
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
  color: var(--black);
  text-align: center;
  padding: 0px 16px;
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;
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
    color: var(--blue-extradark);
}
</style>