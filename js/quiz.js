document.addEventListener("DOMContentLoaded", () => {
  const quizData = [
    {
      question: "What does HTML stand for?",
      answers: [
        { text: "HyperText Markup Language", correct: true },
        { text: "Hyperlinks and Text Markup Language", correct: false },
        { text: "Home Tool Markup Language", correct: false },
      ],
    },
    {
      question: "What does CSS stand for?",
      answers: [
        { text: "Cascading Style Sheets", correct: true },
        { text: "Computer Style Sheets", correct: false },
        { text: "Creative Style Sheets", correct: false },
      ],
    },
    {
      question: "What does JS stand for?",
      answers: [
        { text: "JavaScript", correct: true },
        { text: "JavaSource", correct: false },
        { text: "JustScript", correct: false },
      ],
    },
  ];

  let currentQuestionIndex = 0;
  let score = 0;

  const questionElement = document.getElementById("question");
  const answersElement = document.getElementById("answers");
  const nextButton = document.getElementById("next");
  const resultElement = document.getElementById("result");

  function showQuestion(question) {
    questionElement.innerText = question.question;
    answersElement.innerHTML = "";
    question.answers.forEach((answer) => {
      const li = document.createElement("li");
      li.innerText = answer.text;
      li.addEventListener("click", () => selectAnswer(answer));
      answersElement.appendChild(li);
    });
  }

  function selectAnswer(answer) {
    if (answer.correct) {
      score++;
    }
    nextButton.style.display = "block";
  }

  function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      showQuestion(quizData[currentQuestionIndex]);
      nextButton.style.display = "none";
    } else {
      showResult();
    }
  }

  function showResult() {
    questionElement.style.display = "none";
    answersElement.style.display = "none";
    nextButton.style.display = "none";
    resultElement.innerText = `You scored ${score} out of ${quizData.length}`;
  }

  nextButton.addEventListener("click", showNextQuestion);

  // Start the quiz
  showQuestion(quizData[currentQuestionIndex]);
  nextButton.style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
});
