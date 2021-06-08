<template>
    <div class="flag">

        <a v-bind:class="$i18n.locale==='en'?'disabled':'enabled'" @click="$i18n.locale='en'">
            <img width="90px" :src="require('../../assets/en.png')"/>
        </a>
        <a v-bind:class="$i18n.locale==='de'?'disabled':'enabled'" @click="$i18n.locale='de'">
            <img width="90px" :src="require('../../assets/de.png')"/>
        </a>

    </div>
</template>

<script>

    export default {
        name: "Flag",
        data() {
            return {
                langs: ['en', 'de']
            }
        }
    }
</script>

<style scoped>
    img{
        margin: 20px 10px;
    }
    div.flag a.enabled{

        -webkit-filter: grayscale(1); /* Webkit */
        filter: grayscale(1); /* W3C */

        cursor: pointer;
    }
    div.flag a.disabled{

    }
</style>