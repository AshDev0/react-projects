import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

function TodoList() {
  const todos = useSelector((state) => state.todo.todos);

  if (todos.length === 0)
    return (
      <p className="text-center text-gray-400 mt-8">
        No tasks yet. Add one above 👆
      </p>
    );

  return (
    <ul className="mt-4">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;