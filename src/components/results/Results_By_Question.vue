<template>
    <div class="Party-Card">
        <b-card no-body>
            <b-card-header>
                <h3>{{question.question}}</h3>
                <i>You Answered: {{userNumber2Agree(results[question.q_id])}}</i>

            </b-card-header>
            <b-list-group>
                <Results_By_Question_Party_Item
                        v-for="party in parties"
                        :key="party.name"

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
            answers: Array
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

</style>