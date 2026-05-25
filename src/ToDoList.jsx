import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([
    "Eat Breakfast",
    "Take a shower",
    "Walk the dog",
  ]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {}

  function deleteTask() {}

  function moveTaskUp(index) {}

  function moveTaskDown(index) {}
  return (
    <div>
      <h1>To-do-lost</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task"
          value={newTask}
          onChange={handleInputChange}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{tasks}</span>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
