const quizData = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Tool Multi Language",
      "None of these"
    ],
    correct: 0
  },
  {
    question: "Which language is used for styling?",
    options: ["HTML", "CSS", "Python", "Java"],
    correct: 1
  },
  {
    question: "Which is a JavaScript framework?",
    options: ["Django", "React", "Flask", "Laravel"],
    correct: 1
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEls = document.querySelectorAll("input[name='answer']");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
  let q = quizData[currentQuestion];
  questionEl.textContent = q.question;

  document.getElementById("opt0").textContent = q.options[0];
  document.getElementById("opt1").textContent = q.options[1];
  document.getElementById("opt2").textContent = q.options[2];
  document.getElementById("opt3").textContent = q.options[3];

  optionsEls.forEach(opt => opt.checked = false);
}

function getSelected() {
  let answer;
  optionsEls.forEach(opt => {
    if (opt.checked) answer = opt.value;
  });
  return answer;
}

nextBtn.addEventListener("click", () => {
  let selected = getSelected();

  if (selected == undefined) {
    alert("Please select an answer!");
    return;
  }

  if (selected == quizData[currentQuestion].correct) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");

  document.getElementById("score").textContent =
    `You scored ${score} out of ${quizData.length}`;

  let message = "";
  if (score === quizData.length) {
    message = "Excellent!";
  } else if (score >= 2) {
    message = "Good Job!";
  } else {
    message = "Try Again!";
  }

  document.getElementById("message").textContent = message;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  document.getElementById("quiz").classList.remove("hidden");
  document.getElementById("result").classList.add("hidden");
  loadQuestion();
}

loadQuestion();