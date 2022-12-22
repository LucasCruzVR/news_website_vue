<template>
  <div class="screenmodal">
    <div class="boxmodal">
      <label>Name:</label>
      <input type="text" v-model="categoryName" />
      <!--<button type="button">Salvar</button>-->
      <SaveButton v-if="!categoryId" @save="save" />
      <SaveButton v-else @save="update" />
    </div>
  </div>
</template>

<script>
import SaveButton from "@/components/SaveButton";
import { createCategory, updateCategory } from "@/services/CategoriesService";
export default {
  name: "NewCategoryModal",
  props: {
    category: Object,
  },
  data() {
    return {
      categoryName: this.category.name || "",
      categoryId: this.category.id || null,
    };
  },
  components: {
    SaveButton,
  },
  methods: {
    async save() {
      try {
        //this.$emit('save')
        const data = await createCategory(this.categoryName);
        this.$router.go(this.$router.currentRoute);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    },
    async update() {
      try {
        console.log(this.categoryId)
        //this.$emit('save')
        const data = await updateCategory(this.categoryId, this.categoryName);
        this.$router.go(this.$router.currentRoute);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.screenmodal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00000086;
  .boxmodal {
    background-color: var(--white);
    text-align: center;
    padding: 2rem 3rem;
    border-radius: 0.5rem;
    margin: 1rem;
    h2 {
      color: var(--green-dark);
    }
    p {
      max-width: 20rem;
      margin-bottom: 3rem;
    }
    button {
      width: 100%;
      margin-top: 2rem;
      padding: 0.8rem 0;
    }
    label {
      max-width: 20rem;
      margin-bottom: 3rem;
      padding-right: 0.5rem;
    }
  }
}
</style>
