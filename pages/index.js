import Head from "next/head";
import Image from "next/image";
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
    <div className="min-h-screen flex flex-col items-center bg-slate-800">
      <h1 className="text-6xl font-dynalight m-10 text-blue-600">
        Todo List 2022
      </h1>
      <form
        onSubmit={submitHandler}
        className="flex justify-center items-center flex-col sm:flex-row"
      >
        <input
          value={inputText}
          onChange={inputChangeHandler}
          className="bg-slate-900 opacity-80 p-2 sm:w-80 rounded-lg m-2 focus:ring-2 focus:ring-purple-500 focus:outline-none text-slate-200"
          placeholder="What do you plan to do?"
        />
        <button
          className="text-purple-400 p-2 hover:text-white hover:bg-purple-700 rounded-lg w-28"
          type="submit"
        >
          Add task
        </button>
      </form>
      <ListItems />
    </div>
  );
}
