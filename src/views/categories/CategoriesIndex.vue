<template>
    <div class="body">
        <div class="top">
            <h1>Categories List</h1>
            <button>novo</button>
        </div>
        <table>
            <tr class="tr-titles">
                <th>Name</th>
                <th>News</th>
                <th></th>
                <th></th>
            </tr>
            <tr class="tr-content" v-for="category in categories" :key="category.id">
                <td>{{ category.name }}</td>
                <td>5</td>
                <td>edit</td>
                <td>delete</td>
            </tr>
        </table>

    </div>
</template>

<script>
import { getAllCategories } from '@/services/CategoriesService';
export default {
    name: 'CategoriesIndex',
    created() {
        this.getCategories();
    },
    data() {
        return {
            loading: false,
            categories: []
        }
    },
    methods: {
        async getCategories() {
            try {
                this.loading = true;
                const data = await getAllCategories();
                this.categories = data.data.data;
                this.loading = false;
            } catch (err) {
                console.log(err);
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.body {
    padding: 1rem 5rem;
    margin: 0;
}

.top {
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;

    button {
        width: 200px;
        height: 50px;
        background: white;
        color: var(--blue);
        border: 2px solid var(--blue);
    }
}

table {
    border-collapse: collapse;
    width: 100%;
}

th,
td {
    text-align: left;
    padding: 8px;
}

tr:nth-child(even) {
    background-color: #f2f2f2;
}

.tr-content:hover {
    background-color: var(--blue-light);
}

tr {
    background-color: var(--green-blue);
}
</style>