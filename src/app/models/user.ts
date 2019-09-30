import { Message } from './message';
import { Messages } from './messages';

export class User {

    username: string;
    age: number;
    myMessages: Message[];

    constructor(username: string, age:number) {
        this.username = username;
        this.age = age;
    }

    getUser() {
        return {
            username: this.username,
            age: this.age
        }
    }

    greetUser() {
        console.log("Hello, " + this.username);
    }

    retrieveMessages() {
        return this.myMessages;
    }
}
