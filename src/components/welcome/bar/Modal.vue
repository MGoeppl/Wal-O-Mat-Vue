<template>
    <div>
        <b-modal id="my-modal" scrollable ok-title="Back" ok-only title="How it Works">

            <b-alert dismissible variant="warning" show>
                At the current point in time, this is only available in English
            </b-alert>
            <p>
                The Walomat is designed to help you to understand each parties opinions and how close they are to yours. Each party was asked a set of questions. You shall be asked the same question, and are able to answer each statement with: Agree, Neutral, Disagree. Additionally, we shall ask you if you find a particular question important. If so, the question's importance shall roughly be doubled. Using an algorithm, we shall calculate if your opinion and that of a party overlap.
            </p>
            <h5>Algorithm</h5>
            <p>
                The Walomat makes use of a scoring algorithm, where points are awarded depending on your choices.
            </p>
            <h6>Normal Questions</h6>
            <table border="0" cellspacing="0"><colgroup span="4" width="85"></colgroup>
                <tbody>
                <tr>
                    <td style="border: 1px solid #000000;" align="left" height="17">&nbsp;</td>
                    <td style="border: 1px solid #000000;" align="right">Disagree</td>
                    <td style="border: 1px solid #000000;" align="right">Neutral</td>
                    <td style="border: 1px solid #000000;" align="right">Agree</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #000000;" align="right" height="17">Disagree</td>
                    <td style="border: 1px solid #000000;" align="right">1</td>
                    <td style="border: 1px solid #000000;" align="right">0</td>
                    <td style="border: 1px solid #000000;" align="right">-1</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #000000;" align="right" height="17">Neutral</td>
                    <td style="border: 1px solid #000000;" align="right">0</td>
                    <td style="border: 1px solid #000000;" align="right">1</td>
                    <td style="border: 1px solid #000000;" align="right">0</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #000000;" align="right" height="17">Agree</td>
                    <td style="border: 1px solid #000000;" align="right">-1</td>
                    <td style="border: 1px solid #000000;" align="right">0</td>
                    <td style="border: 1px solid #000000;" align="right">1</td>
                </tr>
                </tbody>
            </table>

            <h6>Important Questions</h6>
            <table border="0" cellspacing="0"><colgroup span="4" width="85"></colgroup>
                <tbody>
                <tr>
                    <td style="border: 1px solid #000000;" align="left" height="17">&nbsp;</td>
                    <td style="border: 1px solid #000000;" align="right">Disagree</td>
                    <td style="border: 1px solid #000000;" align="right">Neutral</td>
                    <td style="border: 1px solid #000000;" align="right">Agree</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #000000;" align="right" height="17">Disagree</td>
                    <td style="border: 1px solid #000000;" align="right">2</td>
                    <td style="border: 1px solid #000000;" align="right">-1</td>
                    <td style="border: 1px solid #000000;" align="right">-2</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #000000;" align="right" height="17">Neutral</td>
                    <td style="border: 1px solid #000000;" align="right">-1</td>
                    <td style="border: 1px solid #000000;" align="right">2</td>
                    <td style="border: 1px solid #000000;" align="right">-1</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #000000;" align="right" height="17">Agree</td>
                    <td style="border: 1px solid #000000;" align="right">-2</td>
                    <td style="border: 1px solid #000000;" align="right">-1</td>
                    <td style="border: 1px solid #000000;" align="right">2</td>
                </tr>
                </tbody>
            </table>
            <p/>
            <h5>Technical Information</h5>
            <p>This app was written in Vue.JS and is hosted on the servers of the Studentische Vertretung. It does not track your choices. The source code has been uploaded to Github and can be found: https://github.com/Aevyz/Wal-O-Mat-Vue</p>
            <h5>Credits</h5>
            <p>A special thank you goes to the following people for helping to develop and test the tool</p>
            <ul>
                <li>Miriam A.</li>
                <li>Moritz G.</li>
                <li>Fabi H.</li>
                <li>Jonas S.</li>
                <li>Tibor a. d. K.</li>
                <li>Domi</li>
                <li>Freddy N.</li>
            </ul>

        </b-modal>
    </div>
</template>

<script>
    export default {
        name: "Modal"
    }
</script>

<style scoped>

</style>