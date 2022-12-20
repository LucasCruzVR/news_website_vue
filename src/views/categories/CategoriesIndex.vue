<template>
  <div class="body">
    <div class="top">
      <h1>Categories List</h1>
      <button @click="newCategory">New Category</button>
    </div>
    <table>
      <tr class="tr-titles">
        <th>Name</th>
        <th>News</th>
        <th></th>
      </tr>
      <tr class="tr-content" v-for="category in categories" :key="category.id">
        <td>{{ category.name }}</td>
        <td>5</td>
        <td class="icons">
          <ArchiveEditOutline class="archive-edit" title="Edit" />
          <ArchiveRemoveOutline
            class="archive-remove"
            title="Remove"
            @click="removeCategory(category.id)"
          />
        </td>
      </tr>
    </table>
    <NewCategoryModal v-if="showModal" @save="newCategory" />
  </div>
</template>

<script>
import ArchiveRemoveOutline from "vue-material-design-icons/ArchiveRemoveOutline.vue";
import ArchiveEditOutline from "vue-material-design-icons/ArchiveEditOutline.vue";
import { getAllCategories } from "@/services/CategoriesService";
import NewCategoryModal from "@/components/NewCategoryModal";
export default {
  name: "CategoriesIndex",
  created() {
    this.getCategories();
  },
  components: {
    NewCategoryModal,
    ArchiveRemoveOutline,
    ArchiveEditOutline,
  },
  data() {
    return {
      loading: false,
      categories: [],
      showModal: false,
    };
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
    },
    async removeCategory(id){
      try {
        this.loading = true;
        console.log(id);
        this.$swal.fire({
          text: "Are you sure you want to delete this category?",
          icon: 'warning',
          showCancelButton: true,
          showConfirmButton: true,
          confirmButtonText: 'Confirm',
          confirmButtonColor: '#D03333'
        });
      } catch (err) {
        console.log(err);
      }
    },
    newCategory() {
      this.showModal = !this.showModal;
    },
  },
};
</script>

<style lang="scss" scoped>
.body {
  padding: 1rem 10rem;
  margin: 0;
  justify-content: center;
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  max-width: 90rem;
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

th {
  background-color: var(--green-blue);
}

.icons {
  display: flex;
  justify-content: flex-end;
  padding-right: 2rem;
}

.archive-edit {
  color: var(--yellow-dark);
  padding-right: 1rem;
  cursor: pointer;
}

.archive-remove {
  color: var(--red-dark);
  cursor: pointer;
}
</style>
