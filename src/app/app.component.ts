import { Component } from '@angular/core';
import { MessagesService } from './messages.service';
import {Message} from './../app/models/message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mydist';
  myMsgService: MessagesService;
  messages: Message[];

  constructor(myMsgService: MessagesService) {
      this.myMsgService = myMsgService;
      this.messages = myMsgService.addMessages();
      console.log(this.messages);
   }



}




