<template>
    <b-jumbotron>
        <template v-slot:header>
            {{ $t('welcome.title') }}
        </template>
        <template v-slot:lead>

            {{ $t('welcome.description') }}
            <br>
            {{ $t('welcome.lang') }} <Lang_Switcher/>
            <hr class="my-4"/>

            <p v-if="get_date(year)===null">{{$t('welcome.date.unknown') }}</p>
            <p v-else>{{$t('welcome.date', { date: get_date(year)})}} </p>
        </template>



        <b-button v-if="year_list.includes(this.year)" @click="set_scene('question')">Start</b-button>
        <b-button v-else disabled>Start</b-button>
        <Set_Year_Dropdown :set_year="set_year" :year_list="year_list"/>

    </b-jumbotron>
</template>

<script>
    import Set_Year_Dropdown from "@/components/archive/Set_Year_Dropdown";
    import Lang_Switcher from "@/components/Lang_Switcher";
    export default {
        name: "Welcome",
        components: {Lang_Switcher, Set_Year_Dropdown},
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