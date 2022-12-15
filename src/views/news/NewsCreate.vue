<template>
    <div class="body">
        <div class="create-news">
            <div class="inputs">
                <InputText label="Title" v-model="title" />
                <InputText label="Title Description" v-model="title_description" />
            </div>
            <ContentText label="Content" v-model="content" />
            <div class="select-buttons">
                <Select label="Category" v-model="category" />
                <input type="file" @input="selectedImage">
                <div class="buttons">
                    <button class="secondary-button">Preview</button>
                    <button class="primary-button" v-if="loading" @click="save"><img class="button-animation"
                            src="@/assets/images/chart-donut.png"></button>
                    <button class="primary-button" v-else @click="save">Save</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import InputText from '@/components/inputs/InputText';
import ContentText from '@/components/inputs/TextQuillEditor.vue';
import Select from '@/components/inputs/Select';
import * as NewsService from '../../services/NewsService.js';

export default {
    name: 'NewsCreate',
    components: {
        InputText,
        ContentText,
        Select
    },
    data() {
        return {
            title: "",
            title_description: "",
            content: "",
            category: 0,
            loading: false,
            image: null,
        }
    },
    methods: {
        selectedImage(event) {
            this.image = event.target.files[0];
        },
        async save() {
            try {
                this.loading = true;
                var form = new FormData();
                form.append("title", this.title);
                form.append("title_description", this.title_description);
                form.append("category_id", this.category);
                form.append("content", this.content);
                await NewsService.publish(form
                );
                this.loading = false;
            } catch (err) {
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
    padding: 2rem 3rem;
    margin: 0;
}

.create-news {
    padding: 1rem;
    background-color: var(--white-dark);
    margin: 0 10rem 0 10rem;
    border-radius: 10px;
}

.inputs {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    padding: 0rem 2rem;
}
.select-buttons {
    display: flex;
    width: 100%;
    justify-content: center;

    .buttons {
        padding-top: 0.75rem;
        justify-content: flex-end;
        align-content: center;
        display: flex;
    }
}

button {
    margin: 0 0.75rem;
    color: var(--black);
    font-family: 'Ubuntu-Bold';
    height: 3rem;
    padding: 0 4rem;
    border-radius: .25rem;
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

.primary-button {
    background: linear-gradient(to left bottom, var(--blue-dark), var(--blue-light));
}

.secondary-button {
    background: white;
    border: 2px solid var(--blue);
    color: var(--blue-dark);
}

input {
    padding-top: 2rem;
    padding-left: 4rem;
}

.button-animation {
    animation: is-rotating 1s infinite;
}

@keyframes is-rotating {
    to {
        transform: rotate(1turn);
    }
}
</style>