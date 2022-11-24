<template>
    <div class="item-form">
        <label>{{ label }}</label>
        <select>
            <option value="0"></option>
            <option value="1">Article</option>
            <option value="2">Tech</option>
        </select >
    </div>
</template>
<script>
export default {
    name: 'SelectOption',
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
    padding-bottom: 2rem;
}
select {
    width: 100%;
    overflow: hidden;
    background-color: var(--white-light);
    border: solid #dedede .15rem;
    width: 268px;
    font-size: 16px;
    line-height: 1;
    border-radius: 5px;
    height: 34px;
}


</style>