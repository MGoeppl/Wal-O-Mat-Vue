<template>
    <b-progress class="mt-2" :max="125" height="2rem" show-value>
<!--        <b-progress-bar :value="answered()" show-progress animated>{{ $t('questions.bar') }}{{answered()}}/{{user_results.length}}</b-progress-bar>-->
        <b-progress-bar :value="100/user_results.length*answered()" show-progress animated variant="success">{{$t('questions.bar.answered')}}</b-progress-bar>
        <b-progress-bar :value="100-100/user_results.length*answered()" variant="dark">{{$t('questions.bar.unanswered')}}</b-progress-bar>
        <b-progress-bar :value="25" variant="secondary">{{$t('questions.bar.weight')}}</b-progress-bar>

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
                let x= this.user_results.filter(x=>!(x===null||x===undefined)).length;
                console.log(x);
                return x;
            }
        }
    }
</script>

<style scoped>

</style>