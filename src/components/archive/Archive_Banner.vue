<template>
    <b-alert show variant="warning" v-if="archive_override">
        <div id="DivBcAlertsCantBeClicked" @click="toggle_archive()">
            You are viewing the archive of {{year}}. Click text to go back
        </div>
    </b-alert>
</template>

<script>
    export default {
        name: "Archive_Banner",
        props:{
            archive_override: Boolean,
            toggle_archive: Function,
            year: String,

        }
    }
</script>

<style scoped>

</style>