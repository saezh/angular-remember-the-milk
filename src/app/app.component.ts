import { Component } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public todo: TodoService) {}

  removeItem(index: number) {
    this.todo.removeItem(index);
  }

  onAddItem(title: string) {
    this.todo.addItem(title);
  }
}
