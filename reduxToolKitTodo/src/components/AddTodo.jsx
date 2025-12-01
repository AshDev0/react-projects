import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import { FiPlus } from "react-icons/fi";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    dispatch(addTodo(input.trim()));
    setInput("");
  };

  return (
    <form
      onSubmit={addTodoHandler}
      className="flex gap-3 mb-8"
    >
      <input
        type="text"
        className="flex-1 bg-gray-700/50 text-gray-100 placeholder-gray-400 px-4 py-2 rounded-lg outline-none border border-gray-600 focus:border-indigo-500 transition"
        placeholder="Add a new task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 px-5 py-2 rounded-lg font-semibold transition-all duration-200"
      >
        <FiPlus className="mr-1" /> Add
      </button>
    </form>
  );
}

export default AddTodo;