
const quizData = [
    [
        {
            question: "Which array method adds an element to the end of an array?",
            options: ["push()", "pop()", "shift()", "unshift()"],
            answer: 0,
            
        },
        {
            question: "What ?",
            options: ["yes()", "no()", "maybe()", "wtf()"],
            answer: 1
        },
        {
            question: "Which array methods array?",
            options: ["tree", "dog", "shiftcat", "bat"],
            answer: 0
        },
        {
            question: "last question?",
            options: ["um yeah", "i mean no", "pfffffft", "this quiz sucks"],
            answer: 0
        },
    ],
    {
        score: 0
    }

]

// Loads the question into the DOM
function loadQuestion(currentQuestion) {
    const nextBtn = document.getElementById("next-button");
    nextBtn.disabled = true
    
    const optionsContainer = document.getElementById("options-container");
    const questionContainer = document.getElementById("question-container");

    // Checks to make sure the current question exists
    if(currentQuestion) {

        questionContainer.textContent = currentQuestion.question;
            currentQuestion.options.forEach((option, index) => {
            const optionButton = document.createElement('button');
            optionButton.textContent = option;
            optionButton.setAttribute("class", "btn");
            optionButton.addEventListener('click', (event) => selectOption(currentQuestion, index, event));
            optionsContainer.appendChild(optionButton);
        });

    // If the current question does not exist, it calls the restart game method
    } else {

        restartGame();
    }
    
    
}


// Restart the game method reloads the page to start over and clear data
function restartGame() {
    const quizMain = document.querySelector(".quiz");
    const scoreContainer = document.getElementById("score-container");
    const restartButton = document.getElementById("restart-button");
    const scoreElem = document.getElementById("score");
    quizMain.classList.add("hidden");
    scoreContainer.classList.remove("hidden");
    scoreElem.textContent = quizData[1].score;
    restartButton.addEventListener("click", () => {
        location.reload();
    });

}

// Selects the option and checks to see if it was correct or incorrect
function selectOption(question, index, event) {
    const options = document.querySelectorAll(".btn");
    
    if(question.answer == index) {
        quizData[1].score += 1;
        console.log(question.answer)
        event.target.style.backgroundColor = "green";
        nextButtonHandler();
        disableAll();
    } else {
        options[question.answer].style.backgroundColor = "green";
        event.target.style.backgroundColor = "red";
        nextButtonHandler();
        disableAll();
    }
    
}

// Disables all of the options once an option is selected
function disableAll() {
    let optionButtons = document.querySelectorAll(".btn");
    
    optionButtons.forEach((button) => {
            
            button.disabled = true;
            
    });
}

// Handles the check whether the next button is disabled or not
function nextButtonHandler() {
    const nextBtn = document.getElementById("next-button");
    
    nextBtn.disabled = true ? nextBtn.disabled = false : nextBtn.disabled = true;
}

// The playgame function that calls the correct functions to run the game
function playGame() {
    const nextBtn = document.getElementById("next-button");
    let index = 0;
    loadQuestion(quizData[0][index]);
    console.log(index + " and " + quizData.length)
    nextBtn.addEventListener("click", () => {
        const optionsContainer = document.getElementById("options-container");
        optionsContainer.textContent = "";
        if(index < quizData[0].length) {
            index += 1;
            loadQuestion(quizData[0][index]);
            console.log(index + " and fucking " + quizData[0].length)
        } else if(index == quizData[0].length) {
            optionsContainer.textContent = "GAME OVER"
            console.log("wtf")
            
        }
        console.log(index + " and " + quizData[0].length)
    });

}

// Calls the playgame function
playGame();