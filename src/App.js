import './App.css';

import { useState, useEffect } from 'react';
import { BsTrash, BsBookmarkCheck, BsBookmarkCheFill } from 'react-icons/bs';

const API = "http://localhost:5000"
function App() {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(false);

  const handleSubmit = e => {
    e.PreventDefault();
  }
  return (
    <div className="App">
      <div className="todo-header">
        <h1>React todo</h1>
      </div>
      <div className="form-todo">
        <h2>Insira a sua próxima tarefa</h2>
        <form onSubmit={handleSubmit}>

        </form>
      </div>
      <div className="list-todo">
        <p>Lista</p>
        <h2>Lista de Tarefas</h2>
        {todos.length === 0 && <p>Não há tarefas</p>}
      </div>
    </div>
  );
}

export default App;
