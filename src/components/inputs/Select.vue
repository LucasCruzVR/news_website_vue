<template>
    <div class="item-form">
        <label>{{ label }}</label>
        <select v-model="selected" @click="categorySelected">
            <option v-for="item in categories" :value="item" :key="item.id">
                {{ item.name }}
            </option>
        </select>
    </div>
</template>
<script>
import * as CategoriesService from '../../services/CategoriesService.js'
export default {
    name: 'SelectOption',
    props: {
        label: String,
        inputValue: Object
    },
    data() {
        return {
            selected: this.inputValue || 0,
            categories: []
        }
    },
    created: function () {
        this.getCategories();
    },
    methods: {
        async getCategories() {
            const {data} = await CategoriesService.getAllCategories();
            this.categories = data.data;
        },
        categorySelected(input) {
            this.$emit('input', input.target._value)
        }
    }
}
</script>

<style lang="scss" scoped>
.item-form {
    display: flex;
    gap: .5rem;
    flex-direction: column;
    padding-bottom: 2rem;
}

select {
    width: 100%;
    overflow: hidden;
    background-color: var(--white-light);
    border: solid #dedede .15rem;
    width: 268px;
    font-size: 16px;
    line-height: 1;
    border-radius: 5px;
    height: 34px;
}
</style>