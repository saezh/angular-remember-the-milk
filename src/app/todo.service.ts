import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private items = ['Buy Eggs!', 'Milk', 'Bananas'];

  removeItem(index: number) {
    this.items.splice(index, 1);
  }

  addItem(title: string) {
    this.items.unshift(title);
  }

  getItems() {
    return this.items;
  }
}
