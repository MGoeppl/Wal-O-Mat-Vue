<template>
    <div id = jumbotron-results>


        <b-jumbotron header="Results">

            <template v-slot:lead>
                We Believe that {{partyArray(stripped_results, year_data.parties)[0].party}} is the best choice for you!
            </template>

            <p id = "Debug">{{partyArray(stripped_results, year_data.parties)}}</p>
            <div id=buttons>
                <b-button @click="set_scene('question')">{{$t('button.change_answers')}}</b-button>
                <b-button @click="set_scene('star')">{{$t('button.change_weight')}}</b-button>
            </div>
            <hr class="my-4">
            <b-card no-body>
                <div id="Tabular">
                    <b-tabs content-class="mt-3" >
                        <b-tab title="By Party" active>
                            <b-alert show variant="info" dismissible>
                                <h4 class="alert-heading">{{$t("results.explanation.party.title")}}</h4>
                                <hr>
                                {{$t("results.explanation.party.text")}}
                            </b-alert>

                            <div v-for="party in year_data.parties" v-bind:key="party.q_id">
                                <Results_By_Party
                                        :results="stripped_results"
                                        :party="party"
                                        :questions="year_data.questions"
                                        :answers="answers"
                                        :star_array="star_array"
                                />
                            </div>
                        </b-tab>
                        <b-tab title="By Question">
                            <b-alert show variant="info" dismissible>
                                <h4 class="alert-heading">
                                    {{$t("results.explanation.question.title")}}</h4>
                                <hr>
                                {{$t("results.explanation.question.text")}}
                            </b-alert>


                            <div v-for="question in year_data.questions" v-bind:key="question.q_id">
                                <Results_By_Question
                                        :results="stripped_results"
                                        :parties="year_data.parties"
                                        :question="question"
                                        :answers="answers"
                                        :star_array="star_array"/>
                            </div>
                        </b-tab>
                    </b-tabs>
                </div>

            </b-card>
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
            set_scene: Function,
            star_array: Array
        },
        computed:{
            stripped_results(){
                return this.results.map(x=>x===undefined?0:x)
            }
        },

        methods:{
            /**
             * Calculate Points per Party
             * Algorithm:
             * Match = 1
             * Off by 1 = 0
             * Off by 2 = -1
             * Algorithm if Question Important
             * Match = 2
             * Off by 1 = -1
             * Off by 2 = -2
             * @param results
             * @param party
             * @returns {number}
             */
            partyPoints: function(results, party){
                let points = 0;

                for(let i = 0; i<results.length; i++){
                    let party_response = party.answers[i].answer_level;
                    let user_response = results[i];
                    let l_points = 0
                    if(this.star_array[i]) {
                        if (user_response === 0) {
                            console.log("Neutral User Answer")
                            if (party_response === 0) l_points = 2
                            else l_points = -1
                        }
                        if (user_response === -1) {
                            party_response *= -1
                            user_response *= -1
                        }
                        if (user_response === 1) {
                            if(party_response === 0){
                                l_points=-1
                            }
                            else{
                                l_points = 2*user_response
                            }
                        }
                    }
                    else{
                        if(user_response === 0){
                            console.log("Neutral User Answer")
                            if(party_response === 0) l_points = 1
                        }
                        if(user_response === -1){
                            party_response *= -1
                            user_response  *= -1
                        }
                        if(user_response === 1){
                            l_points = user_response
                        }
                    }


                    points+=l_points
                }
                return points
            },
            partyArray: function(results, parties){
                // console.log("Does this trigger?")
                let ret = [];
                console.log(this.stripped_results)
                for(let i = 0; i<parties.length; i++) {
                    ret[i] = {
                        party: parties[i].name,
                        points: this.partyPoints(this.stripped_results, parties[i])
                    }
                }
                return ret.sort(function(a, b){return b.points-a.points});
            },
        }
    }
</script>

<style scoped>
    .btn {
        margin-left: 10px;
        margin-right: 10px;
        /*width: 100px;*/
    }
    .alert{
        margin: 1rem 1rem
    }
</style>