import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeTodo,
  toggleComplete,
  updateTodo,
} from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const [editId, setEditId] = React.useState(null);
  const [editText, setEditText] = React.useState("");

  const startEditing = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };

  const saveEdit = () => {
    dispatch(updateTodo({ id: editId, text: editText }));
    setEditId(null);
    setEditText("");
  };

  return (
    <>
      <div className="text-xl text-white font-bold mb-4">Todos</div>

      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            {/* If this todo is being edited */}
            {editId === todo.id ? (
              <>
                <input
                  value={editText}
                  className="px-2 py-1 rounded mr-2 text-white"
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button
                  onClick={saveEdit}
                  className="text-white bg-green-500 px-3 py-1 rounded mr-2"
                >
                  Save
                </button>
              </>
            ) : (
              <>
                {/* Todo Text with Visual Toggle */}
                <div
                  className={`text-white cursor-pointer ${
                    todo.completed ? "line-through opacity-50" : ""
                  }`}
                  onClick={() => dispatch(toggleComplete({ id: todo.id }))}
                >
                  {todo.text}
                </div>

                <div className="flex gap-3">
                  {/* Edit Button */}
                  <button
                    onClick={() => startEditing(todo)}
                    className="text-white bg-blue-500 px-3 py-1 rounded"
                  >
                    Edit
                  </button>

                  {/* Delete Button */}
                  <button
                    onClick={() => dispatch(removeTodo(todo.id))}
                    className="text-white bg-red-500 px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
