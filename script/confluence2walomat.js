
//-------------------//
//-------------------//
//-------------------//
// CONSTANTS
//-------------------//
//-------------------//
//-------------------//
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
const assert = require('assert/strict');
const fs = require('fs')

const deWahl = require('../src/assets/wahl_de.json');
const enWahl = require('../src/assets/wahl_en.json');
const confluenceJSON = require('./confluence_export.json')
// console.log(deWahl)
// console.log(confluenceJSON)


//-------------------//
//-------------------//
//-------------------//
//SCRIPTS
//-------------------//
//-------------------//
//-------------------//
console.log("\n\nParsing questions.txt\n\n")
var questionList = questions2JSON('questions.txt')
console.log(questionList)


readline.question("Is this Correct? If so, type 'y'", questionCorrect=> {
    if(questionCorrect==='y'){
        readline.question('When is the Election? YYYY-MM-DD', date_election => {
            console.log("Hi")
            answers(date_election, questionList)


            console.log(JSON.stringify(enWahl, null, 2))
            readline.question("Is the English Output Correct? If so, type 'y'", enCorrect =>{
                if(enCorrect==='y'){
                    console.log(JSON.stringify(deWahl, null, 2))
                    readline.question("Is the German Output Correct? If so, type 'y'", deCorrect =>{
                        if(deCorrect==='y') {
                            readline.question("Do you wish to import into the files? If so, type 'y'", importAgree => {
                                if(importAgree==='y'){
                                    importIntoFile()
                                }
                                readline.close()
                            });
                        }
                        else{
                            readline.close();
                        }
                    });
                }
                else{
                    readline.close();
                }
            });
        });
    }
    else{
        console.log("Stopping")
    }

});


//-------------------//
//-------------------//
//-------------------//
//FUNCTIONS
//-------------------//
//-------------------//
//-------------------//

function importIntoFile() {
    fs.writeFile('../src/assets/wahl_de.json', JSON.stringify(deWahl, null, 2), 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }

        console.log("JSON file has been saved.");
    });

    fs.writeFile('../src/assets/wahl_en.json', JSON.stringify(enWahl, null, 2), 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }

        console.log("JSON file has been saved.");
    });
}

function questions2JSON(filepath){
    const buffer = fs.readFileSync(filepath);
    const fileContent = buffer.toString().trim();
    var questionArray = fileContent.split("\n")


    assert.ok(questionArray.length % 2 === 0, "List must be Even. Length is "+questionArray.length%2)


    var questionNumber = questionArray.length/2
    var questions = {}
    questions.de = []
    questions.en = []
    for(let i = 0; i<questionNumber; i++){
        questions.de.push({q_id: i, question: questionArray[i]})
    }

    for(let i = 0; i<questionNumber; i++){
        questions.en.push({q_id: i, question: questionArray[i+questionNumber]})
    }

    return questions
}
function answers(date_election, questionList){

    var finalOutputDE = {}
    var finalOutputEN = {}

    var obj = confluenceJSON

    finalOutputDE.year=Number(date_election.substr(0,4))
    finalOutputDE.date=date_election
    finalOutputDE.questions = questionList.de

    finalOutputEN.year=Number(date_election.substr(0,4))
    finalOutputEN.date=date_election
    finalOutputEN.questions = questionList.en


    var entries = obj.list.entry

    finalOutputDE.parties = []
    finalOutputEN.parties = []


    for(var i = 0; i<entries.length; i++){

        var entry = entries[i]
        var partyEntryEN = {}
        var partyEntryDE = {}
        Object.keys(obj).length

        partyEntryEN.name = entry.fields.nameListe
        partyEntryEN.program = entry.fields.wahlprogramm
        partyEntryEN.website = entry.fields.homepage
        partyEntryEN.answers=[]

        partyEntryDE.name = entry.fields.nameListe
        partyEntryDE.program = entry.fields.wahlprogramm
        partyEntryDE.website = entry.fields.homepage
        partyEntryDE.answers=[]

        // var qIndex = 1
        for(
            var qIndex = 1;
            // eslint-disable-next-line no-prototype-builtins
            entry.fields.hasOwnProperty("these"+qIndex) &&
            // eslint-disable-next-line no-prototype-builtins
            entry.fields.hasOwnProperty("these"+qIndex+"EN") &&
            // eslint-disable-next-line no-prototype-builtins
            entry.fields.hasOwnProperty("these"+qIndex+"DE") ;
            qIndex++
        ){

            var answerDE = {}
            answerDE.q_id = qIndex
            answerDE.answer_level =  (entry.fields["these"+qIndex]*-1+1)
            var answerEN = {}
            answerEN.q_id = qIndex
            answerEN.answer_level = (entry.fields["these"+qIndex]*-1+1)

            answerEN.answer = entry.fields["these"+qIndex+"EN"]
            partyEntryEN.answers.push(answerEN)

            answerDE.answer = entry.fields["these"+qIndex+"DE"]
            partyEntryDE.answers.push(answerDE)
        }
        assert.ok(partyEntryDE.answers.length===partyEntryEN.answers.length, "Number of English answers and German Answers different for party "+partyEntryEN.name)
        assert.equal(partyEntryEN.answers.length, questionList.en.length, "Number of Questions and Number of answers differs for party "+partyEntryEN.name)
        assert.equal(partyEntryDE.answers.length, questionList.de.length, "Number of Questions and Number of answers differs for party "+partyEntryEN.name)

        finalOutputDE.parties.push(partyEntryDE)
        finalOutputEN.parties.push(partyEntryEN)
    }
    deWahl.push(finalOutputDE)
    enWahl.push(finalOutputEN)

}

