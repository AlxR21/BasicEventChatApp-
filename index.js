const ChatApp = require("./chatApp.js");

const chat = new ChatApp();

//Implementing event listeners for chat events
chat.on('join', (user) => {
    console.log(`${user} has joined the chat.`)
});

chat.on('message', (user, message) => {
    console.log(`${user} : ${message}`)
});

chat.on("leave", (user) => {
    console.log(`${user} has left the chat.`);
})

//Running the chat functions
chat.join("Phineas");
chat.join("Ferb");

chat.sendMsg("Phineas", "Ferb, I know what we're gonna do today!");
chat.sendMsg("Ferb", "...");

chat.leave("Phineas");
chat.leave("Ferb");