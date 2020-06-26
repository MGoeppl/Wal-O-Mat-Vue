<template>
    <div id = "Star">
        <b-jumbotron header="Stars">
            <template v-slot:lead>
                Select the questions that you find important. These shall be weighed more heavily :)
            </template>
            <hr>
            <b-list-group>
                <b-list-group-item
                        v-for="q in questions"
                        :key="q.q_id"
                        @click="star(q.q_id)"
                        :class="[star_array[q.q_id]?'active':''] +' d-flex justify-content-between align-items-center'"

                >
                    {{q.question}}

                    <b-badge v-if="results[q.q_id]===-1" pill variant="danger">Disagree</b-badge>
                    <b-badge v-if="results[q.q_id]===0 || results[q.q_id]===undefined" pill variant="warning">Neutral</b-badge>
                    <b-badge v-if="results[q.q_id]===1" pill variant="success">Agree</b-badge>
                </b-list-group-item>
            </b-list-group>

            <hr>

            <b-button @click="set_scene('question')" >Back</b-button>
            <b-button @click="set_scene('result')" >Results</b-button>

        </b-jumbotron>
    </div>
</template>
<script>
    export default {
        components: {},

        name: "Star_Screen",
        data() {
            return {
                // filled: true
                fields: ["question", "result", "star"]
            }
        },
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
                console.log("click")
                this.flip_star(i)
            }
        },
        created(){
            this.set_star_array_length(this.questions.length)

        }
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
        margin: 0 10px;
        width: 75px;
    }
</style>