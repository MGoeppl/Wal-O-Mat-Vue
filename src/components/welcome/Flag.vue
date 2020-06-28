<template>
    <div class="flag">
        <a v-bind:class="$i18n.locale==='de'?'disabled':'enabled'" @click="$i18n.locale='de'">
            🇩🇪
        </a>
        <a v-bind:class="$i18n.locale==='en'?'disabled':'enabled'" @click="$i18n.locale='en'">
            🇬🇧
        </a>
    </div>
</template>

<script>
    export default {
        name: "Flag",
        data() {
            return {
                lang: "en",
                langs: ['en', 'de']
            }
        }
    }
</script>

<style scoped>
    div.flag{
        font-size: 50px;
    }
    div.flag a.enabled{
        cursor: pointer;
    }
    div.flag a.disabled{
        -webkit-filter: grayscale(1); /* Webkit */
        filter: grayscale(1); /* W3C */
    }
</style>