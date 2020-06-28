<template>
    <div class="Party-Card">
        <b-card no-body>
            <b-card-header>
                <h3>{{question.question}}</h3>


                <div id = "badges">
                    <b-badge v-if="results[question.q_id]===-1" pill variant="danger">You: Disagree</b-badge>
                    <b-badge v-if="results[question.q_id]===0 || results[question.q_id]===undefined" pill variant="warning">You: Neutral</b-badge>
                    <b-badge v-if="results[question.q_id]===1" pill variant="success">You: Agree</b-badge>
                    <b-badge v-if="star_array[question.q_id]" pill variant="info">★</b-badge>
                </div>
            </b-card-header>
            <b-list-group>
                <Results_By_Question_Party_Item
                        v-for="party in parties"
                        :key="party.name"
                        :starred = star_array[question.q_id]
                        :party="party"
                        :question="question"
                        :answers="answers"
                        :number2answer="userNumber2Agree"
                />
            </b-list-group>
        </b-card>
    </div>

</template>

<script>
    import Results_By_Question_Party_Item from "@/components/results/Results_By_Question_Party_Item";
    export default {
        name: "Results_By_Question",
        components: {Results_By_Question_Party_Item},
        props:{
            question: Object,
            parties: Array,
            results: Array,
            answers: Array,
            star_array: Array
        },
        methods:{
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
        margin-left: 3px;
        margin-right: 3px;
    }
    .card{
        margin: 1rem 1rem ;
    }
</style>