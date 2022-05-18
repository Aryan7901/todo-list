import { useState, useRef } from "react";
import { useTodoStore } from "../store/TodoContext";

export default function TodoItem({ id, text }) {
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
    <li className="m-5 w-3/4 min-h-2 bg-slate-900 flex rounded-xl p-1 sm:flex-row flex-col">
      {!editState ? (
        <p className="text-slate-200 flex-grow m-2">{text}</p>
      ) : (
        <input
          className="bg-slate-900 opacity-80 p-2 sm:w-80 flex-grow rounded-lg m-2 ring-2 ring-purple-500 focus:outline-none text-slate-200"
          value={inputText}
          onChange={inputChangeHandler}
          onKeyDown={keypressHandler}
        />
      )}

      <button
        className="text-purple-400 p-2 hover:text-white hover:bg-purple-700 rounded-lg"
        onClick={editHandler}
      >
        Edit
      </button>
      <button
        className="text-red-400 p-2 hover:text-white hover:bg-red-700 rounded-lg"
        onClick={() => todoStore.removeTodo(id)}
      >
        Delete
      </button>
    </li>
  );
}
