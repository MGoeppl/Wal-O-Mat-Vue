<template>
        <b-dropdown id="dropdown-1" text="Archived Years" class="m-md-2">
            <b-dropdown-item v-for="year in year_list" v-bind:key="year" @click="set_year(year)">{{year}}</b-dropdown-item>
        </b-dropdown>

</template>

<script>
    export default {
        name: "Set_Year_Dropdown",
        props:{
            year_list: Array,
            set_year: Function
        },
    }
</script>

<style scoped>

</style>