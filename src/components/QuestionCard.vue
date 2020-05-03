<template>
    <div class="Party-Card">
        <b-card no-body>
            <b-card-header>
                <h3>{{question.question}}</h3>
                <i>You Answered: {{results[question.q_id]}}</i>

            </b-card-header>
            <b-list-group>
                <QuestionCardPartyElement
                    v-for="party in parties"
                    :key="party.name"

                    :party="party"
                    :question="question"
                />
            </b-list-group>
        </b-card>
    </div>

</template>

<script>
    import QuestionCardPartyElement from "@/components/QuestionCardPartyElement";
    export default {
        name: "QuestionCard",
        components: {QuestionCardPartyElement},
        props:{
            question: Object,
            parties: Array,
            results: Array
        }
    }
</script>

<style scoped>

</style>