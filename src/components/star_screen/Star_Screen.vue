<template>
    <div id = "Star">
        <b-jumbotron header-level="4" v-bind:header="$t('star.title')">
            <template v-slot:lead>
                {{$t('star.description')}}
            </template>
<!--                <hr>-->

            <User_Has_Skipped_Question_Alert :results="results"/>


            <b-button @click="set_scene('question')" >{{$t('button.back')}}</b-button>
            <b-button @click="set_scene('result')">{{$t('button.show_results')}}</b-button>
            <hr>


            <b-list-group>
                <b-list-group-item
                        v-for="q in questions"
                        :key="q.q_id"
                        @click="star(q.q_id)"
                        :class="[star_array[q.q_id]?'active':''] +' d-flex justify-content-between align-items-center'"

                >
                    <div style="text-align: left"> {{q.question}}</div>

                    <b-badge v-if="results[q.q_id]===-1" pill variant="danger">Disagree</b-badge>
                    <b-badge v-if="results[q.q_id]===0 || results[q.q_id]===undefined" pill variant="warning">Neutral</b-badge>
                    <b-badge v-if="results[q.q_id]===1" pill variant="success">Agree</b-badge>
                </b-list-group-item>
            </b-list-group>

            <hr>

            <b-button @click="set_scene('question')" >{{$t('button.back')}}</b-button>
            <b-button @click="set_scene('result')">{{$t('button.show_results')}}</b-button>

        </b-jumbotron>
    </div>
</template>
<script>
    import User_Has_Skipped_Question_Alert from "@/components/results/User_Has_Skipped_Question_Alert";
    export default {
        components: {User_Has_Skipped_Question_Alert},

        name: "Star_Screen",
        props: {
            results: Array,
            questions: Array,
            star_array: Array,
            set_star_array_length: Function,
            flip_star: Function,
            set_scene: Function
        },
        methods:{
            star(i){
                // console.log("click")
                this.flip_star(i)
            }
        },
        // created(){
        //     this.set_star_array_length(this.questions.length)
        // }
    }
</script>


<!--<template>-->
<!--    <div id = "Star_Table">-->

<!--        <b-jumbotron header="Star Screen">-->

<!--            <b-table striped hover :items="tablify()" :fields="fields"></b-table>-->

<!--        </b-jumbotron>-->
<!--    </div>-->
<!--</template>-->

<!--<script>-->
<!--    export default {-->
<!--        components: {},-->

<!--        name: "Star_Screen",-->
<!--        data(){-->
<!--            return {-->
<!--                // filled: true-->
<!--                fields: ["question","result", "star"]-->
<!--            }-->
<!--        },-->
<!--        props:{-->
<!--            results: Array,-->
<!--            questions: Array,-->
<!--            star_array: Array,-->
<!--            set_star_array_length:Function-->
<!--        },-->
<!--        methods:{-->
<!--            tablify(){-->
<!--                console.log("Trigger Tablify" +this.star_array.length)-->
<!--                if(this.star_array.length===0){-->
<!--                    console.log("Length Set at "+this.questions.length)-->
<!--                    this.set_star_array_length(this.questions.length)-->
<!--                }-->

<!--                let r = []-->
<!--                for(let i = 0 ; i<this.questions.length;i++){-->
<!--                    console.log("Star_Screen"+i)-->
<!--                    console.log(this.results[i])-->
<!--                    let elem = {result: this.results[i], question: this.questions[i].question, star: Star_Screen_Star}-->
<!--                    console.log(elem)-->
<!--                    r[i] = elem-->
<!--                }-->
<!--                console.log(r)-->
<!--                return r-->
<!--            }-->
<!--        }-->
<!--    }-->
<!--</script>-->

<style scoped>
    .btn {
        margin-left: 10px;
        margin-right: 10px;
        margin-top: 20px;
        width: 120px;
    }
</style>