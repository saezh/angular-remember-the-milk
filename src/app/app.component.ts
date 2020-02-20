import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sae';
  person = {
    name: 'Peter'
  };
  numbers = [1, 2, 3, 4, 5];

  count = 0;

  constructor() {
    setInterval(() => this.count++, 1000);
  }

  getPersonName() {
    return this.person.name;
  }

  reset(initialValue = 0) {
    this.count = initialValue;
  }
}
