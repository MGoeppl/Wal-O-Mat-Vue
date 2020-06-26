<template>
    <b-list-group-item
            :class="visible ? null : 'collapsed'"
            :aria-expanded="visible ? 'true' : 'false'"
            @click="visible = !visible"
            aria-controls="collapse-0"
    >
        <h6 v-if="starred"><b>{{partyNumber2Agree(party.answers[question.q_id].answer_level)}} | {{question.question}}</b></h6>
        <h6 v-else>{{partyNumber2Agree(party.answers[question.q_id].answer_level)}} | {{question.question}}</h6>

        <b-collapse id="collapse-0" v-model="visible" class="mt-2">
<!--            <<i>You Answered: {{userNumber2Agree(result)}}</i>>-->
            <b-badge v-if="starred" pill variant="info">Important</b-badge>
<!--            <b-badge pill variant="warning">{{result}}You: {{userNumber2Agree(result)}}</b-badge>-->

            <b-badge v-if="result===-1" pill variant="danger">You: Disagree</b-badge>
            <b-badge v-if="result===0 || result===undefined" pill variant="warning">You: Neutral</b-badge>
            <b-badge v-if="result===1" pill variant="success">You: Agree</b-badge>
            <hr class="my-4"/>

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
.badge{
    margin: 5px 5px
}
</style>