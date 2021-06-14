# Import Script

Quick and Dirty Javascript Script that updated the `wahl_de.json` and `wahl_en.json` files.

## Usage

1. Export the Confluence Document
2. Copy it into the folder of the script and call it `confluence_export.json`
3. Update the `questions.txt` file
4. Execute the Script `node confluence2walomat.js`
5. Upload updated JSON's to server

## Expected Format

### Questions

Simply add all questions to a text file and separate each question with a line break. First put all German Questions, then put all English questions. If you had 6 questions:

```text
Frage 1 geht hier
Hier kommt Frage 2
Hier ist die dritte Frage
Question 1 goes here, do not add an extra space
Question 2 here
And finally here is question 3
```

### Confluence Export

> Note: Due to Confluence, we start counting at 1, not 0

```json
{
    "total": 2,
    "list": {
        "entry": [
            {
                "fields": {
                    "wahlprogramm": "http://example.com/program",
                    "nameListe": "List Name",
                    "homepage": "http://example.com/program",
                    "these1": 0, 
                    "these1DE": "Hier kommt deine Frage auf Deutsch",
                    "these1EN": "Here goes your English Question",
                    "these2": 0, 
                    "these2DE": "Hier kommt deine Frage auf Deutsch",
                    "these2EN": "Here goes your English Question"
                }
            }
            
        ]
    }
}
```
#### Points

0: Agree

1: Neutral

2: Disagree
