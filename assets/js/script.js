/* Links used for reference:
https://www.sitepoint.com/simple-javascript-quiz/
https://www.geeksforgeeks.org/how-to-create-a-simple-javascript-quiz/ */

// Make an object called quizQuestions to set up the quiz
const quizQuestions = [
    {
        question: "Commonly used data types do NOT include:",
        answers: {
            1: "strings",
            2: "booleans",
            3: "alerts",
            4: "numbers"
        },
        correctAnswer: "3"
    },
    {
        question: "The condition of an if/else statement is enclosed with:",
        answers: {
            1: "quotes",
            2: "curly brackets",
            3: "parenthesis",
            4: "square brackets"
        },
        correctAnswer: "3"
    },
    {
        question: "Arrays in JavaScript can be used to store:",
        answers: {
            1: "numbers and strings",
            2: "other arrays",
            3: "booleans",
            4: "all of the above"
        },
        correctAnswer: "4"
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables:",
        answers: {
            1: "commas",
            2: "curly brackets",
            3: "quotes",
            4: "parenthesis"
        },
        correctAnswer: "3"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: {
            1: "JavaScript",
            2: "terminal/bash",
            3: "for loops",
            4: "console.log",
        },
        correctAnswer: "4"
    },
];

const start = function() {
    document.querySelector('start-quiz').addEventListener("click", quizQuestions);
}

// Select the #timer ID
var timeEl = document.getElementById("#timer");

// Countdown start
var secondsLeft = 90;

// Create a funciton for the countdown
function timerCountdown() {
    // Set interval
    var timeInterval = setInterval(function () {
        secondsLeft--;
        // Shows the timer while the user is playing the quiz
        timeEl.textContent = "Time :" + secondsLeft;
        // If statement for when the timer runs out
        if(secondsLeft === 0) {
            // Stops the countdown
            clearInterval(timeInterval);
            // Message that pops up when the timer runs out
            alert("Time's up!");
        }
        // set time in milliseconds
    }, 9000);
}