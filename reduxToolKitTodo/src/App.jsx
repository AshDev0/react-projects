import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import ThemeToggle from "./components/ThemeToggle";
import { Provider } from "react-redux";
import { store } from "./app/store";

function App() {
  return (
    <Provider store={store}>
    <div className="min-h-screen transition-colors duration-300 bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 flex flex-col items-center px-4">
      <header className="w-full max-w-2xl mt-12 mb-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-wide">📝 My Todos</h1>
        <ThemeToggle />
      </header>
      <main className="w-full max-w-2xl bg-gray-800/60 backdrop-blur-md rounded-2xl p-6 shadow-lg">
        <AddTodo />
        <TodoList />
      </main>
      <footer className="mt-12 text-gray-500 text-sm">Built with ❤️ and Redux</footer>
    </div>
    </Provider>
  );
}

export default App;
