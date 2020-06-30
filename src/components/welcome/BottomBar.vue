<template>
    <div>

<!--        <b-container fluid>-->
<!--            <b-row>-->
<!--                <b-col><impressum/></b-col>-->
<!--                <b-col><datenschutz/></b-col>-->
<!--                <b-col><Set_Year_Dropdown :set_year="set_year" :year_list="year_list"/></b-col>-->
<!--            </b-row>-->
<!--        </b-container>-->
        <modal></modal>
    <b-button-group class="mx-1">
        <b-button v-b-modal.datenschutz>Datenschutz</b-button>
        <b-button v-b-modal.impressum>Impressum</b-button>

        <datenschutz/>
        <Set_Year_Dropdown :set_year="set_year" :year_list="year_list"/>
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
        }
    }
</script>

<style>

</style>