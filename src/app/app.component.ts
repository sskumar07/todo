import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private readonly todoService: TodoService) {}

  ngOnInit(): void {
    this.loadTODO();
  }
  nameList: string[];
  name: string;

  addTODO() {
    if (this.name && this.name !== null) {
      this.todoService.addTodo(this.name).then();
      this.name = '';
    }
  }

  loadTODO() {
    this.todoService.getTodo().subscribe(response => (console.log(response)));
  }
}
