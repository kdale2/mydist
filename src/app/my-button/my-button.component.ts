import { Component, OnInit } from '@angular/core';
import { MyServiceService } from './../my-service.service';
import { MessagesService } from './../messages.service';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css']
})
export class MyButtonComponent implements OnInit {

  //When a user clicks the “like” button next to the image it should
  //call a member function in the my-button component which passes 
  //a boolean member property to a service called my-service.
  liked: boolean;
  count: number = 0;
  myService: MyServiceService;
  messageService: MessagesService;
  result: string;

  constructor(myService: MyServiceService, messageService: MessagesService) { 
    this.myService = myService;
    this.messageService = messageService;
  }

  ngOnInit() {
  }

  buttonClicked() {

    console.log("Button was clicked.")

    ///passes boolean member property to my-service method likeImage() and
    //stores the info to render with template string literal in view
    this.liked = this.myService.likeImage(this.liked);

    //toggled between liked and unliked - moving to my-service
    //this.likedImage = !this.likedImage; 

    //keeps track of how many times photo is liked
    if (this.liked === true) {
       this.count++;
    }

    this.result = 'Image is liked === ' + this.liked.toString();

    //just for testing in console
    //console.log("Photo liked? " + this.likedImage);
    //console.log("How many likes? " + this.count);

  }

  generateMessages() {
    this.messageService.addMessages();
  }

}
