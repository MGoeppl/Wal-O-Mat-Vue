<template>
  <div id = "app">
    <Header
            :index=-1
    />

    <b-container>
      <b-row>
        <b-col md="6" offset-md="3">
          <Selector></Selector>

        </b-col>
      </b-row>
    </b-container>

  </div>

</template>

<script>

  import Header from "@/components/Header";
  import Complete_Info from "@/assets/wahl_info.json"
  import Selector from "@/components/Selector";

  export default {
    name: 'App',

    components: {
      Selector,
      Header

    },

    data(){
      return {
        year: this.getYear(),
        answers: [{val: -2, txt:"Strongly Disagree"}, {val:-1, txt:"Somewhat Disagree"}, {val:0, txt:"Neutral"}, {val:1, txt:"Somewhat Agree"}, {val:2, txt:"Strongly Agree"}],
      }
    },

    methods:{
      getYear(){
        return new Date().getFullYear()
      },
      getYearData(year){
        for(let i = 0; i<Complete_Info.length;i++){
          // console.log(Complete_Info[i].year)

          if(Complete_Info[i].year===year) return Complete_Info[i]
        }
        return null
      },
      setYear(i){
        this.year=i
      },
      listOfAllYears(){
        let r = []
        for(let i = 0; i < Complete_Info.length; i++){
          r[i] = Complete_Info[i].year
        }
        return r
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
