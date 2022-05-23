import React, { useState, useEffect } from 'react';
import './App.css';

// importing components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  // inputText is variable, updated by setInputText which is the function
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [canSave, setCanSave] = useState(false)

  const filterHandler = () =>
  {
    switch (filter) {
      case 'Completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true))
        break;
      case 'Incomplete':
        setFilteredTodos(todos.filter((todo) => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos)
        break;
    }
  }

  const saveLocalTodos = () =>
  {
    if (todos) localStorage.setItem("todoLocal", JSON.stringify(todos));
  }

  const getLocalTodos = () =>
  {
    let localTodos = (JSON.parse(localStorage.getItem("todoLocal")));
    setTodos(localTodos);
  }

  useEffect(() => {
    getLocalTodos()
    setCanSave(true)
  }, []);

  useEffect(() => {
    filterHandler();
  }, [todos, filter]);

  useEffect(() => {
    if (canSave) saveLocalTodos();
  }, [todos]);

  return (
    <div className="App">
      <header>      
        <h1> 
          My To Do List
        </h1>
      </header>

      <Form 
        setInputText={setInputText} 
        inputText={inputText} 
        setTodos={setTodos} 
        todos={todos} 
        setFilter={setFilter}
        saveLocalTodos={saveLocalTodos}
      />

      <TodoList 
        inputText={inputText} 
        setTodos={setTodos} 
        todos={todos}
        filteredTodos={filteredTodos}
      />

    </div>
  );
}

export default App;
