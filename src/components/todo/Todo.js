import React, { useState } from "react";

import "./todo.scss";


function CreateTask({ addTask }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTask(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        placeholder="Add a new task"
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}






function Task({ task }) {
  return (
    <div
      className="task"
      style={{ textDecoration: task.completed ? "line-through" : "" }}
    >
      <h2>{task.title}</h2>

   
    </div>
  );
}

function Todo() {
  const [tasks, setTasks] = useState([
    {
      title: "Grab some Pizza",
     
      completed: true,
    },
    {
      title: "Do your workout",
    
      completed: true,
    },
    {
      title: "Hangout with friends",
    
      completed: false,
    },
  ]);

  const addTask = title => {
    const newTasks = [...tasks, { title, completed: false }];
    setTasks(newTasks);
};



  return (
    <div className="todo">
      <h2>This is a Todo list.</h2>
      <div className="todo-container">
        <div className="header">ToDo - Items </div>
        <div className="tasks">
          {tasks.map((task, index) => (
            <Task task={task} index={index} key={index} />
          ))}


             <div className="create-task" >
                    <CreateTask addTask={addTask} />
                </div>

                
        </div>
      </div>
    </div>
  );
}

export default Todo;
