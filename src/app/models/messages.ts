//messages class should contain a member property that 
//is an array that holds messages.
import { Message } from './message';
import { User } from './user';

export class Messages {

    messages: Message[];

    constructor(messages: Message[]) {
        this.messages = messages;
    }

    getMessages() {
        return this.messages;
    }

    addMessage(message: Message) {
        this.messages.push(message);
        
    }
}