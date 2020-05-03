<template>
            <b-list-group-item
                    :class="visible ? null : 'collapsed'"
                    :aria-expanded="visible ? 'true' : 'false'"
                    @click="visible = !visible"
                    aria-controls="collapse-0"
            >
                {{question.question}} | {{partyNumber2Agree(party.answers[question.q_id].answer_level)}}

                <br>

                <b-collapse id="collapse-0" v-model="visible" class="mt-2">
                    You Selected: {{userNumber2Agree(result)}}
                    <br>
                    {{party.answers[question.q_id].answer}}
                </b-collapse>
            </b-list-group-item>

</template>

<script>
    export default {
        name: "PartyQuestionElement",
        props:{
            question: Object,
            party: Object,
            answers: Array,
            result: Number
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
                return "Error"
            }

        }
    }
</script>

<style scoped>
</style>