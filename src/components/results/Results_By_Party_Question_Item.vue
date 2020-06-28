<template>
    <b-list-group-item
            :class="visible ? '' : 'collapsed'"
            :aria-expanded="visible ? 'true' : 'false'"
            @click="visible = !visible"
            aria-controls="collapse-0"
    >


        <div id = "title" class = "d-flex justify-content-left align-items-stretch align-content-stretch">

            <div class = "flex-grow-1" style="text-align:left">
                <h5>{{question.question}}</h5>
            </div>

            <div id = "badgesparty" style="text-align: center">

                <b-badge class="party" v-if="party.answers[question.q_id].answer_level===-1" pill variant="danger">Disagree</b-badge>
                <b-badge class="party" v-if="party.answers[question.q_id].answer_level===0 || party.answers[question.q_id].answer_level===undefined" pill variant="warning">Neutral</b-badge>
                <b-badge class="party" v-if="party.answers[question.q_id].answer_level===1" pill variant="success">Agree</b-badge>

                <br v-if="!starred">
                <b-badge v-if="starred" pill variant="info">★</b-badge>
                <br v-if="starred">
                <b-badge class="you" v-if="result===-1" pill variant="danger">You: Disagree</b-badge>
                <b-badge class="you" v-if="result===0 || result===undefined" pill variant="warning">You: Neutral</b-badge>
                <b-badge class="you" v-if="result===1" pill variant="success">You: Agree</b-badge>
            </div>

        </div>
        <b-collapse id="collapse-0" v-model="visible" class="mt-2">

            <div id = "badgesuser" >

            </div>

            <hr>
            {{party.answers[question.q_id].answer}}
        </b-collapse>
    </b-list-group-item>

</template>

<script>
    export default {
        name: "Result_By_Party_Question_Item",
        props:{
            question: Object,
            party: Object,
            answers: Array,
            result: Number,
            starred: Boolean
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
            userNumber2Agree: function(number) {
                for(let i = 0; i<this.answers.length;i++){
                    if(this.answers[i].val===number) return this.answers[i].txt
                }
                return "No Answer"
            }

        }
    }
</script>

<style scoped>
    .badge.you{
        width: 100px;
    }
    .badge.party{
         width: 65px;
     }

    .badge{
        margin-left: 3px;
        margin-right: 3px;
    }
    .list-group-item:hover:not(.active) {
        background: lightgrey;
        cursor: pointer;
    }
</style>