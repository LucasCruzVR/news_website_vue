<template>
    <div>
        <div class="column">
            <div v-for="post in posts" :key="post.title" class="post">
                <div class="image-container">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" class="" />
                    <div class="bottom-left ">TAG</div>
                </div>

                <div class="description">
                    <h2 @click="newsDetails(post.id)">{{ post.title }}</h2>
                    <h4>{{ post.title_description }}</h4>
                    <div class="created">
                        <p>lucas</p>
                        <p>{{ post.created_at | formatDate }}</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment';
export default {
    name: "NewsCards",
    components: {
    },
    props: {
        posts: Array
    },
    data() {
        return {
            name: "#TAG"
        }
    },
    methods: {
        newsDetails(id) {
            console.log('entrei')
            this.$router.push(`news/show/${id}`)
        }
    },
    filters: {
        formatDate(value) {
            return moment(String(value)).format('MM/DD/YYYY hh:mm');
        },
    }
}
</script>

<style lang="scss" scoped>
.bottom-left {
    position: absolute;
    border-radius: 0.8rem;
    left: 1rem;
    bottom: 2rem;
    color: white;
    padding: 0.4rem 0.7rem;
    background-color: rgba(0, 50, 100, 0.3);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
}

.column {
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
    justify-content: flex-start;
    width: 100%;
}

.post {
    position: relative;
    display: flex;
    padding-bottom: 1rem;
}

.description {
    display: flex;
    flex-direction: column;
    padding: 0 1rem;

    h2 {
        font-weight: bold;
        font-size: 20px;
        transition: linear 250ms;

        &:hover {
            font-size: 24px;
            color: var(--blue-dark);
            transition: linear 250ms;
            cursor: pointer;
        }
    }

    .created {
        margin-top: auto;

        p {
            font-size: 12px;
            margin: 0;
            //align-self: flex-end;

        }
    }
}

.post:hover h2 {
    font-size: 24px;
    color: var(--blue-dark);
    transition: linear 250ms;
    cursor: pointer;
}

.post:hover img {
    overflow: hidden;
    -moz-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
    transition: linear 250ms;
    cursor: pointer;
}

img {
    transition: linear 250ms;
    width: 100%;
    height: 100%;
}
.image-container {
    width: 350px;
    height: 200px;
    overflow: hidden;
    border: 1px solid #000;
}
</style>