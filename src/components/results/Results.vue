<template>
    <div id = jumbotron-results>
        <b-jumbotron header="Results">

            <template v-slot:lead>
                We Believe that {{partyArray(results, year_data.parties)[0].party}} is the best choice for you!
            </template>
<!--            <p id="DEBUG">-->
<!--                {{partyArray(results, year_data.parties)}}-->
<!--            </p>-->
            <hr class="my-4">
            <div id="Tabular">
                <b-tabs content-class="mt-3">
                    <b-tab title="By Party" active>
                        <div v-for="party in year_data.parties" v-bind:key="party.q_id">
                            <Results_By_Party
                                    :results="results"
                                    :party="party"
                                    :questions="year_data.questions"
                                    :answers="answers"

                            />
                        </div>

                        <br>
                    </b-tab>
                    <b-tab title="By Question">
                        <div v-for="question in year_data.questions" v-bind:key="question.q_id">
                            <Results_By_Question
                                    :results="results"
                                    :parties="year_data.parties"
                                    :question="question"
                                    :answers="answers"

                            />
                            <br>
                        </div>

                    </b-tab>
                </b-tabs>
            </div>
            <div id="go_back">
                <hr class="my-4">
                <b-button @click="set_scene('question')">Go Back</b-button>
            </div>
        </b-jumbotron>
    </div>
</template>

<script>
    import Results_By_Question from "@/components/results/Results_By_Question";
    import Results_By_Party from "@/components/results/Results_By_Party";
    export default {
        name: "Results",
        components: {Results_By_Party, Results_By_Question},
        props:{
            year_data: Object,
            answers: Array,
            results: Array,
            set_scene: Function
        },

        methods:{
            partyPoints: function(results, party){
                let points = 0;

                for(let i = 0; i<results.length; i++){
                    let party_response = party.answers[i].answer_level;
                    let user_response = results[i];
                    if(party_response===0){
                        points += 1-(user_response<0?user_response*-1:user_response)
                    }
                    else{
                        points += user_response*party_response
                    }
                }
                return points
            },
            partyArray: function(results, parties){
                let ret = [];
                for(let i = 0; i<parties.length; i++) {
                    ret[i] = {
                        party: parties[i].name,
                        points: this.partyPoints(results, parties[i])
                    }
                }
                return ret.sort(function(a, b){return b.points-a.points});
            },
        }
    }
</script>

<style scoped>

</style>