<template>
    <div class="item-form">
        <label>{{ label }}</label>
        <quill-editor class="editor"
            v-model="content"
            @input="handleInput"
            ref="refQuillEditor"
        />
    </div>
</template>
<script>
 import 'quill/dist/quill.snow.css'
export default {
    name: 'TextQuillEditor',
    props: {
        label: String,
        textContent: String
    },
    components: {
    },
    data(){
        return{
            content: this.textContent,
        }
    },
    methods: {
        handleInput(input) {
            console.log(input)
            this.$emit('input', input)
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
.editor {
    background-color: var(--white-light);
}
</style>