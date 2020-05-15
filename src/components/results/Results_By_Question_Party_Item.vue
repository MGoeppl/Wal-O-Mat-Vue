<template>
    <b-list-group-item
            :class="visible ? null : 'collapsed'"
            :aria-expanded="visible ? 'true' : 'false'"
            @click="visible = !visible"
            aria-controls="collapse-0"
    >
        {{party.name}}
        <br>

        <b-collapse id="collapse-0" v-model="visible" class="mt-2">
            {{party.answers[question.q_id].answer}}
        </b-collapse>
    </b-list-group-item>


</template>

<script>
    export default {
        name: "Results_By_Question_Party_Item",
        props:{
            party: Object,
            question: Object
        },
        data(){
            return{
                visible: false
            }
        },
    }
</script>

<style scoped>

</style>