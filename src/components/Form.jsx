import React from 'react';

const Form = ({ setInputText, inputText, setTodos, todos, setFilter, saveLocalTodos }) => 
{
    const inputTextHandler = (e) => 
    {
        setInputText(e.target.value)
    }

    const submitTodoHandler = (e) =>
    {
        e.preventDefault(); 
        
        setTodos([
            ...todos, {text: inputText, completed: false, id: new Date().getTime()}
        ]);

        saveLocalTodos();
        setInputText("");
    }

    const filterHandler = (e) => 
    {
        setFilter(e.target.value)
    }

    return (
      <form>
          <input onChange={inputTextHandler} type="text" className="todo-input" value={inputText}/>
          <button onClick={submitTodoHandler} className="todo-button" type="submit">
              <i className="fas fa-plus-square"></i>
          </button>
          <div className="select" onChange={filterHandler}>
              <select name="todos" className="filter-todo">
                <option value="All">All</option>
                <option value="Completed">Completed</option>
                <option value="Incomplete">Incomplete</option>
              </select>
          </div>
      </form>  
    );
};

export default Form;