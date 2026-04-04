const quizData = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Tool Multi Language",
            "None"
        ],
        correct: 0
    },
    {
        question: "Which language is used for styling?",
        options: ["HTML", "Python", "CSS", "Java"],
        correct: 2
    },
    {
        question: "Which is a JavaScript framework?",
        options: ["Django", "React", "Flask", "Laravel"],
        correct: 1
    }
];

let currentIndex = 0;
let score = 0;
let answered = false;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
    answered = false;
    nextBtn.style.display = "none";

    const currentQ = quizData[currentIndex];
    questionEl.innerText = currentQ.question;
    optionsEl.innerHTML = "";

    currentQ.options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.innerText = option;

        btn.onclick = () => {
            if (answered) return;

            answered = true;

            if (index === currentQ.correct) {
                btn.style.backgroundColor = "green";
                score++;
            } else {
                btn.style.backgroundColor = "red";
            }

            // Show correct answer
            Array.from(optionsEl.children).forEach((b, i) => {
                if (i === currentQ.correct) {
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
    questionEl.innerText = "Your Score: " + score + "/" + quizData.length;
    optionsEl.innerHTML = "";

    const restartBtn = document.createElement("button");
    restartBtn.innerText = "Restart Quiz";

    restartBtn.onclick = () => {
        currentIndex = 0;
        score = 0;
        loadQuestion();
    };

    optionsEl.appendChild(restartBtn);
    nextBtn.style.display = "none";
}

// Start quiz
