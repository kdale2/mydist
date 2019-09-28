import { Injectable } from '@angular/core';
import { createUrlResolverWithoutPackagePrefix } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  result: string;

/* The service method likeImage should accept a
boolean parameter and return a banged version of the param. So every time 
the user clicks the button is should update the member property. */

  constructor() {   }



  likeImage(like: boolean): string {
    
    this.result = 'Image is liked === ' + like.toString();

    //just for debugging purposes
    console.log("result in my service = " + this.result);

    //returns string stating whether or not image is liked
    return this.result;

  } 

}


