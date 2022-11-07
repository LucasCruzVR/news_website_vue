<template>
    <div>
        <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" class="" />
        <Tag :name="name" class="botton-left"/>
    </div>
</template>

<script>
import Tag from './NewsTag.vue'
export default {
    name: "NewsCards",
    components: {
        Tag
    },
    data() {
        return {
            name: "tag"
        }
    }
}
</script>

<style lang="scss">
.bottom-left{
    position: absolute;
    bottom: 30px;
    left: 30px;
}
</style>