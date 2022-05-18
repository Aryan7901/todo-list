import { observer, useObserver } from "mobx-react";
import { useState, useRef } from "react";
import { useTodoStore } from "../store/TodoContext";
import TodoItem from "./TodoItem";
const ListItems = observer(() => {
  const todoStore = useTodoStore();

  return (
    <div className="flex flex-col items-center w-full mt-10">
      <h3 className="text-2xl font-montserrat text-slate-400">Tasks</h3>
      <ul className="flex flex-col items-center w-full">
        {todoStore.todos.map((item, index) => {
          return (
            <TodoItem
              key={item.id}
              id={item.id}
              text={item.text}
              index={index}
            />
          );
        })}
      </ul>
    </div>
  );
});
export default ListItems;
