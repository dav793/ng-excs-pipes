import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  e = 2.718281828459045;
  percentage = 0.2698552;
  money = 1250.3495;
  lowercaseText = 'this is in lowercase';
  uppercaseText = 'THIS IS IN UPPERCASE';
  today: number = Date.now();
  str = 'abcdefghij';

  person = {
    firstName: 'Franklin',
    middleName: 'Delano',
    lastName: 'Roosevelt'
  };

}
