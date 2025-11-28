import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";
function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copy, setCopy] = useState('Copy');
  // useRef Hook
  const passwordRef = useRef(null);
  // The useCallback hook in React is used to memoize callback functions, meaning it returns a memoized version of the function that only changes if one of its dependencies has changed. This optimization helps prevent unnecessary re-renders in child components that rely on referential equality for their props.
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*+-/_";
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setCopy("Copy");
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);
  const copyPassToClipBoard = useCallback(()=>{
    if (!password) return;
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(password);
    setCopy("Copied");
    setTimeout(() => {
      setCopy("Copy");
    }, 1500);
  }, [password])
  // useEffect Hook for   
  useEffect(()=>{
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator]);
  return (
    <>
      <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-8 text-orange-500 bg-gray-800">
        <p className="py-2 text-white">Password Generator</p>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            name=""
            id=""
            value={password}
            className="outline-none w-full py-1 px-3 bg-white"
            placeholder="Generate Password"
            readOnly
            ref={passwordRef}
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer" onClick={copyPassToClipBoard}>
            {copy}
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              id="length"
              min={8}
              max={16}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="length">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              name=""
              id="numberAllowed"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberAllowed">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              name=""
              id="charAllowed"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charAllowed">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
