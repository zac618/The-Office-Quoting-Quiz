const rootApiUrl = 'https://www.officeapi.dev/api';
// root api URL is the root of the API call
const allCharacters = []
// allCharacters is storing all possible character options
const possibleAnswers = []
// possibleAnswers is using a 'random' index to fill it's array with 3 characters from the allCharacters array 




// getCharacters function is getting characters and pushing them all to a global array to use later
// getCharacters function is also getting 3 random characters for incorrect options
async function getCharacters() {
    try {
    const charactersCall = await fetch(`${rootApiUrl}/characters`);
    const rawCharactersList = await charactersCall.json();
    for (let i = 0 ; i < rawCharactersList.data.length ; i++ ) {
        let namesToPush = `${rawCharactersList.data[i].firstname} ${rawCharactersList.data[i].lastname}`;
        allCharacters.push(namesToPush)
    }
    for (let j = 0 ; j < 3 ; j++) {
        //
        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!
        // I will need some sort of IF statement around here to check if randomCharacterPick is already in
        // the possibleAnswers array. If it is, don't add it and move on to iterate thru the list again
        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!
        //
        const randomCharacterIndex = Math.floor(Math.random()*allCharacters.length)
        const randomCharacterPick = allCharacters[randomCharacterIndex]
        // randomCharacterPick is the 'random' character from the allCharacters array
        if (possibleAnswers.includes(randomCharacterPick) !== -1) {
            possibleAnswers.push(randomCharacterPick)
            // Here I need each iteration to add an option for the answers
            const answerContainer = document.querySelector(".answer-container");
            const button = document.createElement("button");
            button.textContent = randomCharacterPick;
            button.classList.add("answer-button");
            answerContainer.appendChild(button);
        }
    }
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
        const fullName=`${character.firstname} ${character.lastname}`;
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

        button.classList.add("answer-button");
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
    getQuote2()
    console.log(allCharacters)
    console.log(possibleAnswers)
}

onInit()

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//          3.27.2023 Notes
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//
// 1. I need to have the correct character answer populate into the 'possibleAnswers' array before any other
//      character is added to it. THEN before characters are added, I can check to see if the array already
//      includes that character, not adding the name if it already exists in the array
// 2. I need to randomize the order the answers display in. Right now the
//      correct answer is the last option every time (3.27.2023)