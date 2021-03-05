var questions = [{

    question: "what is hosting in JavaScript?",

    answers: [
        { text: "When everything on the left is assigned to the right?", correct: false },
        { text: "When a variable has another variable over for dinner", correct: false },
        { text: "when javaScript moves the declaration of a varible to the top of the scope because it was called before it was defined.", correct: true },
        { text: "When you and a friend code on the same screen", correct: false }
    ]


},
{
    question: "Is javascript witten static or dynamic?",
    answers: [
        { text: "Dynamic", correct: true },
        { text: "both", correct: false },
        { text: "neither", correct: false },
        { text: "none of the above", correct: false }
    ]
}]

var questioneBoxEl = document.getElementById('questionBox')
var questionEl = document.getElementById('question')
var highScoreBtn = document.getElementById("highScoreLink")
var answerBoxEl = document.getElementById('answerBox')
var answerBtnEl = document.querySelectorAll('.btn')
var a1 = document.getElementById('answer1')
var a2 = document.getElementById('answer2')
var a3 = document.getElementById('answer3')
var a4 = document.getElementById('answer4')
var timeTxt = document.getElementById('timer');
var highScoreBox = document.getElementById('highScoreList')
var startBtn = document.getElementById('startBox')
var timeLeft=3;
var score = 6;
var q=0;




document.getElementById('startGame').addEventListener('click',function startGame() {

    highScoreBox.setAttribute("id","hide")
    startBtn.setAttribute("id","hide")
    answerBoxEl.classList.remove('hide')
    questioneBoxEl.classList.remove('hide')
    timeTxt.classList.remove('hide')
    console.log("whaaaaahhhhhtttt")
    
    getQuestion()

    //hide the start button and show the quiz qestions

    selectAnswers(q)

    boxValue()

    // timer()

    change()

})



answerBtnEl.forEach(item => {
    item.addEventListener('click', () => {
      
        boxValue()
    })
  })

function boxValue() {

a1.value = questions[q].answers[0].correct
a2.value = questions[q].answers[1].correct
a3.value = questions[q].answers[2].correct
a4.value = questions[q].answers[3].correct



}

function getQuestion(question) {

    questionEl.innerHTML = questions[q].question

}
function selectAnswers(g) {

    a1.innerHTML = questions[g].answers[0].text
    a2.innerHTML = questions[g].answers[1].text
    a3.innerHTML = questions[g].answers[2].text
    a4.innerHTML = questions[g].answers[3].text

}

function timer(){

    setInterval( function () {
        if(timeLeft == 0 ){ 
            
            timeTxt.setAttribute('style','display:none')
            clearInterval(timeLeft =0)
            askForLet()
            localStorage.setItem('score',score)
        }
            timeLeft-=1
        timeTxt.textContent = timeLeft
    },500);
}

function askForLet(){
    var ask = prompt("what are your initials?");

    localStorage.setItem('personIntial',ask)
}

highScoreBtn.addEventListener("click",function (){
    
    highScoreBox.setAttribute("id","highScoreList")
    startBtn.setAttribute("id","startbox")
    answerBoxEl.classList.add('hide')
    questioneBoxEl.classList.add('hide')
    timeTxt.classList.add('hide')

})



