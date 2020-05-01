<template>
  <div id="app">
    <Header
            :index="index"
    />
    <b-row>
      <b-col sm="6" offset="3">
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
        />
      </b-col>
    </b-row>
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
            answers: [
              {q_id: 0, answer_level: 0, answer:"Answer to 0"},
              {q_id: 1, answer_level: 1, answer:"Answer to 1"},
              {q_id: 2, answer_level: -1, answer:"Answer to 2"},
              {q_id: 3, answer_level: 0, answer:"Answer to 3"},
            ]
          },
          {
            name: "The New Party",
            answers: [
              {q_id: 0, answer_level: 1, answer:"1Answer to 0"},
              {q_id: 1, answer_level: 1, answer:"1Answer to 1"},
              {q_id: 2, answer_level: -1, answer:"1Answer to 2"},
              {q_id: 3, answer_level: 1, answer:"1Answer to 3"},
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
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
