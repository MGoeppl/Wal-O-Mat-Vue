<template>
    <div class="Party-Card">
        <b-card no-body>
            <b-card-header>
                <h3>{{party.name}}</h3>
                <p id = "Debug">{{results}}</p>
                <Results_By_Party_Progress_Bar
                        :party="party"
                        :results="results"
                />

            </b-card-header>
            <b-list-group>
                <Result_By_Party_Question_Item
                        v-for="question in questions"
                        :key="question.q_id"

                        :question="question"
                        :party="party"
                        :result="results[question.q_id]"
                        :answers="answers"
                        :starred="star_array[question.q_id]"
                />
            </b-list-group>
            <b-card-footer>For More Info Regarding the Party, you can visit <a v-bind:href="party.website">{{party.website}}</a></b-card-footer>
        </b-card>
    </div>
</template>

<script>
    import Results_By_Party_Progress_Bar from "@/components/results/Results_By_Party_Progress_Bar";
    import Result_By_Party_Question_Item from "@/components/results/Results_By_Party_Question_Item";
    export default {
        name: "Results_By_Party",
        components: {Result_By_Party_Question_Item, Results_By_Party_Progress_Bar},
        props:{
            party: Object,
            results: Array,
            questions: Array,
            answers: Array,
            star_array: Array
        }
    }
</script>

<style scoped>

</style>