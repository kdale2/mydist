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

  constructor() { 
  }

  addMessages(): Message[] {

    let date: Date = new Date(2018, 0O5, 0O5, 17, 23, 42, 11);  
    this.messages = [new Message('First message received.', date), 
                     new Message('Hello, me again.', date)];
    console.log(this.messages);
    return this.messages;
  }
}


