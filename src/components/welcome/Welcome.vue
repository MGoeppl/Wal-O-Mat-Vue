<template>
    <b-jumbotron header-level="4">
        <template v-slot:header>
            {{ $t('welcome.title') }}
        </template>
        <template v-slot:lead>

            {{ $t('welcome.description') }}
            <br>
            {{ $t('welcome.lang') }}
            <Flag/>
            <hr class="my-4"/>

            <p v-if="get_date(year)===null">{{$t('welcome.date.unknown') }}</p>
            <p v-else>{{$t('welcome.date', { date: get_date(year)})}} </p>
        </template>

        <b-button v-if="year_list.includes(this.year)" @click="set_scene('question')">Start</b-button>
        <b-button v-else disabled>Start</b-button>

        <hr class="my-4"/>
        <bottom-bar
            :year_list="year_list"
            :set_year="set_year"
            :year="year"
        />
    </b-jumbotron>
</template>

<script>
    import Flag from "@/components/welcome/Flag";
    import BottomBar from "@/components/welcome/BottomBar";
    export default {
        name: "Welcome",
        components: {BottomBar, Flag},
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
    .btn {
        margin-left: 10px;
        margin-right: 10px;
        /*width: 100px;*/
    }
</style>