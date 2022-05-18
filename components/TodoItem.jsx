import { useState, useRef } from "react";
import { useTodoStore } from "../store/TodoContext";

export default function TodoItem({ id, text, index }) {
  const todoStore = useTodoStore();
  const [inputText, setInputText] = useState(text);
  const [editState, setEditState] = useState(false);
  const editHandler = () => {
    if (editState === true) todoStore.editTodo(id, inputText);
    setEditState((state) => !state);
  };
  const inputChangeHandler = (event) => {
    setInputText(event.target.value);
  };
  const keypressHandler = (event) => {
    if (event.code === "Enter") {
      editHandler();
    }
  };

  return (
    <li className="flex flex-col w-3/4 p-1 m-5 min-h-2 bg-slate-900 rounded-xl sm:flex-row">
      {!editState ? (
        <p className="flex-grow m-2 text-slate-200">
          <span className="m-3 text-slate-400">{index + 1}.</span>
          {text}
        </p>
      ) : (
        <input
          className="flex-grow p-2 m-2 rounded-lg bg-slate-900 opacity-80 sm:w-80 ring-2 ring-purple-500 focus:outline-none text-slate-200"
          value={inputText}
          onChange={inputChangeHandler}
          onKeyDown={keypressHandler}
        />
      )}

      <button
        className="p-2 text-purple-400 rounded-lg outline-none hover:text-white hover:bg-purple-700"
        onClick={editHandler}
      >
        Edit
      </button>
      <button
        className="p-2 text-red-400 rounded-lg outline-none hover:text-white hover:bg-red-700"
        onClick={() => todoStore.removeTodo(id)}
      >
        Delete
      </button>
    </li>
  );
}
