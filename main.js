import data from './quotes.json' assert { type: 'json' }


const rootApiUrl = '/Users/zacegleston/Documents/CodeThings/The-Office-Quoting-Quiz/quotes';
// root api URL is the root of the API call
const allCharacters = []
// allCharacters is storing all possible character options
const possibleAnswers = []
// possibleAnswers is using a 'random' index to fill it's array with 3 characters from the allCharacters array 

// function newgetCharacters() {
//     console.log(data)
// }


// getCharacters function is getting characters and pushing them all to a global array to use later
// getCharacters function is also getting 3 random characters for incorrect options
async function getCharacters() {
    try {
    const charactersCall = await fetch("quotes.json");
    // const rawCharactersList = await charactersCall.json();
    console.log(data)
//      below is iterating through each item of the characters api call and pushing each character name to
//      the allCharacters array
    // for (let i = 0 ; i < rawCharactersList.data.length ; i++ ) {
    //     let namesToPush = `${rawCharactersList.data[i].firstname} ${rawCharactersList.data[i].lastname}`;
    //     allCharacters.push(namesToPush)
    // }
    // for (let j = 0 ; possibleAnswers.length < 3 ; j++) {
    //     while (possibleAnswers.length < 3) {
    //         const randomCharacterIndex = Math.floor(Math.random() * allCharacters.length);
    //         const randomCharacterPick = allCharacters[randomCharacterIndex];
    //             // randomCharacterPick is the 'random' character from the allCharacters array using the 
    //             // randomCharacterIndex which is 'random' enough for our needs
    //             if (!possibleAnswers.includes(randomCharacterPick)) {
    //                 possibleAnswers.push(randomCharacterPick);
    //                 // this if statement is checking if the possibleAnswers array includes the name picked
    //                 // if the name is already in the array, it will continue on until it has enough answers in the array
    //             continue
    //         } else {
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
    
    //         }
    //     }
    
    // }
    } catch (error) {
        console.log(error)
    }
}

async function getQuote2() {
    try {
        // Fetch Random Quote
        const apiResponse = await fetch(`${rootApiUrl}/quotes/random`);
        // Get response data as json object
        // apiResponse.json() = {data: {character, content, ...}}
        const {data} = await apiResponse.json();
        const {character, content: quote} = data || {};
        console.log(quote);
        const fullName=`${character.firstname} ${character.lastname}` + " - correct answer";
        document.getElementById("quoteText").innerHTML="\""+quote+"\"";
        // document.getElementById("nameOption1").innerHTML="-"+fullName;
        console.log(fullName + " - correct answer")
        possibleAnswers.push(fullName)
        const answerContainer = document.querySelector(".answer-container");
        const button = document.createElement("button");
        
        // !!!!!!!!!!!!!
        // This needs to happen from the possibleAnswers array OUTSIDE OF THE FUNCTIONS. This will
        // allow them to be 'randomized' and also checked for matching
        button.textContent = fullName;
        // !!!!!!!!!!!!!

        button.classList.add("answer-button-true");
        answerContainer.appendChild(button);

    // If request or any of the above fails, error will be thrown
    } catch (error) {
        console.error(error);
    }
}

// onInit is calling the getCharacters function so all characters are pulled into global array
// onInit is also calling the getQuote2 function...which gets quote and correct character answer
function onInit(){ 
    getCharacters()
    // getQuote2()
    // console.log(allCharacters)
    // console.log(possibleAnswers)
}

onInit()

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//          3.27.2023 Notes
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//
// 1. I need to randomize the order the answers display in. Right now the
//      correct answer is the last option every time (3.27.2023)

