import data from './quotes.json' assert { type: 'json' }


// html elements
const answerContainer = document.getElementById("answer-container");


// allQuotes is storing all possible quote options from the JSON file
const allQuotes = []
// allCharacters is storing all possible character options from the JSON file
const allCharacters = []
// indexOfPick is an array containing the random index number generated
const indexOfPick = []
// randomIndex is just giving a random number between 0-49
let randomIndex
let wrongIndexRaw
let wrongIndexUsed = []
let wrongAnswers = []

// confirmed working test variables
const testQuote = data.dataJSON[9].quote
const testChar = data.dataJSON[9].character


// getAllCharacters is gathering all the quote values from the JSON file & pushing them to an array
function getAllQuotes() {
    for (let i = 0 ; i < data.dataJSON.length ; i++) {
        let currentQuote = data.dataJSON[i].quote
        allQuotes.push(currentQuote)
    }
}

// getAllCharacters is gathering all the character values from the JSON file & pushing them to an array
function getAllCharacters() {
    for (let i = 0 ; i < data.dataJSON.length ; i++) {
        let currentcharacter = data.dataJSON[i].character
        allCharacters.push(currentcharacter)
    }
}
// getPickIndex is getting us a random number from 0-49 to use for getting a quote/character from JSON
function getPickIndex() {
    randomIndex = Math.floor(Math.random() * allCharacters.length)
    indexOfPick.push(randomIndex);
}

function wrongAnswerIndex() {
    for (let i = 0 ; i < 3 ; i++) {
    wrongIndexRaw = Math.floor(Math.random() * allCharacters.length)
    wrongIndexUsed.push(wrongIndexRaw)
    }
}


function quoteForQuestion() {
    return allQuotes[randomIndex]
}

function correctAnswerForQuestion() {
    return allCharacters[randomIndex]
}

function wrongAnswersForQuestion() {
    for (let i = 0 ; i < 3 ; i++) {
        wrongAnswers.push(allCharacters[wrongIndexUsed[i]])
    }
}


// function loadQuestion() {
//     document.getElementById("quoteText").innerHTML=`${allQuotes[randomIndex]}`;
//     document.getElementById("characterText1").innerHTML=`${allCharacters[randomIndex]}`;

// }



// NEED TO FIND A WAY TO DO THIS BUT MAKING THE HTML TAGS AUTOMATICALLY INCREMENT
// ALSO NEED THE CHARACTERS TO AUTOMATICALLY POPULATE OBVIOUSLY...
function testingQuote() {   
    document.getElementById("quoteText").innerHTML=`${allQuotes[randomIndex]}`;
    document.getElementById("characterText1").innerHTML=`${allCharacters[randomIndex]}`;
    document.getElementById("characterText2").innerHTML=`${allCharacters[randomIndex]}`;
    document.getElementById("characterText3").innerHTML=`${allCharacters[randomIndex]}`;
    document.getElementById("characterText4").innerHTML=`${allCharacters[randomIndex]}`;

}

// New solution 5/2/23

// - Need variable for correct answer 
// - Need variable for incorrect answers (3)


function getCorrectAnswer() {

}

// getCharacters function is getting characters and pushing them all to a global array to use later
// getCharacters function is also getting 3 random characters for incorrect options


        // document.getElementById("quoteText").innerHTML=`${testChar[0]}`;


    //             possibleAnswers.push(randomCharacterPick)
    //                 // adding the randomCharacterPick to the possibleAnswers array
    //             const answerContainer = document.querySelector(".answer-container");
    //                 // selecting the div with the class of "answer-container"
    //             const button = document.createElement("button");
    //                 // creating a variable called button and setting it as a created button element
    //             button.textContent = randomCharacterPick;
    //                 // setting the button's content to the value of randomCharacterPick
    //             button.classList.add("answer-button");
    //                 // adding a class to the answer button so we can style it later
    //             answerContainer.appendChild(button);
    //                 // appending button as a child of the answerContainer


function onInit(){ 

    
    // loadQuestion()

    getAllQuotes()
    getAllCharacters()
    getPickIndex()
    testingQuote()
    wrongAnswerIndex()
    wrongAnswersForQuestion()
    console.log(randomIndex)


    console.log(quoteForQuestion())
    console.log(correctAnswerForQuestion())
    console.log(wrongAnswers)
}

onInit()
