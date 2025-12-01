import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    // LocalStorage se theme preference check karo
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    // Agar saved nahi hai to system preference check karo
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    // DOM mein dark class add/remove karo
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition"
      aria-label="Toggle theme"
    >
      {darkMode ? (
        <FiSun className="text-yellow-400" size={20} />
      ) : (
        <FiMoon className="text-gray-300" size={20} />
      )}
    </button>
  );
}

export default ThemeToggle;