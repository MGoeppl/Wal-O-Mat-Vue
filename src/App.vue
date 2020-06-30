<template>
  <div id = "app">
    <Header
            :index=-1
    />

    <b-container>
      <b-row>
        <b-col md="6" offset-md="3">
          <Selector :json="getJSON()"></Selector>

        </b-col>
      </b-row>
    </b-container>

  </div>

</template>

<script>

  import Header from "@/components/Header";
  import Complete_Info from "@/assets/wahl_info.json"
  import de from "@/assets/wahl_de.json"
  import en from "@/assets/wahl_en.json"
  import Selector from "@/components/Selector";

  export default {
    name: 'App',

    components: {
      Selector,
      Header
    },

    methods:{
      getJSON(){
        // console.log("Locale: "+this.$i18n.locale)
        switch(this.$i18n.locale){
          case "de": return de
          case "en": return en
          default: return Complete_Info
        }
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
</style>
