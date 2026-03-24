const questions = [
    {
        question :"which is the largest animal in world",
        answers:[
                { text : "shark", correct: false},
                { text : "Blue Whale", correct: true},
                { text : "Elephant", correct: false},
                { text : "Giraffe", correct: false},
        ]
    },
    {
      question :"which is the smallest country in world",
        answers:[
                { text : "vatican city", correct: true},
                { text : "Bhutan", correct: false},
                { text : "England", correct: false},
                { text : "Lanka", correct: false},
        ]  
    },
    {
        question :"which is the largest desert in world",
        answers:[
                { text : "kalahari", correct: false},
                { text : "gogi", correct: false},
                { text : "sahara", correct: true},
                { text : "antartica", correct: false},
        ]
    },
    {
        question :"which is the smallest continent in world",
        answers:[
                { text : "asia", correct: false},
                { text : "afria", correct: false},
                { text : "arctic", correct: false},
                { text : "australia", correct: true},
        ]
    }
];

const questionElement= document.getElementById("question");
const answerButtons= document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex =0;
let  score=0;
 function startQuiz(){
   currentQuestionIndex=0;
   score=0;
   nextButton.innerHTML="Next";
   showQuestion(); 
 }
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+" ."+currentQuestion.
    question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct; 
        }
        button.addEventListener("click",selectAnswer);
    });
 }
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
        
    }
}
function selectAnswer(e){
   const selectedBtn = e.target;
   const isCorrect = selectedBtn.dataset.correct=== "true";
   if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
   } 
   else {
    selectedBtn.classList.add("incorrect");
   }
   Array.from(answerButtons.children).forEach(button=>{
    if(button.dataset.correct=== "true"){
        button.classList.add("correct");
    }
    button.disabled= true; 
    }
   );
   nextButton.style.display="block";
}

function showScore(){
    resetState();
    questionElement.innerHTML= `you score${score} out of ${questions.length}!`;
    nextButton.innerHTML="play Again"
    nextButton.style.display="block"
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}
 

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex< questions.length){
        handleNextButton();
    }else {
        startQuiz();
    }

});


startQuiz();