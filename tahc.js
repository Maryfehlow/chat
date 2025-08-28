
function sendMessage() {
    const messageInput = document.getElementById("message-input");
    const chatBox = document.getElementById("chat-box");
    const message = messageInput.value;

    if (message.trim() !== "") {
        
        const userMessageElement = document.createElement("div");
        userMessageElement.classList.add("message", "user");
        userMessageElement.textContent = `Você: ${message}`;
        chatBox.appendChild(userMessageElement);

        messageInput.value = "";

        chatBox.scrollTop = chatBox.scrollHeight;

        setTimeout(() => {
            const botMessage = "artcon: Olá! Sou assistente do artcon. Como posso ajudar?";
            const botMessageElement = document.createElement("div");
            botMessageElement.classList.add("message", "bot");
            botMessageElement.textContent = botMessage;
            chatBox.appendChild(botMessageElement);

            chatBox.scrollTop = chatBox.scrollHeight;
        }, 500);
    }
}

