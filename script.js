const questions = [
    {
        question :"which is the largest animal in world",
        answers:[
                { text : "shark", correct: false},
                { text : "Blue Whale", correct: ture},
                { text : "Elephant", correct: false},
                { text : "Giraffe", correct: false},
        ]
    },
    {
      question :"which is the smallest country in world",
        answers:[
                { text : "vatican city", correct: ture},
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
                { text : "sahara", correct: ture},
                { text : "antartica", correct: false},
        ]
    },
    {
        question :"which is the smallest continent in world",
        answers:[
                { text : "asia", correct: false},
                { text : "afria", correct: false},
                { text : "arctic", correct: false},
                { text : "australia", correct: ture},
        ]
    }
];

const questionElement= document.getElementById("question");
const answerButton= document.getElementById("answer-buttons");
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
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+" ."+currentQuestion.
    question;
 }