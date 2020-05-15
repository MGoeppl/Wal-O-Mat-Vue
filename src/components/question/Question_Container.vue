<template>
    <div class = "question-box-div">
        <b-jumbotron>
            <template slot="lead">
                {{questions[index].question}}
            </template>

            <hr class="my-4"/>
            <b-list-group>
                <b-list-group-item
                        v-for="answer in answers"
                        :key="answer.val"
                        @click="update_results(index, answer.val)"
                        :class="[user_results[index]===answer.val?'active':'']"
                >

                    {{answer.txt}}
                </b-list-group-item>
            </b-list-group>

            {{user_results}}

            <!--                Back Button -->
            <b-button v-if="index===0" disabled>Back</b-button>
            <b-button v-else @click="back">Back</b-button>
            <!--                Forward Button-->
            <b-button v-if="questions.length-1===index" @click="set_scene('result')" >Submit</b-button>
            <b-button v-else @click="next">Next</b-button>


        </b-jumbotron>

    </div>
</template>

<script>
    export default {

        name: "Question_Container",

        props:{
            questions: Array,
            answers: Array,
            update_results: Function,
            user_results: Array,
            set_scene: Function,
        },

        data(){
            return {
                index: 0
            }
        },

        methods:{
            next: function(){
                this.index++
            },
            back: function(){
                this.index--
            }
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