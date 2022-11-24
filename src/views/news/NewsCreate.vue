<template>
    <div class="body">
        <Navbar />
        <div class="create-news">
            <InputText label="Title" v-model="title"/>
            <InputText label="Title Description"/>
            <TextArea label="Content"/>
            <div class="select-buttons">
                <Select label="Category"/>
                <div class="buttons">
                    <button>preview</button>
                    <button @click="show">confirm</button>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import Navbar from '@/components/navbar/Navbar.vue';
import InputText from '@/components/inputs/InputText';
import TextArea from '@/components/inputs/TextArea.vue';
import Select from '@/components/inputs/Select';
export default {
    name: 'NewsCreate',
    components: {
        Navbar,
        InputText,
        TextArea,
        Select
    },
    data() {
        return {
            title: "",
            title_description: "",
            content: "",
            category: 0
        }
    },
    methods: {
        show() {
            console.log(this.title);
        }
    }
}
</script>

<style lang="scss" scoped>
.body {
    height: 100%;
    background-color: var(--white-light);
}
.create-news {
    padding: 2rem;
    background-color: var(--white-dark);
    margin: 2rem 10rem 0 10rem;
    border-radius: 10px;
}
.select-buttons {
    display: flex;
    width: 100%;
    justify-content: space-around;
    
    .buttons {
        padding-top: 0.75rem;
        justify-content: flex-end;
        align-content: center;
    }
}
button {
    margin: 0 0.75rem;
    color: var(--black);
    font-family: 'Ubuntu-Bold' ;
    height: 48px;
    padding: 0 32px;
    border-radius: .25rem;
    background: linear-gradient(to left bottom, var(--blue), var(--blue-light));
    text-align: center;
    font-size: 12px;
    font-weight: 100;
    text-transform: uppercase;
    letter-spacing: .1rem;
    border: none;
    box-shadow: 0px 2px 10px rgba(252, 176, 105, 0.5);
    transition: ease-in-out .15s;
    cursor: pointer;
}
</style>