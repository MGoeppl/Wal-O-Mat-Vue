<template>
    <b-alert show dismissible variant="warning"
            v-if="results.filter(x=>undefined!==x).length!==results.length">

        <h4 class="alert-heading">{{$t('star.skip.title')}}</h4>
        <hr>
        <p>{{$t('star.skip.text')}}</p>
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