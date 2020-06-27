<template>
    <div class="Lang_Switcher">
        <select v-model="$i18n.locale">
            <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
        </select>
    </div>
</template>

<script>
    export default {
        name: 'Lang_Switcher',
        data () {
            return { langs: ['en', 'de'] }
        }
    }
</script>

<style scoped>

</style>