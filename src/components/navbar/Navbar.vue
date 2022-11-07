<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-success d-flex justify-content-between">
            <a class="navbar-brand border">Logo</a>
            <MenuTabs/>
            <a class="navbar-brand border">foto pefil</a>
        </nav>
    </div>
</template>

<script>
import MenuTabs from './MenuTabs.vue'
export default {
    name: 'NavbarTop',
    components: {
        MenuTabs
    }
}
</script>

<style lang="scss" scoped>
    .border {
        padding: 0 20px;
    }
    
    
</style>