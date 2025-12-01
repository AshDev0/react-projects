import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTodo, toggleComplete, updateTodo } from "../features/todo/todoSlice";
import { FiTrash2, FiEdit3, FiCheck, FiX } from "react-icons/fi";
function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);
  const saveEdit = () => {
    if (text.trim()) {
      dispatch(updateTodo({ id: todo.id, text }));
      setIsEditing(false);
    }
  };
  return (
    <li className="flex justify-between items-center bg-gray-700/40 px-4 py-3 rounded-xl mb-3 hover:bg-gray-700/60 transition">
      {isEditing ? (
        <div className="flex-1 flex items-center gap-2">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && saveEdit()}
            className="bg-gray-600 text-gray-100 px-3 py-1 rounded-lg flex-1 outline-none"
            autoFocus
          />
          <button onClick={saveEdit} className="text-green-400 hover:text-green-300">
            <FiCheck />
          </button>
          <button onClick={() => setIsEditing(false)} className="text-red-400 hover:text-red-300">
            <FiX />
          </button>
        </div>
      ) : (
        <>
          <div
            className={`flex-1 cursor-pointer select-none ${
              todo.completed ? "line-through text-gray-400 " : ""
            }`}
            onClick={() => dispatch(toggleComplete({ id: todo.id }))}
          >
            {todo.text}
          </div>
          <div className="flex gap-3">
            <button onClick={() => setIsEditing(true)} className="hover:text-blue-400">
              <FiEdit3 />
            </button>
            <button onClick={() => dispatch(removeTodo(todo.id))} className="hover:text-red-400">
              <FiTrash2 />
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default TodoItem;