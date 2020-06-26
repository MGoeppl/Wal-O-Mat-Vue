<template>
    <b-list-group-item
            :class="visible ? null : 'collapsed'"
            :aria-expanded="visible ? 'true' : 'false'"
            @click="visible = !visible"
            aria-controls="collapse-0"
    >

        <div id = "title" class = "d-flex justify-content-left align-items-stretch align-content-stretch">

            <div class = "flex-grow-1" style="text-align:justify">
                <h5>{{party.name}}</h5>
            </div>

            <div id = "badges" style="text-align: right">
                <b-badge v-if="party.answers[question.q_id].answer_level===-1" pill variant="danger">Disagree</b-badge>
                <b-badge v-if="party.answers[question.q_id].answer_level===0 || party.answers[question.q_id].answer_level===undefined" pill variant="warning">Neutral</b-badge>
                <b-badge v-if="party.answers[question.q_id].answer_level===1" pill variant="success">Agree</b-badge>
            </div>

        </div>
<!--        <b-collapse id="collapse-0" v-model="visible" class="mt-2">-->

<!--        <h6>{{partyNumber2Agree(party.answers[question.q_id].answer_level)}} | {{party.name}}</h6>-->

        <b-collapse id="collapse-0" v-model="visible" class="mt-2">
            {{party.answers[question.q_id].answer}}
        </b-collapse>
    </b-list-group-item>


</template>

<script>
    export default {
        name: "Results_By_Question_Party_Item",
        props:{
            party: Object,
            question: Object,
            answers: Array,
        },
        data(){
            return{
                visible: false
            }
        },
        methods:{
            partyNumber2Agree: function(number) {
                return number===-1 ? "Disagree" : (number===0 ? "Neutral" : (number===1 ? "Agree" : "Error. Please report this to the dev"))
            },
        }
    }
</script>

<style scoped>
    .badge{
        margin-left: 3px;
        margin-right: 3px;
    }
</style>