<template>
    <div id ="selector">

        <Welcome
                v-if="current_scene==='welcome'"

                :set_year="setYear"
                :year_list="listOfAllYears()"
                :set_scene="set_scene"
                :year="year"
                :get_date="get_date"
        />

        <Archive_Banner
            v-if="(current_scene==='question'||current_scene==='result')&&year!==getYear()"

            :year="year"
        />
        <Question_Container
                v-if="current_scene==='question'"

                :questions=getYearData(year).questions
                :answers="answers"
                :update_results="this.update_results"
                :user_results="user_results"
                :set_scene="set_scene"
                :set_results_length="set_results_length"
        />


        <Results
                v-if="current_scene==='result'"

                :answers="answers"
                :results="user_results"
                :year_data="getYearData(year)"
                :set_scene="set_scene"

        />
    </div>
</template>

<script>
    import Question_Container from "@/components/question/Question_Container";
    import Complete_Info from "@/assets/wahl_info.json";
    import Results from "@/components/results/Results";
    import Vue from "vue"
    import Welcome from "@/components/welcome/Welcome";
    import Archive_Banner from "@/components/archive/Archive_Banner";

    export default {
        name: "Selector",
        components: {Archive_Banner, Welcome, Results, Question_Container},

        data(){
            return {
                year: this.getYear(),
                current_scene: "welcome",
                user_results: [],
                answers: [
                    // {val: -2, txt:"Strongly Disagree"},
                    {val:-1, txt:"Disagree"},
                    {val:0, txt:"Neutral"},
                    {val:1, txt:"Agree"},
                    // {val:2, txt:"Strongly Agree"}
                ],
            }
        },

        methods:{
            set_results_length(i){
                this.user_results=new Array(i)
            },
            get_date(year){
                for(const c in Complete_Info){
                    console.log(Complete_Info[c])
                    if(Complete_Info[c].year===year){
                        return Complete_Info[c].date
                    }
                }
                return null
            },
            set_scene(scene){
                this.current_scene=scene
            },
            update_results: function (index, value) {
                //Need to use Vue Set instead of user_results[index] = val, or else array does not update
                //Also it seems rather inefficient to import vue just for this method :S
                Vue.set(this.user_results, index, value)
            },
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
                this.archive_override=true
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

<style scoped>

</style>