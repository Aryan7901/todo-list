import { observer, useObserver } from "mobx-react";
import { useState, useRef } from "react";
import { useTodoStore } from "../store/TodoContext";
import TodoItem from "./TodoItem";
const ListItems = observer(() => {
  const todoStore = useTodoStore();

  return (
    <div className="mt-10 w-full flex flex-col items-center">
      <h3 className="text-2xl font-montserrat text-slate-400">Tasks</h3>
      <ul className="w-full flex flex-col items-center">
        {todoStore.todos.map((item) => {
          return <TodoItem key={item.id} id={item.id} text={item.text} />;
        })}
      </ul>
    </div>
  );
});
export default ListItems;
