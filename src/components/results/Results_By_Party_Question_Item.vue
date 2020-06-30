<template>
    <b-list-group-item
            :class="visible ? '' : 'collapsed'"
            :aria-expanded="visible ? 'true' : 'false'"
            @click="visible = !visible"
            aria-controls="collapse-0"
    >


        <div id = "title" class = "">

            <b-badge v-if="starred" pill variant="info">★</b-badge>

            <b-badge class="party" v-if="party.answers[question.q_id].answer_level===-1" pill variant="danger">Disagree</b-badge>
            <b-badge class="party" v-if="party.answers[question.q_id].answer_level===0 || party.answers[question.q_id].answer_level===undefined" pill variant="warning">Neutral</b-badge>
            <b-badge class="party" v-if="party.answers[question.q_id].answer_level===1" pill variant="success">Agree</b-badge>

            <b-badge class="you" v-if="result===-1" pill variant="danger">{{$t('badge.you')}}: Disagree</b-badge>
            <b-badge class="you" v-if="result===0 || result===undefined" pill variant="warning">{{$t('badge.you')}}: Neutral</b-badge>
            <b-badge class="you" v-if="result===1" pill variant="success">{{$t('badge.you')}}: Agree</b-badge>

                <h5>{{question.question}}</h5>

            <div id = "badgesparty" style="text-align: center">
            </div>

        </div>
        <b-collapse id="collapse-0" v-model="visible" class="mt-2">

            <div id = "badgesuser" >

            </div>

            <hr>
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
            num2level(i){
                switch (i) {
                    case -1: return this.$t('badge.disagree')
                    case 0: return this.$t('badge.neutral')
                    case 1: return this.$t('badge.agree')
                    default: return "Error"
                }
            },
            partyNumber2Agree: function(number) {
                return number===-1 ? "Disagree" : (number===0 ? "Neutral" : (number===1 ? "Agree" : "Error. Please report this to the dev"))
            },
            // userNumber2Agree: function(number) {
            //     for(let i = 0; i<this.answers.length;i++){
            //         if(this.answers[i].val===number) return this.num2level(this.answers[i].val)
            //     }
            //     return "No Answer"
            // }

        }
    }
</script>

<style scoped>
    .badge.you{
        /*width: 100px;*/
    }
    .badge.party{
         /*width: 65px;*/
     }

    .badge{
        margin-left: 3px;
        margin-right: 3px;
    }
    .list-group-item:hover:not(.active) {
        background: lightgrey;
        cursor: pointer;
    }
</style>