<template>
    <div class="Party-Card">
        <b-card no-body>
            <b-card-header>
                <h3>{{party.name}}</h3>
                <PartyProgressBar
                    :party="party"
                    :results="results"
                    />

            </b-card-header>
            <b-list-group>
                <PartyQuestionElementVariant
                        v-for="question in questions"
                        :key="question.q_id"

                        :question="question"
                        :party="party"
                        :result="results[question.q_id]"
                        :answers="answers"
                />
            </b-list-group>
            <b-card-footer>For More Info Regarding the Party, you can visit {{party.website}}</b-card-footer>
        </b-card>
    </div>
</template>

<script>
    import PartyQuestionElementVariant from "@/components/PartyQuestionElementVariant";
    import PartyProgressBar from "@/components/PartyProgressBar";
    export default {
        name: "PartyCard",
        components: {PartyProgressBar, PartyQuestionElementVariant},
        props:{
            party: Object,
            results: Array,
            questions: Array,
            answers: Array
        }
    }
</script>

<style scoped>

</style>