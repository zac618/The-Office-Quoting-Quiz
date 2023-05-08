import data from './quotes.json' assert { type: 'json' }




// allQuotes is storing all possible quote options
const allQuotes = []
// allCharacters is storing all possible character options
const allCharacters = []
const characterPick = []


// confirmed working test variables
const testQuote = data.dataJSON[9].quote
const testChar = data.dataJSON[9].character



function getAllQuotes() {
    for (let i = 0 ; i < data.dataJSON.length ; i++) {
        let currentQuote = data.dataJSON[i].quote
        allQuotes.push(currentQuote)
    }
}

function getAllCharacters() {
    for (let i = 0 ; i < data.dataJSON.length ; i++) {
        let currentcharacter = data.dataJSON[i].character
        allCharacters.push(currentcharacter)
    }
}

function pickCharacter() {
    const randomCharacterIndex = Math.floor(Math.random() * allCharacters.length)
    const characterOption = characterPick.push(allCharacters[randomCharacterIndex]);
}








// NEED TO FIND A WAY TO DO THIS BUT MAKING THE HTML TAGS AUTOMATICALLY INCREMENT
// ALSO NEED THE CHARACTERS TO AUTOMATICALLY POPULATE OBVIOUSLY...
function testingQuote() {   
    document.getElementById("quoteText").innerHTML=`${allQuotes[9]}`;
    document.getElementById("characterText1").innerHTML=`${allCharacters[9]}`;
    document.getElementById("characterText2").innerHTML=`${allCharacters[3]}`;
    document.getElementById("characterText3").innerHTML=`${allCharacters[19]}`;
    document.getElementById("characterText4").innerHTML=`${allCharacters[34]}`;

}

// New solution 5/2/23

// - Need variable for correct answer 
// - Need variable for incorrect answers (3)


function getCorrectAnswer() {

}

// getCharacters function is getting characters and pushing them all to a global array to use later
// getCharacters function is also getting 3 random characters for incorrect options



        document.getElementById("quoteText").innerHTML=`${testChar[0]}`;




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
    console.log(data.dataJSON.indexOf(testChar))
    getAllQuotes()
    getAllCharacters()
    pickCharacter()
    testingQuote()
    console.log(allQuotes[9])
    console.log(allCharacters[9])
    console.log(characterPick)
}

onInit()
