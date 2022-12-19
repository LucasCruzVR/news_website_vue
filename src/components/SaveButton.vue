<template>
    <button @click.prevent="save">Save</button>
</template>

<script>
export default {
    name: 'SaveButton',
    methods: {
        save() {
            this.$emit('save')
        }
    }
}
</script>

<style lang="scss" scoped>
</style>