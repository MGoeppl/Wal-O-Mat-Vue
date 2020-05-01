<template>
    <div class = jumbotron-results>
        <b-jumbotron header="Results">

            <template v-slot:lead>
                We Believe that {{partyArray(results, parties)[0].party}} is the best choice for you!
            </template>
            <p>
                {{partyArray(results, parties)}}
            </p>


        </b-jumbotron>
    </div>
</template>

<script>
    export default {
        name: "ResultsBox",

        props:{
            results: Array,
            parties: Array,
            questions: Array
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
                    console.log(party_response+"\t"+user_response+"\t"+points)
                }
                return points
            },
            partyArray: function(results, parties){
                var ret = []
                for(var i = 0; i<parties.length; i++) {
                    console.log("Bla" + this.partyPoints(results, parties[i]))
                    ret[i] = {
                        party: parties[i].name,
                        points: this.partyPoints(results, parties[i])
                    }
                }
                return ret.sort(function(a, b){return b.points-a.points});
            }
        }
    }




</script>

<style scoped>

</style>