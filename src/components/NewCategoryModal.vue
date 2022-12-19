<template>
  <div class="screenmodal">
    <div class="boxmodal">
      <label>Name:</label>
      <input type="text" v-model="newCategory" />
      <!--<button type="button">Salvar</button>-->
      <SaveButton @save="save" />
    </div>
  </div>
</template>

<script>
import SaveButton from "@/components/SaveButton";
export default {
  name: "NewCategoryModal",
  data() {
    return {
      newCategory: "",
    };
  },
  components: {
    SaveButton,
  },
  methods: {
    save() {
      this.$emit('save')
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
