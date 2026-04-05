// ==========================
// PROGRESS SYSTEM
// ==========================
window.onload = function() {
    updateProgress();
};

function completeCourse(course) {
    localStorage.setItem(course, "100");
    updateProgress();
}

function updateProgress() {
    let web = localStorage.getItem("web") || "0";
    let java = localStorage.getItem("java") || "0";

    if (document.getElementById("webProgress")) {
        document.getElementById("webProgress").innerText = web + "%";
    }

    if (document.getElementById("javaProgress")) {
        document.getElementById("javaProgress").innerText = java + "%";
    }
}

// ==========================
// QUIZ SYSTEM
// ==========================
let score = 0;
let answered = 0;

function checkAnswer(ans, correct) {
    answered++;

    if (ans === correct) {
        score++;
    }

    document.getElementById("result").innerText =
        "Score: " + score + " / " + answered;
}

// ==========================
// LOAD QUIZ BASED ON COURSE
// ==========================
if (document.getElementById("quizContainer")) {
    let params = new URLSearchParams(window.location.search);
    let course = params.get("course");

    let quizHTML = "";

    if (course === "web") {
        quizHTML = `
            <p>1. HTML stands for?</p>
            <button onclick="checkAnswer('a','a')">Hyper Text Markup Language</button>
            <button onclick="checkAnswer('b','a')">High Tech Machine Language</button>

            <p>2. CSS is used for?</p>
            <button onclick="checkAnswer('a','a')">Styling</button>
            <button onclick="checkAnswer('b','a')">Programming</button>
        `;
    }

    else if (course === "java") {
        quizHTML = `
            <p>1. Java is a?</p>
            <button onclick="checkAnswer('a','a')">Programming Language</button>
            <button onclick="checkAnswer('b','a')">Database</button>

            <p>2. Java is?</p>
            <button onclick="checkAnswer('a','a')">Platform Independent</button>
            <button onclick="checkAnswer('b','a')">Only Windows Based</button>
        `;
    }

    document.getElementById("quizContainer").innerHTML = quizHTML;
}

// ==========================
// FEEDBACK
// ==========================
function submitFeedback() {
    let name = document.getElementById("name").value;
    let msg = document.getElementById("msg").value;

    if (name === "" || msg === "") {
        alert("Please fill all fields");
        return;
    }

    document.getElementById("feedbackMsg").innerText =
        "✅ Thank you, " + name + "!";
}
