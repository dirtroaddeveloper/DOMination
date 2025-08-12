const quizData = [
    {
        question: "Which array method adds an element to the end of an array?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        answer: 0
    },
    {
        question: "Which array method adds an element to the end of an array?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        answer: 0
    },
    {
        question: "Which array method adds an element to the end of an array?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        answer: 0
    },
    {
        question: "Which array method adds an element to the end of an array?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        answer: 0
    },
];


function loadQuestion(currentQuestion) {

    const optionsContainer = document.getElementById("options-container");
    const questionContainer = document.getElementById("question-container");
    questionContainer.textContent = currentQuestion.question;
    currentQuestion.options.forEach((option, index) => {
        const optionButton = document.createElement('button');
        optionButton.textContent = option;
        optionButton.setAttribute("id", "btn");
        optionButton.addEventListener('click', () => selectOption(currentQuestion, index));
        optionsContainer.appendChild(optionButton);
    });


}

function selectOption(question, index) {
    console.log(question.answer + " and " + index)
    
    if(question.answer == index) {
        
    } else {
        console.log("lost");
    }
    
}


function playGame() {
    const nextBtn = document.getElementById("next-button");
    nextBtn.disabled = true;
    loadQuestion(quizData[0]);
}


playGame();