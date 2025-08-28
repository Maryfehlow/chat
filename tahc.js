
// Função para enviar uma mensagem
function sendMessage() {
    const messageInput = document.getElementById("message-input");
    const chatBox = document.getElementById("chat-box");
    const message = messageInput.value;

    if (message.trim() !== "") {
        // Exibir a mensagem do usuário
        const userMessageElement = document.createElement("div");
        userMessageElement.classList.add("message", "user");
        userMessageElement.textContent = `Você: ${message}`;
        chatBox.appendChild(userMessageElement);

        // Limpar o campo de entrada após o envio da mensagem
        messageInput.value = "";

        // Role até a parte inferior para exibir a nova mensagem
        chatBox.scrollTop = chatBox.scrollHeight;

        // Simular uma resposta do chatbot após um pequeno atraso
        setTimeout(() => {
            const botMessage = "artcon: Olá! Sou assistente do artcon. Como posso ajudar?";
            const botMessageElement = document.createElement("div");
            botMessageElement.classList.add("message", "bot");
            botMessageElement.textContent = botMessage;
            chatBox.appendChild(botMessageElement);

            // Role até a parte inferior para exibir a nova mensagem do chatbot
            chatBox.scrollTop = chatBox.scrollHeight;
        }, 500);
    }
}
