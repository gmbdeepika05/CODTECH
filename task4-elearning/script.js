function markComplete() {
    localStorage.setItem("courseCompleted", "Yes");
    alert("Course Completed!");
}

// Show progress
if (document.getElementById("progressText")) {
    let status = localStorage.getItem("courseCompleted");

    if (status === "Yes") {
        document.getElementById("progressText").innerHTML = "✅ Course Completed!";
    } else {
        document.getElementById("progressText").innerHTML = "❌ Not Completed Yet";
    }
}
