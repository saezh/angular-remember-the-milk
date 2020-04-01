import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() addItem = new EventEmitter<string>();

  addItemTitle = '';

  constructor() { }

  ngOnInit(): void {
  }

}
