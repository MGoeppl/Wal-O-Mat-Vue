<template>
    <div>

<!--        <b-container fluid>-->
<!--            <b-row>-->
<!--                <b-col><impressum/></b-col>-->
<!--                <b-col><datenschutz/></b-col>-->
<!--                <b-col><Set_Year_Dropdown :set_year="set_year" :year_list="year_list"/></b-col>-->
<!--            </b-row>-->
<!--        </b-container>-->
    <b-button-group class="mx-1">
        <b-button @click="goTo('https://www.sv.tum.de/fp-sv/datenschutz/')">Datenschutz</b-button>
        <b-button @click="goTo('https://www.sv.tum.de/fp-sv/impressum/')">Impressum</b-button>
        <Set_Year_Dropdown :set_year="set_year" :year_list="year_list" :year="year"/>
    </b-button-group>


    </div>

</template>

<script>
    import Set_Year_Dropdown from "@/components/archive/Set_Year_Dropdown";
    import Modal from "@/components/welcome/bar/Modal";
    export default {
        name: "BottomBar",
        components: {Modal, Set_Year_Dropdown},
        props:{

            year_list: Array,
            set_year: Function,
            year: Number,
        },
        methods:{
            goTo(url){
                // window.location.href=url
                window.open(url, "_blank", "noreferrer noopener")
            }
        }
    }
</script>

<style>

</style>