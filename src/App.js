import React, { useState } from 'react';
import './App.css';
import Todo from "./Todo"
function App() {
  const [input, setInput] = useState("")
  const [todos, setTodo] = useState([])
  const addTodo = (e) => {
    e.preventDefault()
    setTodo([...todos, input])
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <form>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          type="text" />
        <button disable={!input} onClick={addTodo} type="submit">Add Todo</button>
      </form>
      {todos.map((todo, i) => (
        <Todo title={todo} key={i} />
      ))}
    </div>
  );
}

export default App;
