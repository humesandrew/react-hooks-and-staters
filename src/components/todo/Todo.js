import React, {useState} from 'react';

import "./todo.scss";

    
function Task({ task }) {
    return (
        <div
            className="task"
            style={{ textDecoration: task.completed ? "line-through" : "" }}
        >
           <h2>{task.title}</h2>
       
           <p>{task.message}</p> 
        </div>
    );
}

function Todo() {
    const [tasks, setTasks] = useState([
        {
            title: "Grab some Pizza",
            message: "I like Marco's.",
            completed: true
        },
        {
            title: "Do your workout",
            message: "Get on it fatty.",
            completed: true
        },
        {
            title: "Hangout with friends",
            message: "Totes.",
            completed: false
        }
    ]);
    return (
        <div className="todo"><h2>This is a Todo list.</h2>
        <div className="todo-container">
            <div className="header">ToDo - Items </div>
            <div className="tasks">
                {tasks.map((task, index) => (
                    <Task
                        task={task}
                        index={index}
                        key={index}
                    />
                ))}
            </div>
        </div>
        </div>
    );
}

export default Todo;