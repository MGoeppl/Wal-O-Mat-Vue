<template>
    <b-jumbotron header-level="4">
        <template v-slot:header>
            {{ $t('welcome.title') }}
        </template>
        <template v-slot:lead>

            {{ $t('welcome.description') }}



            <Flag style="margin: 10px 20px"/>

            <p v-if="get_date(year)===null">{{$t('welcome.date.unknown') }}</p>
            <p v-else>{{$t('welcome.date', { date: get_date(year)})}} </p>
        </template>

        <modal/>
        <b-button-group>
<!--            <b-button v-b-modal.my-modal>How it Works</b-button>-->
            <b-button @click="showModal()">How it Works</b-button>
            <b-button v-if="year_list.includes(this.year)" @click="set_scene('question')" variant="success">Start</b-button>
            <b-button v-else disabled>Start</b-button>
        </b-button-group>

        <b-alert dismissible show variant="warning">
            <h4 class="alert-heading">Disclaimer</h4>
            <p>
            {{$t('results.disclaimer')}}
            </p>
        </b-alert>

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
    import Modal from "@/components/welcome/bar/Modal";
    export default {
        name: "Welcome",
        components: {Modal, BottomBar, Flag},
        props:{
            year_list: Array,
            set_year: Function,
            set_scene: Function,
            year: Number,
            get_date: Function,
        },
        methods:{
            showModal() {
                console.log("Trigger")
                this.$root.$emit('bv::show::modal', 'my-modal', '#btnShow')
            },
        }

    }
</script>

<style scoped>
.btn-group{
    margin: 15px 0px;
}
</style>