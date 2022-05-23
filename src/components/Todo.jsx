import React from 'react';

const Todo = ({setTodos, todos, todo}) => 
{

    const deleteHandler = () =>
    {
        setTodos(todos.filter((e) => e.id !== todo.id ))
    }

    const completeHandler = () =>
    {
        setTodos(todos.map((element) => 
        {
            if(element.id === todo.id) return {...element, completed: !todo.completed}
            return element;
        }))
    }

    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{todo.text}</li>
            <button className="complete-btn" onClick={completeHandler}>
                <i className="fas fa-check"/>
            </button>
            <button className="trash-btn" onClick={deleteHandler}>
                <i className="fas fa-trash"/>
            </button>
        </div>
    );
}

export default Todo;