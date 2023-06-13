// import data from './quotes.json' 

window.onload = async function () {
  const response = await fetch("./quotes.json");
  const data = await response.json();
  // Your code



// html elements 
const scoreContainer = document.getElementById("scoreContainer"); 
const quoteContainer = document.getElementById("quoteContainer"); 
const answerContainer = document.getElementById("answerContainer"); 

let currentQuote;
let currentOptions;
let correctAnswer;
let questions = 0;
let currentScore = 0;
let randomIndex = Math.floor(Math.random() * data.dataJSON.length)
// This line is just setting the submit button as a global variable
let selectedAnswer
  // The below line is just setting the submit button as a global variable
const answerButtons = document.getElementsByClassName("answersClass");



    // The setup function is where we call all of the functions that we need to run
function setup() {



    // Displaying the score on the page
    renderScore();

      // Getting quote to display from json
  currentQuote = getQuote();
    renderQuote();

      // Getting character options to display from json
      // getOptions also handles randomizing the options
  currentOptions = getOptions();
    buildOptionButtons();

  getCorrectAnswer();
    // console.log(correctAnswer)

  submittingAnswer();

}

function getNewRandomIndex() {
  randomIndex = Math.floor(Math.random() * data.dataJSON.length)
}

    // getQuote is where we get the quote from the json to be used in the game
function getQuote() {
    return data.dataJSON[randomIndex].quote
}

    // getOptions is where we get the correct answer and the incorrect answers
    // and randomize them
function getOptions() {
  const o = [data.dataJSON[randomIndex].character];
  while (o.length < 4) {
    let numForOptions = Math.floor(Math.random() * data.dataJSON.length)
    let newCharacter = data.dataJSON[numForOptions].character
    let nameExists = o.includes(newCharacter)

    if (!nameExists) {
      o.push(newCharacter);
    }
  }
  function shuffleArray(o) {
    for (var i = o.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = o[i];
        o[i] = o[j];
        o[j] = temp;
    }
}
  shuffleArray(o);
  return o;
}

function renderScore() {
      // create a new p element
    const createScoreP = document.createElement("p")
      // and give it some content
    const scoreContent = document.createTextNode("Score: " + currentScore)
      // add the text node to the newly created p element
    createScoreP.appendChild(scoreContent)
      // add the newly created element and its content into the DOM
    scoreContainer.appendChild(createScoreP)
}

function clear() {
  scoreContainer.innerHTML = "";
  quoteContainer.innerHTML = "";
  answerContainer.innerHTML = "";
}

function questionsAnswered() {
  questions ++
}

    // renderQuote is where we display the quote on the page
function renderQuote() {
        // create a new p element
      const createP = document.createElement("p")
        // and give it some content
      const quoteContent = document.createTextNode(currentQuote)
        // add the text node to the newly created p element
      createP.appendChild(quoteContent)
        // add the newly created element and its content into the DOM
      quoteContainer.appendChild(createP)
}

    // buildOptionButtons is where we display the options on the page
function buildOptionButtons() {
    for ( let i = 0 ; i < 4 ; i++ ) {
        // create a new button element
    const createButton = document.createElement("button")
        // and give it some content
    const answerContent = document.createTextNode(currentOptions[i])
        // add a class to the newly created button
    createButton.classList.add("answersClass");
        // add the text node to the newly created div
    createButton.appendChild(answerContent)
        // add the newly created element and its content into the DOM
    answerContainer.appendChild(createButton)
    }
}

function getCorrectAnswer() {
    correctAnswer = (data.dataJSON[randomIndex].character)
}


    // The submittingAnswer function is where the magic happens. It is where we
    // check to see if an answer has been selected, and if so, if it is correct.
function submittingAnswer() {
  for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].addEventListener("click", function() {
      // Remove the "selected" class from all buttons when a new button is clicked
      for (let j = 0; j < answerButtons.length; j++) {
        answerButtons[j].classList.remove("selected");
      }
      // Add the "selected" class to the clicked button
      this.classList.add("selected");
    });
  }

  submitButton.addEventListener("click", function() {

      // This is setting the selectedAnswer variable to null so it is defined
    let selectedAnswer = null;
      // The line below is looping through the answer buttons to see if any of
      // them have the "selected" class, because if one does, it is our selected answer.
    for (let i = 0; i < answerButtons.length; i++) {
      if (answerButtons[i].classList.contains("selected")) {
        selectedAnswer = answerButtons[i].textContent;
        break;
      }
    }

    //   // This line is just logging the selected answer to the console
    // console.log("Selected answer:", selectedAnswer);

      // This line is checking to see if the selectedAnswer variable is defined or not
      // if it is, our action will be performed, if not, we will log a message to the console
    if (selectedAnswer) {
        // This line does not use the "===" operator because
        // the selectedAnswer is a string and the correctAnswer is an array       
      if (selectedAnswer == correctAnswer) {
        // console.log("correct")
        clear()
        currentScore++
        questionsAnswered()
        // console.log(questions)
        nextQuote()
        // console.log(currentScore)
      } else {
        // console.log("incorrect")
        clear()
        questionsAnswered()
        // console.log("questions answered: " + questions)
        nextQuote()
    }
    } else {
      // console.log("questions answered: " + questions)
    }
  });
  
}

function reset() {
  questions = 0;
  currentScore = 0;
  randomIndex = Math.floor(Math.random() * data.dataJSON.length)
}


function nextQuote() {
  if (questions < 5) {
  getNewRandomIndex()
  setup()
  } else {
    console.log("game over")
    window.alert("You got " + currentScore + " out of 5 correct. Press OK to play again.")
    reset()
    setup()
  }
}

// function getScore() {
//   return currentScore;
// }
// console.log('nothing')


setup()

}