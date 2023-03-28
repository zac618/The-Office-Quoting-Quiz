const rootApiUrl = 'https://www.officeapi.dev/api';
const allCharacters = []
const incorrectOptions = []
const randomCharacter = Math.floor(Math.random()*allCharacters.length)
const possibleAnswers = []
const shuffleAnswers = possibleAnswers.sort();

const buttons = document.querySelectorAll('.answer-field');

// possibleAnswers.sort(() => Math.random() - 0.5);

buttons.forEach((button, index) => {
    button.textContent = possibleAnswers[index];
})


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
        const randomCharacterIndex = Math.floor(Math.random()*allCharacters.length)
        const randomCharacterPick = allCharacters[randomCharacterIndex]
        possibleAnswers.push(randomCharacterPick)
        // Here I need each iteration to add an option for the answers
    }

    } catch (error) {
        console.log(error)
    }
}

// getQuote2()

// Minor Ty Refactor
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
        // document.getElementById("nameOption1").innerHTML="-"+possibleAnswers[0];
        // document.getElementById("nameOption2").innerHTML="-"+possibleAnswers[1];
        // document.getElementById("nameOption3").innerHTML="-"+possibleAnswers[2];
        // document.getElementById("nameOption4").innerHTML="-"+possibleAnswers[3];

    // If request or any of the above fails, error will be thrown
    } catch (error) {
        console.error(error);
    }
}

// onInit is calling the getCharacters function so all characters are pulled into global array
function onInit(){ 
    getCharacters()
    getQuote2()
    console.log(possibleAnswers)
    console.log(shuffleAnswers)

}

onInit()

// !!!!!!!!!!!!!!!!!!!!!!!!!!!

// 1. I need to create a check that doesn't add a character to the incorrect
//      answers option if the character is the correct option.
// 2. I need to randomize the order the answers display in. Right now the
//      correct answer is the first answer every time.