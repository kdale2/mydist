import { Component } from '@angular/core';
import { MessagesService } from './messages.service';
import { MyServiceService } from './my-service.service';
import {Message} from './../app/models/message';
import { Messages } from './models/messages';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mydist';
  myMsgService: MessagesService;
  myService: MyServiceService;
  messages: Message[];
  messagesObject: Messages;

  constructor(myMsgService: MessagesService, myService: MyServiceService) {

      this.myService = myService;
      //gets messages displaying on page upon loading
      this.myMsgService = myMsgService;
      this.messages = myMsgService.addMessages();

      //test to make sure messages are retrieved from message service 
      //and added to member property messages array
      //console.log(this.messages);
   }



}




