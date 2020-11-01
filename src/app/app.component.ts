import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quote';
  quote:string[];

  constructor(){
    this.quote = ['The work proves the crafts man', 'Times moves slowly but passes quickly', 
    'To be fond of learning is to be near to knowledge']
  } 
}

