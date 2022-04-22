import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private readonly firestore: AngularFirestore) { }

  getTodo() {
      return this.firestore.collection("todos").snapshotChanges();
  }

  addTodo(todo: string) {
    return new Promise<any>((resolve, reject) => {
        this.firestore
        .collection("todos")
        .add(todo)
        .then(response => {}, error => reject(error));
    });
  }
}
