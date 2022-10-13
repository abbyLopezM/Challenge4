var questions = [
    {
        question: 'Commonly used data types DO NOT include?',
        answers: ['string','boolean','alerts','numbers'],
        answer:'numbers'
    },
    {
        question: 'The condition enclosed in an if/else statement is enclosed with ____',
        answers: ['parenthesis','curly brackets','quotes','square brackets'],
        answer:"parenthesis"
    },
    {
        question: 'Arrays in JavaScript can be used to store',
        answers: ["numbers and strings", "boolean","other arrays", "all the above"],
        answer:"all the above"
    },
    {
        question: 'A very useful tool to use during developing and debugging for printing content to the debugger is ',
        answers: ['JavaScript', 'terminal/bash','for loops', 'console.log'],
        answer:'console.log'
    },
    {
        question: 'String values must be enclosed within __ when being assigned to variables',
        answers: ['commas','curly brackets','quotes','brackets'],
        answer:"quotes"
    }
]

var buttonEL = document.querySelector('#game-button');
var quizEL = document.querySelector('#quiz-question');
var choicesEL = document.querySelector('#quiz-choices');
var confirmEl = document.querySelector("#confirm");


var currentQuestionIndex = 0;
var correctCount = 0;

function generateQuestion(){
    quizEL.innerHTML = "";
    choicesEL.innerHTML = "";

    if(currentQuestionIndex>= questions.length){
        var h1Element = document.createElement('h1');
        h1Element.textContent = "All Done! \n\n Final Score: " + correctCount;
        quizEL.append(h1Element);
        return;
    }

    var currentQuestion = questions[currentQuestionIndex]
    var h1Element = document.createElement('h1');
    h1Element.textContent = currentQuestion.question;
    console.log(h1Element);
    quizEL.append(h1Element);

    for(var i = 0; i<currentQuestion.answers.length; i++){
        var liElement = document.createElement('li');
        liElement.textContent = currentQuestion.answers[i];
        choicesEL.append(liElement);
    }
}

function checkAnswer(event){
    console.log(questions[currentQuestionIndex].answer)
    if(questions[currentQuestionIndex].answer == event.target.innerText){
        confirmEl.textContent ="";
        confirmEl.textContent = "Correct";
        correctCount ++;
    }
    else{
        confirmEl.textContent ="";
        confirmEl.textContent = "Incorrect";
    }
    currentQuestionIndex++;
    generateQuestion();
}

buttonEL.addEventListener('click', generateQuestion)
choicesEL.addEventListener('click',checkAnswer)
