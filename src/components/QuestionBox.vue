<template>
    <div class = "question-box-div">
        <div>
            <b-jumbotron>
                <template slot="lead">
                    {{currentQuestion.question}}
                </template>

                <hr class="my-4"/>
                <b-list-group>
                    <b-list-group-item
                            v-for="answer in answers"
                            :key="answer.val"
                            @click="update_results(currentQuestion.q_id, answer.val)"
                            :class="[results[currentQuestion.q_id]===answer.val?'active':'']"
                    >

                        {{answer.txt}}
                    </b-list-group-item>
                </b-list-group>

<!--                Back Button -->
                <b-button v-if="currentQuestion.q_id===0" disabled>Back</b-button>
                <b-button v-else @click="back">Back</b-button>
<!--                Forward Button-->
                <b-button v-if="questions_length-1===currentQuestion.q_id" @click="toggle_show_results" >Submit</b-button>
                <b-button v-else @click="next">Next</b-button>


            </b-jumbotron>

        </div>
    </div>
</template>

<script>
    // import Vue from 'vue'
    export default {
        props: {
            currentQuestion: Object,
            next: Function,
            back: Function,
            answers: Array,
            update_results: Function,
            results: Array,
            questions_length: Number,
            toggle_show_results: Function
        },
        name: "QuestionBox",

        data() {
            return {
                // results: new Array(12),

                selectedAnswer: Number.MAX_VALUE
            }
        },

        methods:{
        }
    }
</script>


<style scoped>
    .list-group {
        margin-bottom: 15px;
    }
    .btn {
        margin: 0 10px;
        width: 75px;
    }
    .list-group-item:hover:not(.active) {
        background: lightgrey;
        cursor: pointer;
    }
</style>