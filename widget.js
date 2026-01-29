console.log("✅ widget.js loaded");

// 🔹 CONFIG — must be at TOP
const BUSINESS_ID = "demo-business";
const API_URL = "https://ai-support-backend-6pc9.onrender.com/chat";

// 🔹 DOM elements
const sendBtn = document.getElementById("sendBtn");
const input = document.getElementById("messageInput");
const messagesDiv = document.getElementById("chat-messages");

// 🔹 Event binding
sendBtn.addEventListener("click", sendMessage);

// 🔹 Helper to show messages
function addMessage(text, sender) {
  const msgDiv = document.createElement("div");
  msgDiv.innerText = (sender === "user" ? "You: " : "Bot: ") + text;
  messagesDiv.appendChild(msgDiv);
}

// 🔹 Send message to backend
async function sendMessage() {
  const input = document.getElementById("messageInput");
  const message = input.value.trim();
  if (!message) return;

  addMessage(message, "user");
  input.value = "";

  try {
    const response = await fetch(
      "https://ai-support-backend-6pc9.onrender.com/chat",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          business_id: "Sync IO",
          question: message
        })
      }
    );

    const data = await response.json();
    console.log("API RESPONSE:", data);

    if (data.answer) {
      addMessage(data.answer, "bot");
    } else {
      addMessage("No reply from server", "bot");
    }

  } catch (error) {
    console.error("Fetch error:", error);
    addMessage("Error connecting to server", "bot");
  }
}
