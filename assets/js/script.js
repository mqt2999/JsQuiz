var questioneBoxEl = document.getElementById('questionBox')
var questionEl = document.getElementById('question')
var lastScore = document.getElementById("lastScoreLink")
var answerBoxEl = document.getElementById('answerBox')
var answerBtnEl = document.querySelectorAll('.btn')
var a1 = document.getElementById('answer1')
var a2 = document.getElementById('answer2')
var a3 = document.getElementById('answer3')
var a4 = document.getElementById('answer4')
var timeTxt = document.getElementById('timer');
var lastScoreBox = document.getElementById('lastScoreList')
var startBtn = document.getElementById('startBox')
var lst = document.getElementById("theBest")
var timeLeft = 20;
var score = 0;
var j = 0;
var clock = true;

bringHome()
lastPlayer()

//this is a object made of an array with the question and answers for the quiz and displays them when one is added to an defined variable
var questions = [{

    question: "1.what is hosting in JavaScript?",

    answers: [
        { text: "When everything on the left is assigned to the right?", correct: false },
        { text: "When a variable has another variable over for dinner", correct: false },
        { text: "when javaScript moves the declaration of a varible to the top of the scope because it was called before it was defined.", correct: true },
        { text: "When you and a friend code on the same screen", correct: false }
    ]


},
{
    question: "2.Is javascript witten static or dynamic?",
    answers: [
        { text: "Dynamic", correct: true },
        { text: "both", correct: false },
        { text: "neither", correct: false },
        { text: "none of the above", correct: false }
    ]
},
{
    question: "3.Which way is th ecorrect way to create an array?",
    answers: [
        { text: "{12345678}", correct: false },
        { text: "[gkrjfi fjkrijt 695jij]", correct: false },
        { text: "{40,55,44,32}", correct: false },
        { text: "[\"kjdfnk\",\"lkfjgldkj\",\"dflkgjlkfd\"]", correct: true }
    ]
},
{
    question: "4.How do you write \"Hello World\" in JavaScript? ",
    answers: [
        { text: "System.out.print(\"Hello World\");", correct: false },
        { text: "Document.write(\"Hello World\")", correct: true },
        { text: "\"Hello World\"", correct: false },
        { text: "(\"Hello World\");", correct: false }
    ]
},
{
    question: "5.Choose the Sting variable defined as jjo",

    answers: [
        { text: "jjo + \"hello you\" ", correct: false },
        { text: "var jjo = \" hello there\"",correct:true},
        { text: "String jjo = \"yo there\"", correct: false},
        { text: "\" yo there\" ", correct: false}
    ]

},
{
    question: " 6.How do you make a function?",
    answers: [
        { text: "function() = myFunction", correct: false },
        { text: "1 and 3 ", correct: false },
        { text: "function myFunction()", correct: true },
        { text: "3 and 1", correct: false }

    ]
}]
// this function is for checking if the answer is correct and also checking for the end of the test
answerBtnEl.forEach(item => {
    item.addEventListener('click', (event) => {

        if (j === 5 && event.target.value == 'true') {
            
            score++
            getLastStorage()
            reset()
            lastPlayer()
            clearInterval(timeLeft)
           }
        else if (j === 5 && event.target.value == 'false') {

            getLastStorage()
            reset()
            lastPlayer()
            clearInterval(timeLeft)
           
        }

        if (event.target.value == 'true' && j < 5) {
           
            j++
            score++
            getQuestion()
            answers()
        }
        else if (event.target.value == 'false' && j < 5) {
            timeLeft -= 2
            j++
            getQuestion()
            answers()
        }



    })
})
//this is a click event that is set to a function that starts the game and timer, it also changes some things on the screen after the button is presssed
document.getElementById('startGame').addEventListener('click', function startGame() {

    lastScoreBox.setAttribute("id", "hide")
    startBtn.setAttribute("id", "hide")
    answerBoxEl.classList.remove('hide')
    questioneBoxEl.classList.remove('hide')
    timeTxt.classList.remove('hide')
    timeTxt.classList.add('timer')
    console.log("whaaaaahhhhhtttt")
    getQuestion()
    answers()
    timer()
})
// this function displays the list of answers you can choose from with weather its true or false 
function answers() {

    a1.innerHTML = questions[j].answers[0].text
    a2.innerHTML = questions[j].answers[1].text
    a3.innerHTML = questions[j].answers[2].text
    a4.innerHTML = questions[j].answers[3].text
    
    a1.value = questions[j].answers[0].correct
    a2.value = questions[j].answers[1].correct
    a3.value = questions[j].answers[2].correct
    a4.value = questions[j].answers[3].correct
}
//this function displays the question 
function getQuestion() {
    questionEl.innerHTML = questions[j].question
}
// this function is for the timer and it also has a function the pomts the use when the time is up
function timer() {

    setInterval(function () {
        if (timeLeft == 0) {

            timeTxt.setAttribute('style', 'display:none')
            clearInterval(timeLeft)
            getLastStorage()
            reset()
        }
        timeLeft -= 1
        timeTxt.textContent = timeLeft
    }, 1000);
}
//this fnction gets the last plyer who took the quiz initials and score and saves it to the local storage 
function getLastStorage(){

    var ask = prompt("what are your initials?");

    localStorage.setItem("highSco", JSON.stringify([ask,score]))
 }
 //this function is getting the intial and score of the last player who played 
function lastPlayer(){

    var lastpList= JSON.parse(localStorage.getItem("highSco"))

    lst.textContent =" Player: "+ lastpList[0] + " Score: " + lastpList[1];
}
//this function holds a click event that rests the page to the starting screen when pressed  
function bringHome() {

    lastScore.addEventListener("click", function () {

        startBtn.setAttribute("id", "startBox")
        lastScoreBox.setAttribute("id", "lastScoreList")
        answerBoxEl.classList.add('hide')
        questioneBoxEl.classList.add('hide')
        timeTxt.classList.add('hide')
        j = 0
        q = 0
        timeLeft=0

    })

}
// this function resets eveything to the start screen 
function reset(){

    startBtn.setAttribute("id", "startBox")
    lastScoreBox.setAttribute("id", "lastScoreList")
    answerBoxEl.classList.add('hide')
    questioneBoxEl.classList.add('hide')
    timeTxt.classList.add('hide')
    j = 0
}