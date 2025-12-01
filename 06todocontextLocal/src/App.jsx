import {useState, useEffect} from 'react'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import {TodoProvider } from './contexts/TodoContext'
function App() {
const [todos, setTodos] = useState(() => {
    try {
      const savedTodos = localStorage.getItem("todos");
      return savedTodos ? JSON.parse(savedTodos) : [];
    } catch (error) {
      console.error("Error loading todos:", error);
      return [];
    }
  });
// Add Todo
const addTodo = (todo) =>{
  setTodos((prev) => [{id:Date.now(), ...todo}, ...prev])
}

//Update Todo
const updateTodo = (id, todo) => {
  setTodos((prev) =>
    prev.map((t) => (t.id === id ? { ...t, ...todo } : t))
  );
}
//Delete Todo
const deleteTodo = (id)=>{
  setTodos((prev) => prev.filter((todo) => todo.id !== id))
}

//Toggle Complete Status
const toggleComplete = (id)=>{
  setTodos((prev) =>
    prev.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  );
}

useEffect(() => {
    try {
      localStorage.setItem("todos", JSON.stringify(todos));
    } catch (error) {
      console.error("Error saving todos:", error);
    }
  }, [todos]); 
return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */}
                        <TodoForm /> 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                         {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}
export default App
