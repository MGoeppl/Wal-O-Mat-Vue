<template>
    <go-top></go-top>
</template>

<script>
    import GoTop from "@/components/GoTop";
    export default {
        name: "Header",
        components: {GoTop},
        props: {
            index: Number,
        },
    }
</script>

<style scoped>

</style>