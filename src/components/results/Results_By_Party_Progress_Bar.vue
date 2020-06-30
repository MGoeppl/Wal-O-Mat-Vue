<template>
    <b-progress class="mt-2" :max="results.length" height="2rem">
        <b-progress-bar :value="agree" variant="success"></b-progress-bar>
        <b-progress-bar :value="slightly_disagree" variant="warning"></b-progress-bar>
        <b-progress-bar :value="disagree" variant="danger"></b-progress-bar>
    </b-progress>
</template>

<script>
    export default {
        name: "Results_By_Party_Progress_Bar",
        props:{
            party: Object,
            results: Array
        },
        data(){
            return{
                //Difference 0
                agree: 0,
                //Difference 1
                slightly_disagree: 0,
                //Difference 2
                disagree: 0
            }
        },
        created: function(){
            this.process_results_3(this.results)
        },
        methods:{
            process_results_3: function () {
                this.agree=0
                this.slightly_disagree=0
                this.disagree=0

                for (let i = 0; i<this.results.length; i++) {
                    let party_response = this.party.answers[i].answer_level
                    let user_response = this.results[i]
                    if(user_response === 0){
                        //Neutral
                        if(party_response===-1) this.slightly_disagree++
                        if(party_response=== 0) this.agree++
                        if(party_response=== 1) this.slightly_disagree++
                    }
                    if(user_response === -1){
                        //Disagree
                        if(party_response===-1) this.agree++
                        if(party_response=== 0) this.slightly_disagree++
                        if(party_response=== 1) this.disagree++
                    }
                    if(user_response === 1){
                        //Agree
                        if(party_response===-1) this.disagree++
                        if(party_response=== 0) this.slightly_disagree++
                        if(party_response=== 1) this.agree++
                    }

                //     let result = this.results[i]
                //     // console.log(`Answer: ${answer_level}\nResult: ${result}\nDiff: ${Math.abs(answer_level-result)}`)
                //     switch (Math.abs(answer_level-result)) {
                //         case 0: {
                //             this.agree++
                //             break
                //         }
                //         case 1:{
                //             this.slightly_disagree++
                //             break
                //         }
                //         case 2:{
                //             this.disagree++
                //             break
                //         }
                //         default:{
                //             console.error("PANIC, WE GOT SOMETHING NOT 012")
                //         }
                //
                //     }
                }
            },
            process_results_5: function () {
                this.agree=0;
                this.slightly_disagree=0;
                this.disagree=0;

                for (let i = 0; i<this.results.length; i++){
                    let answer_level = this.party.answers[i].answer_level
                    let result_simplified = this.results[i]===0 ? 0 : (this.results[i]>0 ? 1 : -1)
                    // console.log("Answer: "+answer_level+" | Simplified: "+result_simplified)
                    switch (Math.abs(answer_level-result_simplified)) {
                        case 0: {
                            this.agree++
                            break
                        }
                        case 1:{
                            this.slightly_disagree++
                            break
                        }
                        case 2:{
                            this.disagree++
                            break
                        }
                        default:{
                            console.error("PANIC, WE GOT SOMETHING NOT 012")
                        }

                    }
                }
            }
        },
    }
</script>

<style scoped>

</style>