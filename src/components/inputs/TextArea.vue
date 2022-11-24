<template>
    <div class="item-form">
        <label>{{ label }}</label>
        <textarea></textarea>
    </div>
</template>
<script>
export default {
    name: 'TextArea',
    props: {
        label: String,
    },
    data(){
        return{
        }
    }
}
</script>

<style lang="scss" scoped>
.item-form {
    display: flex;
    gap: .5rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 2rem;
}
textarea {
    width: 90%;
    border: solid #dedede .15rem;
    resize: none;
    height: 400px;
    border-radius: 5px;
}
</style>