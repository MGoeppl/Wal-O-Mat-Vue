<template>
    <b-alert
            show
            dismissible
            variant="warning"

            v-if="results.filter(x=>undefined!==x).length!==results.length">


        <h4 class="alert-heading">Skipped Answers</h4>
        <hr>
        Some questions have been skipped, these shall be interpreted as neutral
    </b-alert>
</template>

<script>
    export default {
        name: "User_Has_Skipped_Question_Alert",
        props:{
            results: Array
        }
    }
</script>

<style scoped>

</style>