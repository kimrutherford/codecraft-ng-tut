import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputValue = "initial value";

  title = 'works!';


  test() {
    this.title = "fwhuiefh";
  
    let newval = this.title;

  }
}
