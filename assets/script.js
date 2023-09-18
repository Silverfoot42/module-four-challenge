var startButton = document.querySelector(".start-button");
var question = document.querySelector(".question");
var timerElement = document.querySelector(".timer");
var result = document.querySelector(".result");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var scoreCount = document.querySelector(".score");
var questions = ["What is another name for reserved words that are part of the syntax in th programming language?", "What is the name given to entities like variables, functions, and classes called?", "What are used to perform specific mathematical and logical computations on operands?", "An _______ is a reference, value, or a group of references and values combined with operators, which result in a single value.", "What is a group of words, numbers, and operators that do a task called?"]
var answers = ["Keywords", "Identifiers", "Operators", "Expression", "Statement"]
var wrongAnswers = ["Taco", "Burrito", "Crunchwrap", "Cheesy Gordita Crunch", "Nachos Bellgrande", "Chalupa", "Quesarito", "Grilled Cheese Burrito", "Nacho Fries", "Cheesy Fiesta Potatoes", "Cinnamon Twists", "Doritos Locos Taco", "Baja Blast", "Mexican Pizza", "Volcano Burrito"]
var x = 0;
var timer;
var timerCount;
var answerButtons = [button1, button2, button3, button4];
var score = 0;

button1.style.display = "none";
button2.style.display = "none";
button3.style.display = "none";
button4.style.display = "none";
scoreCount.style.display = "none";

var initials = prompt("Enter your initials: ");

function startquiz() {
    button1.style.display = "inline-block";
    button2.style.display = "inline-block";
    button3.style.display = "inline-block";
    button4.style.display = "inline-block";
    startButton.remove();
    renderQuestion();
    startTimer();
}

function renderQuestion() {
    if (x < questions.length) {

        question.textContent = questions[x];

        var randomAnsButton = Math.floor(Math.random() * 4);
        
        answerButtons[randomAnsButton].textContent = answers[x];

        var correctAnswer = answers[x];

        for (var n = 0; n < 4; n++) {
            if (n === randomAnsButton) {

            } else {
                var wrongAnsButtons = Math.floor(Math.random() * wrongAnswers.length);
                answerButtons[n].textContent = wrongAnswers[wrongAnsButtons];
            }
        }

        
        x++;
    } else {
        endQuiz()
    }
}
/*lines 63-77 were made with help from the ai learning assistant*/
for (var i = 0; i < answerButtons.length; i++) {
    answerButtons[i].addEventListener("click", function(event) {
        var selectedAnswer = event.target.textContent;
        var correctAnswer = answers[x-1];
        if (selectedAnswer === correctAnswer) {
            result.textContent = "Correct";
            score = score + 20
        } else {
            result.textContent = "Incorrect";
            timerCount = timerCount - 5;
        }
        renderQuestion();
    });
}


function startTimer() {
    timerCount = 60;
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount === 0){
            clearTimeout(timer);
            endQuiz()
        }
    }, 1000);
}

function endQuiz(){
    question.textContent = "Thanks for taking the Quiz " + initials +"!";
    button1.remove();
    button2.remove();
    button3.remove();
    button4.remove();
    clearTimeout(timer);
    timerElement.textContent = "";
    result.textContent = "";
    scoreCount.style.display = "inline-block";
    scoreCount.textContent = "Your Score is: " + score;
    
}


startButton.addEventListener("click", startquiz);