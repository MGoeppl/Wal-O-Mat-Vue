<template>



        <b-dropdown id="dropdown-1" v-bind:text="year+''">
            <b-dropdown-item v-for="year_item in year_list" v-bind:key="year_item" @click="set_year(year_item)">{{year_item}}</b-dropdown-item>
        </b-dropdown>

</template>

<script>
    export default {
        name: "Set_Year_Dropdown",
        props:{
            year_list: Array,
            set_year: Function,

            year: Number,
        },
    }
</script>

<style scoped>

</style>