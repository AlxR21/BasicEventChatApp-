const EventEmitter = require('events');

class ChatApp extends EventEmitter{
    constructor(){
        super();
        this.users = new Set();
    }

    join(user){
        this.users.add(user)
        this.emit('join', user)
    }

    sendMsg(user, message){
        if(this.users.has(user)){
            this.emit('message', user, message);
        }
        else{
            console.log("User is not in the chat.")
        }
    }

    leave(user){
        if(this.users.has(user)){
            this.users.delete(user);
            this.emit('leave', user);
        }else{
            console.log("User isn't in the chat.");
        }
    }
}

module.exports = ChatApp;