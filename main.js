const rootApiUrl = 'https://www.officeapi.dev/api';
const allCharacters = []
const incorrectOptions = []
const randomCharacter = Math.floor(Math.random()*allCharacters.length)


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
        incorrectOptions.push(randomCharacterPick)
        console.log(randomCharacterPick)
    }
    } catch (error) {
        console.log(error)
    }
}

console.log(allCharacters)


function getQuote() {
    let apiUrl = 'https://www.officeapi.dev/api/quotes/random';
    fetch(apiUrl).then(response => {
        return response.json();
    }).then(data => {
        let character=data['data']['character']['firstname'];
        let lastName=data['data']['character']['lastname'];
        let quote=data['data']['content']
        let fullName=character+" "+lastName;
        document.getElementById("quoteText").innerHTML="\""+quote+"\"";
        document.getElementById("nameOption1").innerHTML="-"+fullName;
        console.log(data)
        // The above will likely need to be a separate api call to get a different random character as option 2
        // It might make sense to have 4 different options and make it a multiple choice?? Idk
    })
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
        document.getElementById("nameOption1").innerHTML="-"+fullName;
        console.log(fullName)


    // If request or any of the above fails, error will be thrown
    } catch (error) {
        console.error(error);
    }
}

// function getName() {
//     let apiUrl = 'https://www.officeapi.dev/api/characters/random';
//     fetch(apiUrl).then(response => {
//         return response.json();
//     }).then(data => {
//         let character=data['data']['firstname'];
//         let lastName=data['data']['lastname'];
//         let fullName=character+" "+lastName;
//         document.getElementById("nameOption2").innerHTML="-"+fullName;
//         console.log(fullName)
//         // The above will likely need to be a separate api call to get a different random character as option 2
//         // It might make sense to have 4 different options and make it a multiple choice?? Idk
//     })
// }
// getName()

// onInit is calling the getCharacters function so all characters are pulled into global array
function onInit(){ 
    getCharacters()
    getQuote()
    console.log(incorrectOptions)
}

onInit()

// !!!!!!!!!!!!!!!!!!!!!!!!!!!

// 1. On page load, hit characters api to get all characters and store that in a global variable (array)
// 2. Then, hit random quote api to get a random quote
// 3. Once you have a random quote with corresponding character, grab 3 more random characters out of the characters variable (array) 
// 4. Each character will get assigned to a corresponding 'answer' option on the buttons

// 2/13/23
// I have 1. finished...I'm using characters api to get all characters and they are stored in a global variable
// I have 2. finished...previously set up the random quote api to get a random quote
// I need to make sure the 3 random characters I'm getting with the getCharacters function do not repeat...(They also cannot be the correct character, so I need to tie in the getQuote function somehow)
// 