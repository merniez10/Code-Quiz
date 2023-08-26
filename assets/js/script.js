

var startBtn = document.querySelector("#start-game");

var introDiv = document.querySelector(".intro");
var questionDiv = document.querySelector(".question");
var outroDiv = document.querySelector(".outro");

var questionNum = document.querySelector(".question-number");
var questionText = document.querySelector(".question-text");
var choiceLi1 = document.querySelector(".choice-1");
var choiceLi2 = document.querySelector(".choice-2");
var choiceLi3 = document.querySelector(".choice-3");
var choiceLi4 = document.querySelector(".choice-4");

// Get correct choice of first question:
// questions[0].correctChoice

var counter = 0; //0=>1=>2=>3
var questions = [
    {
        questionText: "What language affects styling on a webpage?",
        choice1:"CSS",
        choice2:"HTML",
        choice3:"Javascript",
        choice4:"C++",
        correctChoice: 1
    },
    {
        questionText: "What language is often used in data science?",
        choice1:"Java",
        choice2:"Python",
        choice3:"Javascript",
        choice4:"C++",
        correctChoice: 2
    },
    {
        questionText: "Commonly used data types do NOT include:",
        choice1:"booleans",
        choice2:"alerts",
        choice3:"numbers",
        choice4:"strings",
        correctChoice: 1
    },
    {
        questionText: "String values are enclosed within:",
        choice1:"Semi-Colons",
        choice2:"Paranthesis",
        choice3:"Quotes",
        choice4:"Commas",
        correctChoice: 3
    },
    {
        questionText: "Arrays in JavaScript can be used to store:",
        choice1:"Numbers and strings",
        choice2:"Booleans",
        choice3:"Other Arrays",
        choice4:"All of the above",
        correctChoice: 4
    },
]

// Click event listenen
// el.addEventListener("click", functionToDoThings)

// Add or remove classes
// <div class="section red big hidden"></div>
// el.classList.add("hidden")
// el.classList.remove("hidden")

// jQuery
// $("selector").removeClass("hidden")

// --

//function showQuestionDiv() {
    // hide intro and show question div
//}
//startBtn.addEventListener("click", showQuestionDiv);
//btn2Btn.addEventListener("click", showQuestionDiv);


// --

function showQuestion() {
    var i = counter;
    if(counter===questions.length) {
        questionDiv.classList.add("hidden") 
        outroDiv.classList.remove("hidden")
        return;
    }
    questionNum.textContent = i+1;
    questionText.textContent = questions[i].questionText
    choiceLi1.textContent = questions[i].choice1
    choiceLi2.textContent = questions[i].choice2
    choiceLi3.textContent = questions[i].choice3
    choiceLi4.textContent = questions[i].choice4

    counter++;
}

function chosenAnswer(indexChosen) {
    if(indexChosen===questions[counter-1].correctChoice) { // 1===1? or 1===2?
        alert("You're correct!")
        showQuestion();
    } else {
        alert("You're wrong!")
        showQuestion();
    }
}

choiceLi1.addEventListener("click", function() { 
    chosenAnswer(1);
})

choiceLi2.addEventListener("click", function() { 
    chosenAnswer(2);
})

choiceLi3.addEventListener("click", function() { 
    chosenAnswer(3);
})

choiceLi4.addEventListener("click", function() { 
    chosenAnswer(4);
})

startBtn.addEventListener("click", function() {
    // hide intro and show question div
    introDiv.classList.add("hidden")

    showQuestion();

    questionDiv.classList.remove("hidden")
})