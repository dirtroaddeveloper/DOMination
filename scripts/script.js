
const quizData = [
    [
        {
            question: "Which array method adds an element to the end of an array?",
            options: ["push()", "pop()", "shift()", "unshift()"],
            answer: 0,
            
        },
        {
            question: "Is Js great?",
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


function loadQuestion(currentQuestion) {
    const nextBtn = document.getElementById("next-button");
    nextBtn.disabled = true
    
    const optionsContainer = document.getElementById("options-container");
    const questionContainer = document.getElementById("question-container");

    if(currentQuestion) {

        questionContainer.textContent = currentQuestion.question;
            currentQuestion.options.forEach((option, index) => {
            const optionButton = document.createElement('button');
            optionButton.textContent = option;
            optionButton.setAttribute("class", "btn");
            optionButton.addEventListener('click', () => selectOption(currentQuestion, index));
            optionsContainer.appendChild(optionButton);
        });

    } else {

        restartGame();
    }
    
    


}

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

function selectOption(question, index) {
    console.log(question)
    if(question.answer == index) {
        quizData[1].score += 1;
        
        nextButtonHandler();
        disableAll();
    } else {
        console.log("Wrong")
        nextButtonHandler();
        disableAll();
    }
    
}

function colorButton() {

}




function disableAll() {
    let optionButtons = document.querySelectorAll(".btn");
    
    optionButtons.forEach((button) => {
            
            button.disabled = true;
            
            
        
    });
}

function nextButtonHandler() {
    const nextBtn = document.getElementById("next-button");
    
    nextBtn.disabled = true ? nextBtn.disabled = false : nextBtn.disabled = true;
}

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
        } else if(index == quizData[0].length) {
            optionsContainer.textContent = "GAME OVER"
            return;
        }
        console.log(index + " and " + quizData[0].length)
    });

}


playGame();