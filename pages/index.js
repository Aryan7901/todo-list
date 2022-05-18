import { useState } from "react";
import ListItems from "../components/ListItems";
import { useTodoStore } from "../store/TodoContext";
export default function Home() {
  const inputChangeHandler = (event) => {
    setInputText(event.target.value);
  };
  const [inputText, setInputText] = useState("");
  const todoStore = useTodoStore();
  const submitHandler = (event) => {
    event.preventDefault();
    if (inputText !== "") {
      todoStore.addTodo(inputText);
      setInputText("");
    }
  };
  return (
    <div className="flex flex-col items-center min-h-screen bg-slate-800">
      <h1 className="m-10 text-6xl text-blue-600 font-dynalight">
        Todo List 2022
      </h1>
      <form
        onSubmit={submitHandler}
        className="flex flex-col items-center justify-center sm:flex-row"
      >
        <input
          value={inputText}
          onChange={inputChangeHandler}
          className="p-2 m-2 rounded-lg bg-slate-900 opacity-80 sm:w-80 focus:ring-2 focus:ring-purple-500 focus:outline-none text-slate-200"
          placeholder="What do you plan to do?"
        />
        <button
          className="p-2 text-purple-400 rounded-lg outline-none hover:text-white hover:bg-purple-700 w-28"
          type="submit"
        >
          Add task
        </button>
        <button
          className="p-2 text-red-400 rounded-lg outline-none hover:text-white hover:bg-red-700 w-28"
          onClick={() => todoStore.deleteAll()}
          type="button"
        >
          Delete All
        </button>
      </form>
      <ListItems />
    </div>
  );
}
