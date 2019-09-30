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
  likedImage: boolean;
  info: string;
  count: number = 0;
  myService: MyServiceService;
  messageService: MessagesService;

  constructor(myService: MyServiceService, messageService: MessagesService) { 
    this.myService = myService;
    this.messageService = messageService;
    console.log("my button.ts constructor");

  }

  ngOnInit() {
  }

/* 
   Add a span element to the
   my-button component that renders “Image is liked == True”, replacing true with a
   template string literal bound to the member property. 
   when the like button is clicked */

  buttonClicked() {

    console.log("buttonclicked method in mybutton.ts")

    //toggled between liked(button turns green) and unliked
    this.likedImage = !this.likedImage; 

    //just to keep track of how many times photo is liked
    if (this.likedImage === true) {
       this.count++;
    }

    //passes boolean member property to my-service method likeImage()
    this.myService.likeImage(this.likedImage);

    //stores the info to render with template string literal elsewhere
    this.info = "Image is liked === " + this.likedImage;

    //just for testing
    console.log("what we have in my button ts: " + this.likedImage);
    console.log("How many likes? " + this.count);

  }

  generateMessages() {
    this.messageService.addMessages();
  }

}
