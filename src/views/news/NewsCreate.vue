<template>
    <div class="body">
        <Navbar />
        <div class="create-news">
            <InputText label="Title" v-model="title"/>
            <InputText label="Title Description" v-model="title_description"/>
            <TextArea label="Content" v-model="content"/>
            <div class="select-buttons">
                <Select label="Category" v-model="category"/>
                <input type="file" @input="selectedImage">
                <div class="buttons">
                    <button>preview</button>
                    <button @click="save">confirm</button>
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
import * as NewsService from '../../services/NewsService.js';
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
            category: 0,
            loading: false,
            image: null
        }
    },
    methods: {
        selectedImage(event) {
            this.image = event.target.files[0];
            console.log(event)
        },
        async save() {
            try {
                this.loading = true;
                var form = new FormData();
                form.append("title", this.title);
                form.append("title_description", this.title_description);
                form.append("category_id", this.category);
                form.append("image_file", this.image)
                const data = await NewsService.publish(form
                );
                console.log(data);
                this.loading = true;
            } catch(err) {
                console.log(err)
            }
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
    justify-content: center;
    
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
    padding: 0 4rem;
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
input {
    padding-top: 2rem;
    padding-left: 4rem;
    margin-left: 0.75rem;
}
</style>