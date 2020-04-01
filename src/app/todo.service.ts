import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private items = [] as string[];

  constructor(private http: HttpClient) {
    this.loadTodos();
  }

  private loadTodos() {
    this.http.get<string[]>('http://localhost:3000/items').subscribe(items => {
      this.items = items;
    });
  }

  removeItem(index: number) {
    // Optimistic update
    this.items.splice(index, 1);
    // Real update
    this.http.delete<string[]>('http://localhost:3000/items/' + index).subscribe(items => {
      this.items = items;
    });
  }

  addItem(title: string) {
    // Optimistic update
    this.items.unshift(title);
    // Real update
    this.http.post<string[]>('http://localhost:3000/items', {
      title
    }).subscribe(items => {
      this.items = items;
    });
  }

  getItems() {
    return this.items;
  }
}
