<template>
    <div class = jumbotron-results>
        <b-jumbotron header="Results">

            <template v-slot:lead>
                We Believe that {{partyArray(results, parties)[0].party}} is the best choice for you!
            </template>
            <p>
                {{partyArray(results, parties)}}
            </p>

            <div>
                <b-tabs content-class="mt-3">
<!--                    <b-tab title="Overview" active>-->

<!--&lt;!&ndash;                        <div class="prog-bars">&ndash;&gt;-->
<!--&lt;!&ndash;                            <p v-for="party in parties" v-bind:key="party.name">&ndash;&gt;-->
<!--&lt;!&ndash;                                {{party.name}}:&ndash;&gt;-->
<!--&lt;!&ndash;                                <b-progress class="mt-2" :max="questions.length" show-value>&ndash;&gt;-->
<!--&lt;!&ndash;                                    <b-progress-bar :value="progressBar(results,party)[0]" variant="success"></b-progress-bar>&ndash;&gt;-->
<!--&lt;!&ndash;                                    <b-progress-bar :value="progressBar(results,party)[1]" variant="warning"></b-progress-bar>&ndash;&gt;-->
<!--&lt;!&ndash;                                    <b-progress-bar :value="progressBar(results,party)[2]" variant="danger"></b-progress-bar>&ndash;&gt;-->
<!--&lt;!&ndash;                                </b-progress>&ndash;&gt;-->

<!--&lt;!&ndash;                            </p>&ndash;&gt;-->
<!--&lt;!&ndash;                        </div>&ndash;&gt;-->
<!--                    </b-tab>-->
                    <b-tab title="By Party" active>
                        <div v-for="party in parties" v-bind:key="party.q_id">
                        <PartyCard
                            :results="results"
                            :party="party"
                            :questions="questions"
                            :answers="answers"

                        />
                            <br>
<!--                            REPLACE BR WITH PADDING-->
                        </div>


                    </b-tab>
                    <b-tab title="By Question" disabled><p>I'm Not Yet Done</p></b-tab>
                </b-tabs>
            </div>
        </b-jumbotron>
    </div>
</template>

<script>
    import PartyCard from "@/components/PartyCard";
    export default {
        name: "ResultsBox",
        components: {PartyCard},
        props:{
            results: Array,
            parties: Array,
            questions: Array,
            answers: Array
        },


        methods:{
            partyPoints: function(results, party){
                var points = 0

                for(var i = 0; i<results.length; i++){
                    var party_response = party.answers[i].answer_level
                    var user_response  = results[i]
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
                var ret = []
                for(var i = 0; i<parties.length; i++) {
                    ret[i] = {
                        party: parties[i].name,
                        points: this.partyPoints(results, parties[i])
                    }
                }
                return ret.sort(function(a, b){return b.points-a.points});
            },
            progressBar: function(results, party){
                let arr = [0,0,0]
                for (let i = 0; i<results.length; i++){
                    let answer_level = party.answers[i].answer_level
                    let result_simplified = results[i]===0 ? 0 : (results[i]>0 ? 1 : -1)
                    console.log("Answer: "+answer_level+" | Simplified: "+result_simplified)
                    let difference = Math.abs(answer_level-result_simplified)
                    arr[difference]++
                }
                console.log(party.name+":"+arr)
                return arr

            }
        }
    }




</script>

<style scoped>

</style>