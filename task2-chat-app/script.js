const chatBox = document.getElementById("chatBox");

// Load messages
function loadMessages() {
    let messages = JSON.parse(localStorage.getItem("chat")) || [];
    chatBox.innerHTML = "";

    let currentUser = document.getElementById("username").value;

    messages.forEach(msg => {
        let div = document.createElement("div");
        div.classList.add("message");

        if (msg.name === currentUser) {
            div.classList.add("self");
        } else {
            div.classList.add("other");
        }
div.innerHTML = `
    <strong>👤 ${msg.name}</strong>
    <span>${msg.text}</span>
    <small>⏱ ${msg.time}</small>
`;  
chatBox.appendChild(div);
    });

    chatBox.scrollTop = chatBox.scrollHeight;
}

// Send message
function sendMessage() {
    let name = document.getElementById("username").value;
    let text = document.getElementById("message").value;

    if (name === "" || text === "") {
        alert("Enter name and message");
        return;
    }

    let messages = JSON.parse(localStorage.getItem("chat")) || [];

    messages.push({
        name: name,
        text: text,
        time: new Date().toLocaleTimeString()
    });

    localStorage.setItem("chat", JSON.stringify(messages));

    document.getElementById("message").value = "";

    loadMessages();
}

// Enter key support
function handleKey(e) {
    if (e.key === "Enter") {
        sendMessage();
    }
}


// Initial load
loadMessages();
