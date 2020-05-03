<template>
    <div id="app">
        <Header

                :index="index"
        />

        <b-container>
            <b-row >

                <!--        <b-col></b-col>-->

                <b-col md="6" offset-md="3">
                    <QuestionBox
                            :currentQuestion="questions[index]"
                            :answers = "answers"
                            :next="next"
                            :back="back"
                            :questions_length="questions.length"
                            :results="results"
                            :update_results="update_results"
                            :toggle_show_results="toggle_show_results"
                    />

                    <ResultsBox
                            :results="results"
                            :parties="parties"
                            :questions="questions"
                            :answers="answers"
                    />
                </b-col>

                <!--        <b-col/>-->

            </b-row>
        </b-container>
    </div>

</template>

<script>
    import Header from "@/components/Header";
    import QuestionBox from "@/components/QuestionBox";
    import ResultsBox from "@/components/ResultsBox";

    export default {
        name: 'App',
        components: {ResultsBox, QuestionBox, Header},

        methods: {
            next: function(){
                this.index++
            },
            back: function(){
                this.index--
            },
            update_results: function(index, value){
                var newresults = [...this.results]
                newresults[index] = value
                this.results = newresults
            },
            toggle_show_results: function(){
                this.show_results=!this.show_results
            }
        },

        data(){
            return {
                parties: [
                    {
                        name: "The Party",
                        website: "tp.com",
                        answers: [
                            {q_id: 0, answer_level: 0, answer:"Bacon ipsum dolor amet swine drumstick shoulder kielbasa. Capicola pork chop prosciutto meatball. Porchetta pastrami shankle bacon pork belly. Ball tip alcatra sausage pancetta pork chop pork belly salami spare ribs landjaeger prosciutto turkey venison pig."},
                            {q_id: 1, answer_level: 1, answer:"Bacon ipsum dolor amet swine drumstick shoulder kielbasa. Capicola pork chop prosciutto meatball. Porchetta pastrami shankle bacon pork belly. Ball tip alcatra sausage pancetta pork chop pork belly salami spare ribs landjaeger prosciutto turkey venison pig."},
                            {q_id: 2, answer_level: -1, answer:"Bacon ipsum dolor amet swine drumstick shoulder kielbasa. Capicola pork chop prosciutto meatball. Porchetta pastrami shankle bacon pork belly. Ball tip alcatra sausage pancetta pork chop pork belly salami spare ribs landjaeger prosciutto turkey venison pig."},
                            {q_id: 3, answer_level: 0, answer:"Bacon ipsum dolor amet swine drumstick shoulder kielbasa. Capicola pork chop prosciutto meatball. Porchetta pastrami shankle bacon pork belly. Ball tip alcatra sausage pancetta pork chop pork belly salami spare ribs landjaeger prosciutto turkey venison pig."},
                        ]
                    },
                    {
                        name: "The New Party",
                        website: "TNP.com",
                        answers: [
                            {q_id: 0, answer_level: 1, answer:"Here be an answer to the 0th question"},
                            {q_id: 1, answer_level: 1, answer:"Here be an answer to the 1st question"},
                            {q_id: 2, answer_level: -1, answer:"Here be an answer to the 2nd question"},
                            {q_id: 3, answer_level: 1, answer:"Here be an answer to the 3rd question"},
                        ]
                    }
                ],
                questions: [{q_id: 0, question:"This is my first Question"}, {q_id:1, question:"This is my second question"}, {q_id:2, question:"This is my third question"}, {q_id:3, question:"This is my last question"}],
                answers: [{val: -2, txt:"Strongly Disagree"}, {val:-1, txt:"Somewhat Disagree"}, {val:0, txt:"Neutral"}, {val:1, txt:"Somewhat Agree"}, {val:2, txt:"Strongly Agree"}],
                index: 0,
                results: [],
                show_results: false

            }
        }
    }
</script>

<style>
    html{
        background: lightblue;
    }
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
        background: lightblue;
    }
    .jumbotron{
        /*background: lightskyblue;*/
    }

</style>
