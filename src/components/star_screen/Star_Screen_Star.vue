<template>
    <div id = "star">
        <font-awesome-icon style="color:  #f0ad4e " v-if="filled===true" icon="star" @click="filled=false"/>
        <font-awesome-icon style="color:  grey    " v-if="filled===false" icon="star" @click="filled=true"/>
    </div>
</template>

<script>
    export default {
        name: "Star_Screen_Star",
        data(){
            return {
                filled: false
            }
        },
        methods:{
            isStared() {
                return this.filled
            },
            setStar(b){
                this.filled = b;
            }
        }
    }
</script>

<style scoped>

</style>