const quizData = [
  {
      question: "Who won the first ever Eurovision Song Contest?",
      a: "United Kingdom",
      b: "France",
      c: "Switzerland",
      d: "Spain",
      correct: "c",
  },
  {
    question: "Where will this year's competition be held?",
    a: "Lisbon",
    b: "Liverpool",
    c: "Leipzig",
    d: "Lille",
    correct: "b",
},
{
  question: "Which country has the most wins?",
  a: "United Kingdom",
  b: "Ireland",
  c: "Sweden",
  d: "Ukraine",
  correct: "b",
},
{
  question: "Which contest had the tagline 'All Aboard'?",
  a: "Lisbon 2018",
  b: "Athens 2005",
  c: "Malmo 2013",
  d: "Oslo 2010",
  correct: "a",
},
{
  question: "Which of the below acts has NOT represented their country more than once?",
  a: "Alexander Rybak",
  b: "Sunstroke Project",
  c: "Carola Häggkvist",
  d: "Barbara Pravi",
  correct: "d",
},
{
  question: "Which country first participated in 2003?",
  a: "Ukraine",
  b: "Australia",
  c: "Albania",
  d: "Croatia",
  correct: "a",
},
{
  question: "Who won the contest in 2022?",
  a: "Chanel",
  b: "Sam Ryder",
  c: "Kalush Orchestra",
  d: "Sheldon Riley",
  correct: "c",
},
{
  question: "Which of the below is a Eurovision winner?",
  a: "Cheryl Crow",
  b: "Celine Dion",
  c: "Gloria Estefan",
  d: "Kylie Minogue",
  correct: "b",
},
{
  question: "When was the first Eurovision Song Contest Held?",
  a: "1966",
  b: "1971",
  c: "1980",
  d: "1957",
  correct: "d",
},
{
  question: "Where did Sam Ryder finish last year?",
  a: "2nd place",
  b: "1st Place",
  c: "3rd Place",
  d: "5th Place",
  correct: "a",
},
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0

function loadQuiz() {
  deselectAnswers()
  const currentQuizData = quizData[currentQuiz]
  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
  answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
  let answer
  answerEls.forEach(answerEl => {
      if(answerEl.checked) {
          answer = answerEl.id
      }
  })
  return answer
}
submitBtn.addEventListener('click', () => {
  const answer = getSelected()
  if(answer) {
     if(answer === quizData[currentQuiz].correct) {
         score++
     }
     currentQuiz++
     if(currentQuiz < quizData.length) {
         loadQuiz()
     } else {
         quiz.innerHTML = `
         <h2>You scored ${score}/${quizData.length} !</h2>
        <center><button onclick="location.reload()">Try Again!</button></center>
         `
     }
  }
})

loadQuiz()

