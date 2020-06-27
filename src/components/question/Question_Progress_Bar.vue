<template>
    <b-progress class="mt-2" :max="user_results.length" show-value>
        <b-progress-bar :value="answered()" show-progress animated>{{ $t('questions.bar') }}{{answered()}}/{{user_results.length}}</b-progress-bar>
    </b-progress>
</template>

<script>
    export default {
        name: "Question_Progress_Bar",
        props:{
            user_results:Array,
        },
        methods:{
            answered(){
                let x= this.user_results.filter(x=>!(x===null||x===undefined)).length
                console.log(x)
                return x
            }
        }
    }
</script>

<style scoped>

</style>