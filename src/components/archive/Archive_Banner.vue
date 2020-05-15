<template>
    <b-alert show dismissible variant="warning">
        <div id="DivBcAlertsCantBeClicked">
            You are viewing the archive of {{year}}. Refresh the page to select another year.
            <hr>
            TODO: Think about changing this to a click to trigger refresh (reset quiz)
        </div>
    </b-alert>
</template>

<script>
    export default {
        name: "Archive_Banner",
        props:{
            year: Number,

        }
    }
</script>

<style scoped>

</style>