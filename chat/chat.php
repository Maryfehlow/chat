<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chat</title>
    <style>
        

         /* mensagens de entrada do usuário */
        .message.user {
          text-align: right;
         background-color: #EBEBEB;
        }

         /* mensagens de resposta do chatbot */
         .message.bot {
        text-align: left;
        }

          body {
           font-family: Arial, sans-serif;
           border color: black;
          }

          .chat-container {
          max-width: 300px;
            margin: 0 auto;
            border: 4px solid #050A30;
            border-radius: 3px;
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
         }

        .chat-box {
          height: 300px;
          overflow-y: scroll;
          border: 1px solid black;
          padding: 10px;
         margin-bottom: 10px;
          } 

.input-container {
    display: flex;
    align-items: center;
}

input[type="text"] {
    flex-grow: 1;
    padding: 5px;
    border: 1px solid #EBEBEB;
    border-radius: 3px;
    margin-right: 5px;t
}

     button {
     padding: 5px 10px;
     background-color: black;
     color: #EBEBEB;
     border: none;
     border-radius: 3px;
     cursor: pointer;
    } 

    button:hover {
    background-color: #0056b3;
        }
    </style>
<body>
    <div class="chat-container">
        <div class="chat-box" id="chat-box">
            <!-- Aqui é onde as mensagens serão exibidas -->
        </div>
        <div class="input-container">
            <input type="text" id="message-input" placeholder="Digite uma mensagem...">
            <button onclick="sendMessage()">Enviar</button>
        </div>
    </div>
       <script src="chat.js"></script>
</body>
</html>