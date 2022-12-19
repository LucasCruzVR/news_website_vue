<template>
  <div>
    <label>Name:</label>
    <input type="text" v-model="newCategory"/>
    <button type="button">Salvar</button>
  </div>
</template>

<script>
export default {
  name: "NewCategoryModal",
  data() {
    return {
        newCategory: ""
    }
  }
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
    }
  }
}
</style>
