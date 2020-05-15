<template>
    <b-list-group-item
            :class="visible ? null : 'collapsed'"
            :aria-expanded="visible ? 'true' : 'false'"
            @click="visible = !visible"
            aria-controls="collapse-0"
    >
        <h6>{{partyNumber2Agree(party.answers[question.q_id].answer_level)}} | {{party.name}}</h6>

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

</style>