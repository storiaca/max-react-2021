import React, { useState } from "react";
import Todo from "../models/todo";
const TodosContext = React.createContext<{
  items: Todo[];
  addTodo: () => void;
  removeTodo: (id: string) => void;
}>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {}
});

const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  
  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo)
    })
  }

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id !== todoId);
    })
  }

  return <TodosContext.Provider>
    {props.children}
  </TodosContext.Provider>
}