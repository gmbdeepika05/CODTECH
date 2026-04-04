const quizData = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyper Tool Multi Language", "None"],
        correct: 0
    },
    {
        question: "Which is used for styling?",
        options: ["HTML", "CSS", "Python", "Java"],
        correct: 1
    },
    {
        question: "Which is a JavaScript framework?",
        options: ["Django", "Flask", "React", "Laravel"],
        correct: 2
    },
    {
        question: "Which tag is used for links?",
        options: ["<a>", "<p>", "<h1>", "<div>"],
        correct: 0
    },
    {
        question: "Which is backend language?",
        options: ["CSS", "HTML", "JavaScript", "Python"],
        correct: 3
    },
    {
        question: "Which symbol is used for id in CSS?",
        options: [".", "#", "*", "&"],
        correct: 1
    },
    {
        question: "Which company developed JavaScript?",
        options: ["Microsoft", "Netscape", "Google", "Apple"],
        correct: 1
    }
];

let currentIndex = 0;
let score = 0;
let answered = false;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");
const progressEl = document.getElementById("progress");

function loadQuestion() {
    answered = false;
    nextBtn.style.display = "none";
    feedbackEl.innerText = "";

    let q = quizData[currentIndex];

    progressEl.innerText = `Question ${currentIndex + 1} of ${quizData.length}`;
    questionEl.innerText = q.question;

    optionsEl.innerHTML = "";

    q.options.forEach((option, index) => {
        let btn = document.createElement("button");
        btn.innerText = option;

        btn.onclick = () => {
            if (answered) return;
            answered = true;

            if (index === q.correct) {
                btn.style.backgroundColor = "green";
                feedbackEl.innerText = "✅ Correct!";
                score++;
            } else {
                btn.style.backgroundColor = "red";
                feedbackEl.innerText = "❌ Wrong!";
            }

            // highlight correct answer
            Array.from(optionsEl.children).forEach((b, i) => {
                if (i === q.correct) {
                    b.style.backgroundColor = "green";
                }
            });

            nextBtn.style.display = "block";
        };

        optionsEl.appendChild(btn);
    });
}

nextBtn.onclick = () => {
    currentIndex++;

    if (currentIndex < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
};

function showResult() {
    questionEl.innerText = "Quiz Completed 🎉";
    feedbackEl.innerText = `Your Score: ${score} / ${quizData.length}`;
    optionsEl.innerHTML = "";

    let restartBtn = document.createElement("button");
    restartBtn.innerText = "Restart Quiz";

    restartBtn.onclick = () => {
        currentIndex = 0;
        score = 0;
        loadQuestion();
    };

    optionsEl.appendChild(restartBtn);
    nextBtn.style.display = "none";
}

// start
loadQuestion();
// Start quiz
