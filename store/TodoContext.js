import { useContext, createContext } from "react";
import { todoStore } from ".";

const TodoContext = createContext(null);

export const TodoProvider = ({ children }) => {
  const todos = new todoStore();
  return <TodoContext.Provider value={todos}>{children}</TodoContext.Provider>;
};

export const useTodoStore = () => useContext(TodoContext);
