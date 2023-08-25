import './App.css';

import { useState, useEffect } from 'react';
import { BsTrash, BsBookmarkCheck, BsBookmarkCheFill } from 'react-icons/bs';

const API = "http://localhost:5000"
function App() {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(false);

  //Load todos on page load


  const handleSubmit = async (e) => {
    e.preventDefault();

    const todo = {
      id: Math.random(),
      title,
      time,
      done: false,

    }
    console.log(todo);
    await fetch(API + "/todos", {
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(todo);
    setTitle("");
    setTime("");

    console.log("Enviando Dados...")
  }
  return (
    <div className="App">
      <div className="todo-header">
        <h1>React todo</h1>
      </div>
      <div className="form-todo">
        <h2>Insira a sua próxima tarefa</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="title">O que você vai fazer? </label>
            <input
              type="text"
              name="title"
              placeholder="Titulo da Tarefa"
              onChange={e => setTitle(e.target.value)}
              value={title || ""}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="time">Duração:  </label>
            <input
              type="text"
              name="time"
              placeholder="Duração da tarefa (em horas)"
              onChange={e => setTime(e.target.value)}
              value={time || ""}
              required
            />
          </div>
          <input type="submit" value="Criar Tarefa" />
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
