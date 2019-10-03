import { Injectable } from '@angular/core';
import { Message } from './models/message';
import { Messages } from './models/messages';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

/* Import the classes from the
models folder into the services. Add a member function that instantiates several
message objects and append them to a messages object which should contain a
member property that is an array of messages. */

  messages: Message[];
  messagesObject: Messages;

  constructor() { 
  }

  addMessages(): Message[] {

    //just generating a random date for these
    let date: Date = new Date(2019, 0O5, 0O5, 17, 23, 42, 11);
    
    //add some messages to Message array
    this.messages = [new Message('This is the first message received!', date), 
                     new Message('Hello, me again.', date),
                     new Message ('Adding a third msg for fun', date)];

    this.messagesObject = new Messages(this.messages);
    //and a random user
    let user: User = new User('kdale2', 123456, this.messagesObject);

    //test to make sure messages print to console
    //console.log(this.messages);
    return this.messages;
  }
}


