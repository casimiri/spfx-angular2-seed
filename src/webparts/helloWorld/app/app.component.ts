
import { Component, ElementRef, Input} from '@angular/core';

import * as strings from 'helloWorldStrings';



@Component({
  selector:'my-app',
  template:`<h1>hi there {{title}}!</h1>
    <button (click)="sayHi()">Hi</button>
  `
})
export class AppComponent {
  title:string ;
  //strings.NameFieldLabel;

  constructor(private elementRef:ElementRef) {
    this.title = this.elementRef.nativeElement.getAttribute('title');
  }

  sayHi(){
    alert('hi');
  }
}
