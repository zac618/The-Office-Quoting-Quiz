import data from './quotes.json' assert { type: 'json' }

// html elements
const quoteContainer = document.getElementById("quoteContainer"); 
const answerContainer = document.getElementById("answerContainer"); 

const quote = []
const options = []
const randomIndex = Math.floor(Math.random() * data.dataJSON.length)

function getQuote() {
    quote.push(data.dataJSON[randomIndex].quote)
    console.log(quote.toString())
}

function getCorrectAnswer() {
    options.push(data.dataJSON[randomIndex].character)
    console.log(options.toString())
}

function getIncorrectOptions() {
    while(options.length < 4 ) {
        let numForOptions = Math.floor(Math.random() * data.dataJSON.length)
        let addedCharacter = data.dataJSON[numForOptions].character
        let nameExists = options.includes(addedCharacter)
        
        if (!nameExists && options.length < 4) {
            options.push(addedCharacter)
        }
    }
}

function renderQuote() {
      // create a new div element
    const createP = document.createElement("p")
      // and give it some content
    const quoteContent = document.createTextNode(quote)
      // add the text node to the newly created div
    createP.appendChild(quoteContent)
      // add the newly created element and its content into the DOM
    quoteContainer.appendChild(createP)
}

function renderAnswers() {
    for ( let i = 0 ; i < 4 ; i++ ) {
        // create a new div element
    const createP = document.createElement("p")
        // and give it some content
    const answerContent = document.createTextNode(options[i])
        // add the text node to the newly created div
    createP.appendChild(answerContent)
        // add the newly created element and its content into the DOM
    answerContainer.appendChild(createP)
    }
}

    // this function uses the Fisher-Yates algorithm to randomize the options (answers) array
function shuffleOptions() {
    for(let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i)
        const temp = options[i]
        options[i] = options[j]
        options[j] = temp
    }
}

getQuote()
getCorrectAnswer()
getIncorrectOptions()
shuffleOptions()
renderQuote()
renderAnswers()

console.log(randomIndex)
console.log(options)
console.log(quote)
