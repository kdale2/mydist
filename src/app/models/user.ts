import { Message } from './message';
import { Messages } from './messages';


export class User {

    username: string;
    userID: number;
    myMessages: Messages;

    constructor(username: string, userID:number, myMessages: Messages) {
        this.username = username;
        this.userID = userID;
        this.myMessages = myMessages;
    }

    getUser() {
        return {
            username: this.username,
            userID: this.userID
        }
    }

    retrieveMessages() {
        return this.myMessages;
    }
}
