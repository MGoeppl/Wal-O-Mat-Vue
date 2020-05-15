<template>
    <b-jumbotron>
        <template>Thanks for Voting in the HSW {{new Date().getFullYear()}}!</template>


        <Set_Year_Dropdown
                :set_year="set_year"
                :year_list="year_list"
        />
    </b-jumbotron>
</template>

<script>
    import Set_Year_Dropdown from "@/components/archive/Set_Year_Dropdown";
    export default {
        name: "Thanks_For_Voting",
        components: {Set_Year_Dropdown},
        props:{
            year_list: Array,
            current_year: Number,
            set_year: Function
        },
    }
</script>

<style scoped>

</style>