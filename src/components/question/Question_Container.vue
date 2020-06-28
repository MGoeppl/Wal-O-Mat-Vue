<template>
    <div class = "question-box-div">
        <b-jumbotron v-bind:header="$t('questions.title')">


            <template slot="lead">
                {{questions[index].question}}
                <Question_Progress_Bar
                        :user_results="user_results"
                />
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

            <hr>
            <!--                Back Button -->
            <b-button v-if="index===0" disabled>{{$t('button.back')}}</b-button>
            <b-button v-else @click="back">{{$t('button.back')}}</b-button>
            <!--                Forward Button-->
            <b-button v-if="questions.length-1===index" @click="set_scene('star')" >{{$t('button.done')}}</b-button>
            <b-button v-else @click="next">{{$t('button.next')}}</b-button>



            <p id = "debug">{{user_results}}</p>

        </b-jumbotron>

    </div>
</template>

<script>
    import Question_Progress_Bar from "@/components/question/Question_Progress_Bar";
    export default {

        name: "Question_Container",
        components: {Question_Progress_Bar},
        props:{
            questions: Array,
            answers: Array,
            update_results: Function,
            user_results: Array,
            set_scene: Function,
            set_results_length: Function,
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
        },
        created(){
            console.log(this.user_results.length)
            if(this.user_results.length===0)this.set_results_length(this.questions.length)
        }
    }
</script>

<style scoped>
    .list-group {
        margin-bottom: 15px;
    }
    .btn {
        margin-left: 10px;
        margin-right: 10px;
        width: 100px;
    }
    .list-group-item:hover:not(.active) {
        background: lightgrey;
        cursor: pointer;
    }
</style>