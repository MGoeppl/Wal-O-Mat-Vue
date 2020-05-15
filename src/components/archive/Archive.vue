<template>
    <div id="archive">
        <div></div>
    </div>
</template>

<script>
    export default {
        name: "Archive",
        props:{
            year_list: Array,
            current_year: Number,
            set_year: Function
        },
        methods:{
            is_hsw_soon(){
                if(this.year_list.includes(this.current_year)){
                    return true
                }
            }
        }
    }
</script>

<style scoped>

</style>