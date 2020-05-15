<template>
    <b-alert
            show
            dismissible
            variant="warning"

            v-if="results.filter(x=>x===null||x===undefined)!==[]"
    >Some questions have been skipped, these shall be interpreted as neutral <hr> TODO: Change the behaviour to better interpret skips</b-alert>
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