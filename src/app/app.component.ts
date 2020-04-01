import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = ['Buy Eggs!', 'Milk', 'Bananas'];

  removeItem(index: number) {
    this.items.splice(index, 1);
  }

  onAddItem(title: string) {
    this.items.unshift(title);
  }
}
