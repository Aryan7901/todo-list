import { makeAutoObservable } from "mobx";
import v4 from "../node_modules/uuid/dist/v4";
export class todoStore {
  todos = [];
  constructor() {
    makeAutoObservable(this);
  }
  addTodo(text) {
    if (text !== "") {
      this.todos.push({ text, id: v4() });
    }
  }
  removeTodo(id) {
    this.todos = this.todos.filter((item) => item.id !== id);
  }
  editTodo(id, text) {
    this.todos.forEach((item) => {
      if (item.id === id) item.text = text;
    });
  }
}
