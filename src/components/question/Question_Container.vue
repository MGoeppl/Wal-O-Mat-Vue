<template>
    <div class = "question-box-div">
        <b-jumbotron header-level="4" v-bind:header="$t('questions.title')">


            <template slot="lead" class="mx-1">
                <div style="text-align: center; display:flex; justify-content: center; align-items: center">

                </div>


                <b-container fluid class="vertical-center">
                    <p >
                        {{questions[index].question}}
                    </p>
                </b-container>
                    <Question_Progress_Bar
                        :user_results="user_results"
                />
            </template>

            <b-list-group>
                <b-list-group-item
                        v-for="answer in answers"
                        :key="answer"
                        @click="update_results(index, answer)"
                        :class="[user_results[index]===answer?'active':'']"
                >

                    {{num2level(answer)}}
                </b-list-group-item>
            </b-list-group>

<!--            <hr>-->
<!--            &lt;!&ndash;                Back Button &ndash;&gt;-->
<!--            <b-button class="regular" v-if="index===0" disabled>{{$t('button.back')}}</b-button>-->
<!--            <b-button class="regular" v-else @click="back">{{$t('button.back')}}</b-button>-->
<!--            &lt;!&ndash;                Forward Button&ndash;&gt;-->
<!--            <b-button class="regular" v-if="questions.length-1===index" @click="set_scene('star')" >{{$t('button.done')}}</b-button>-->
<!--            <b-button class="regular" v-else @click="next">{{$t('button.next')}}</b-button>-->

            <b-button-group style="display: flex">
                                        <b-button style="flex-grow: initial; width: 50px" @click="set_scene('welcome')">&laquo;</b-button>
                                        <b-button style="flex-grow: initial; width: 50px" v-bind:disabled="index===0" @click="back()">&lsaquo;</b-button>
                                        <b-button class="notabutton" style="width: unset" disabled>{{index+1}}/{{questions.length}}</b-button>
                                        <b-button style="flex-grow: initial; width: 50px" v-bind:disabled="index===questions.length-1" @click="next()">&rsaquo;</b-button>
                                        <b-button style="flex-grow: initial; width: 50px" @click="set_scene('star')">&raquo;</b-button>
            </b-button-group>

<!--            <div>-->
<!--                <b-button-toolbar key-nav aria-label="Toolbar with button groups">-->
<!--                    <b-button-group class="mx-1">-->
<!--                        <b-button>&laquo;</b-button>-->
<!--                        <b-button>&lsaquo;</b-button>-->
<!--                    </b-button-group>-->
<!--                    <b-button-group class="mx-1">-->
<!--                        <b-button disabled variant="primary" style="width: available">Edit</b-button>-->

<!--                    </b-button-group>-->
<!--                    <b-button-group class="mx-1">-->
<!--                    </b-button-group>-->
<!--                </b-button-toolbar>-->
<!--            </div>-->


<!--            <p id = "debug">{{user_results}}</p>-->

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
            num2level(i){
                switch (i) {
                    case -1: return this.$t('badge.disagree')
                    case 0: return this.$t('badge.neutral')
                    case 1: return this.$t('badge.agree')
                    default: return "Error"
                }
            },
            next: function(){
                this.index++
            },
            back: function(){
                this.index--
            }
        },
        created(){
            // console.log(this.user_results.length)
            if(this.user_results.length===0)this.set_results_length(this.questions.length)
        }
    }
</script>

<style scoped>
    .list-group {
        margin: 20px 0px;
    }
    .list-group-item:hover:not(.active) {
        background: lightgrey;
        cursor: pointer;
    }
    .vertical-center {
        min-height: 8rem;

        display: flex;
        align-items: center;
    }
    .btn.notabutton{
        cursor: default;
    }
</style>