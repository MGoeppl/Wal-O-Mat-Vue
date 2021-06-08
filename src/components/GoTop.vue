<template>
    <got
            :maxWidth="0"
            :bottom="25"
            :right="25"
            :size="50"
    />
</template>
<script>
    import got from '@inotom/vue-go-top';
    export default {
        name: "GoTop",
        components: {
            got
        }
    }
</script>