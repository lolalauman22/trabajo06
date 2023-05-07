import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  function handleInputChange(e){
    e.preventDefault();
    setInput(e.target.value);
  };

  function handleAddTodo(){
    if (input.trim() !== "") {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  function handleRemoveTodo(index){
    const nuevoTodos = [...todos];
    nuevoTodos.splice(index, 1);
    setTodos(nuevoTodos);
  };

  return (
    <div>
      <h1>Lista de tareas pendientes</h1>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={handleAddTodo}>Agregar</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleRemoveTodo(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

