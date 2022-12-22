<template>
    <div class="item-form">
        <label>{{ label }}</label>
        <input type="text" :value="inputValue" name="" id="" @input="handleInput" >
    </div>
</template>
<script>
export default {
    name: 'InputText',
    props: {
        label: String,
        inputValue: String
    },
    data(){
        return{
            title1: this.inputValue
        }
    },
    methods: {
        handleInput(input) {
            this.$emit('input', input.target.value)
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
input {
    width: 30rem;
}
label {
    padding-left: 0.2rem;
}
</style>