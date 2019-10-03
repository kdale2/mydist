import { Injectable } from '@angular/core';
import { createUrlResolverWithoutPackagePrefix } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  like: boolean;

  constructor() {   }

  likeImage(like: boolean): boolean {
    
    //take the input parameter and return banged parameter
    this.like = !this.like;

    //just for debugging purposes
    //console.log("Result in my-service.ts after Like button is clicked: " + this.result);

    //returns boolean stating whether or not image is currently liked (liked = true)
    return this.like;

  } 
}


