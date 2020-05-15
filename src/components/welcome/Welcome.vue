<template>
    <b-jumbotron>
        <template v-slot:header>
            Wal-o-mat
        </template>
        <template v-slot:lead>
            Welcome to the Walomat! Here goes Infos about the HSW including this years date!
            <hr class="my-4"/>

            {{"Date of "+year+"'s HSW: \t" + (get_date(year)===null?"Not Published":get_date(year))}}
        </template>



        <b-button v-if="year_list.includes(this.year)" @click="set_scene('question')">Start</b-button>
        <b-button v-else disabled>Start</b-button>
        <Set_Year_Dropdown :set_year="set_year" :year_list="year_list"/>

    </b-jumbotron>
</template>

<script>
    import Set_Year_Dropdown from "@/components/archive/Set_Year_Dropdown";
    export default {
        name: "Welcome",
        components: {Set_Year_Dropdown},
        props:{
            year_list: Array,
            set_year: Function,
            set_scene: Function,
            year: Number,
            get_date: Function,
        },

    }
</script>

<style scoped>

</style>