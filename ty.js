import data from './quotes.json' assert { type: 'json' }

// html elements
const quoteContainer = document.getElementById("quoteContainer"); 
const answerContainer = document.getElementById("answerContainer"); 

// const quote = []
// const options = []
// const correctAnswer = []

// // This line is just setting the submit button as a global variable
// let selectedAnswer

// function getCorrectAnswer() {
//     options.push(data.dataJSON[randomIndex].character)
//     console.log(options.toString())
//     correctAnswer.push(data.dataJSON[randomIndex].character)
// }

// function getIncorrectOptions() {
//     while(options.length < 4 ) {
//         let numForOptions = Math.floor(Math.random() * data.dataJSON.length)
//         let addedCharacter = data.dataJSON[numForOptions].character
//         let nameExists = options.includes(addedCharacter)
        
//         if (!nameExists && options.length < 4) {
//             options.push(addedCharacter)
//         }
//     }
// }

// function renderQuote() {
//       // create a new div element
//     const createP = document.createElement("p")
//       // and give it some content
//     const quoteContent = document.createTextNode(quote)
//       // add the text node to the newly created div
//     createP.appendChild(quoteContent)
//       // add the newly created element and its content into the DOM
//     quoteContainer.appendChild(createP)
// }

// function renderAnswers() {
//     for ( let i = 0 ; i < 4 ; i++ ) {
//         // create a new button element
//     const createButton = document.createElement("button")
//         // and give it some content
//     const answerContent = document.createTextNode(options[i])
//         // add a class to the newly created button
//     createButton.classList.add("answersClass");
//         // add the text node to the newly created div
//     createButton.appendChild(answerContent)
//         // add the newly created element and its content into the DOM
//     answerContainer.appendChild(createButton)
//     }
// }

//     // this function uses the Fisher-Yates algorithm to randomize the options (answers) array
// function shuffleOptions() {
//     for(let i = options.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * i)
//         const temp = options[i]
//         options[i] = options[j]
//         options[j] = temp
//     }
// }

//   // This line is just setting the answer buttons as a global variable
// const answerButtons = document.getElementsByClassName("answersClass");


//   // The submittingAnswer function is where the magic happens. It is where we
//   // check to see if an answer has been selected, and if so, if it is correct.
// function submittingAnswer() {
//   for (let i = 0; i < answerButtons.length; i++) {
//     answerButtons[i].addEventListener("click", function() {
//       // Remove the "selected" class from all buttons when a new button is clicked
//       for (let j = 0; j < answerButtons.length; j++) {
//         answerButtons[j].classList.remove("selected");
//       }
//       // Add the "selected" class to the clicked button
//       this.classList.add("selected");
//     });
//   }

//   submitButton.addEventListener("click", function() {

//       // This is setting the selectedAnswer variable to null so it is defined
//     let selectedAnswer = null;
//       // The line below is looping through the answer buttons to see if any of
//       // them have the "selected" class, because if one does, it is our selected answer.
//     for (let i = 0; i < answerButtons.length; i++) {
//       if (answerButtons[i].classList.contains("selected")) {
//         selectedAnswer = answerButtons[i].textContent;
//         break;
//       }
//     }

//       // This line is obviously just logging the selected answer to the console
//     console.log("Selected answer:", selectedAnswer);

//       // This line is checking to see if the selectedAnswer variable is defined or not
//       // if it is, our action will be performed, if not, we will log a message to the console
//     if (selectedAnswer) {
//         // This line does not use the "===" operator because
//         // the selectedAnswer is a string and the correctAnswer is an array       
//       if (selectedAnswer == correctAnswer) {
//         console.log("correct")
//       } else {
//         console.log("incorrect")
//     }

//     } else {
//       console.log("Please select an answer.");
//     }
//   });
// }


// getQuote()
// getCorrectAnswer()
// console.log("correct answer above this line")
// getIncorrectOptions()
// shuffleOptions()
// renderQuote()
// renderAnswers()
// submittingAnswer()


// console.log(randomIndex)
// console.log(options)
// console.log(quote)

// console.log(correctAnswer[0])

/********
 * TY SETUP
 */

let currentQuote;
let currentOptions = []
let currentAnswer;
function setup() {
    // Get initial quote from json
    currentQuote = getQuote()
    // Generate options from quote + randoms
    currentOptions = getOptions()

    // Generate answer buttons for options
    const optionButtonElements = currentOptions.map((option) => {
        return buildOptionButton(option);
    });

    // Add options to HTML
    answerContainer.appendChild(optionButtonElements);

    console.log('Current Quote Object:', currentQuote);
    console.log('Current Answers Array:', currentOptions);
}

function getOptions() {
    const o = [currentQuote.character]
    while (o.length < 4) {
        let numForOptions = Math.floor(Math.random() * data.dataJSON.length)
        let newCharacter = data.dataJSON[numForOptions].character
        let nameExists = o.includes(newCharacter)
        
        if (!nameExists) {
            o.push(newCharacter)
        }
    }
    return o;
}

// Build and return button element
function buildOptionButton(option) {
    const createButton = document.createElement("button")
        // and give it some content
    const answerContent = document.createTextNode(option)
        // add a class to the newly created button
    createButton.classList.add("answersClass");
        // add the text node to the newly created div
    createButton.appendChild(answerContent)

    createButton.addEventListener('click', () => console.log('Clicked', option))
        // add the newly created element and its content into the DOM
    
    return createButton;
}


function getQuote() {
    const randomIndex = Math.floor(Math.random() * data.dataJSON.length)
    return data.dataJSON[randomIndex]
}

function handleSubmitButtonPressed(selectedAnswer) {

}

setup();