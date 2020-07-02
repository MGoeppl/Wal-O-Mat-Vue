<template>
    <div id = jumbotron-results>


        <b-jumbotron v-bind:header="$t('results.title')" header-level="3">

            <template v-slot:lead>
                {{$t('results.recommendation', {party: party2string(process)})}}
            </template>

            <div id=buttons>
                <b-button @click="set_scene('question')">{{$t('button.change_answers')}}</b-button>
                <b-button @click="set_scene('star')">{{$t('button.change_weight')}}</b-button>
            </div>
            <hr class="my-4">
            <b-card no-body>
                <div id="Tabular">
                    <b-tabs content-class="mt-3" >
                        <b-tab v-bind:title="$t('results.tab.question.title')" active>
                            <b-alert show variant="info" dismissible>
                                <h4 class="alert-heading">
                                    {{$t("results.tab.question.explanation_title")}}</h4>
                                <hr>
                                {{$t("results.tab.question.explanation")}}
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
                        <b-tab v-bind:title="$t('results.tab.party.title')">
                            <b-alert show variant="info" dismissible>
                                <h4 class="alert-heading">{{$t("results.tab.party.explanation_title")}}</h4>
                                <hr>
                                {{$t("results.tab.party.explanation")}}
                            </b-alert>

                            <div v-bind:id="party.party" v-for="party in process" v-bind:key="party.party">
                                <Results_By_Party
                                        :results="stripped_results"
                                        :party="getParty(party.party)"
                                        :questions="year_data.questions"
                                        :answers="answers"
                                        :star_array="star_array"
                                />
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
            },
            process(){
                return this.partyArray(this.stripped_results, this.year_data.parties)
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
                // console.log(party.name)
                // console.log("[User, Party, Important, Points]")
                for(let i = 0; i<results.length; i++){
                    let party_response = party.answers[i].answer_level;
                    let user_response = results[i];
                    let l_points = 0

                    if(this.star_array[i]) {
                        if (user_response === 0) {
                            //Neutral Important
                            if(party_response===-1) l_points =  -1
                            if(party_response=== 0) l_points =   0
                            if(party_response=== 1) l_points =  -1
                        }
                        if (user_response === -1) {
                            //Disagree Important
                            if(party_response===-1) l_points =   2
                            if(party_response=== 0) l_points =  -1
                            if(party_response=== 1) l_points =  -2
                        }
                        if (user_response === 1) {
                            //Agree Important
                            if(party_response===-1) l_points = -2
                            if(party_response=== 0) l_points = -1
                            if(party_response=== 1) l_points =  2
                        }
                        // console.log("["+user_response+","+party_response+","+true+","+l_points+"]")
                    }
                    else{
                        if(user_response === 0){
                            //Neutral
                            if(party_response===-1) l_points = 0
                            if(party_response=== 0) l_points = 1
                            if(party_response=== 1) l_points = 0
                        }
                        if(user_response === -1){
                            //Disagree
                            if(party_response===-1) l_points =  1
                            if(party_response=== 0) l_points =  0
                            if(party_response=== 1) l_points = -1
                        }
                        if(user_response === 1){
                            //Agree
                            if(party_response===-1) l_points =  -1
                            if(party_response=== 0) l_points =   0
                            if(party_response=== 1) l_points =   1
                        }
                        // console.log("["+user_response+","+party_response+","+false+","+l_points+"]")
                    }


                    points+=l_points
                }
                // console.log("Total Points"+points)
                return points
            },
            getParty(party_name){
                for(let i = 0; i<this.year_data.parties.length;i++){
                    if(this.year_data.parties[i].name===party_name){
                        return this.year_data.parties[i]
                    }
                }
                return {}
            },
            partyArray: function(results, parties){
                // console.log("Does this trigger?")
                let ret = [];
                // console.log(this.stripped_results)
                for(let i = 0; i<parties.length; i++) {
                    ret[i] = {
                        party: parties[i].name,
                        points: this.partyPoints(this.stripped_results, parties[i])
                    }
                }
                return ret.sort(function(a, b){return b.points-a.points});
            },
            party2string(party_array){
                let returnString = party_array[0].party
                for(let i = 1; i<party_array.length;i++){
                    let prev = party_array[i-1].points
                    let next = party_array[i].points
                    if(!(prev===next)){
                        break;
                    }
                    else{
                        returnString+= (" & "+party_array[i].party)
                    }
                }
                return returnString
            }
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