<template>
    <div>
        <span>
            {{name}}
        </span>
    </div>
</template>

<script>
export default {
    name: "NewsTag",
    props: {
        name: {
            type: String
        }
    }
}
</script>

<style lang="scss" scoped>
    
</style>