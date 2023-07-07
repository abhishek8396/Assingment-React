import React, { useState } from 'react';
import './Todoapp.css';
function Todoapp() {
  const [tasks, setTasks] = useState([]); // State to store the tasks
  const [newTask, setNewTask] = useState(''); // State to store the new task input value

  // Function to add a new task to the list
  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { title: newTask, completed: false }]);
      setNewTask('');
    }
  };

  // Function to mark a task as completed
  const completeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = true;
    setTasks(updatedTasks);
  };

  // Function to remove a task from the list
  const removeTask = (index) => {
    const removeTasks = [...tasks];
    removeTasks.splice(index, 1);
    setTasks(removeTasks);
  };

  // Calculate the number of completed tasks
  const completedTasksCount = tasks.filter((task) => task.completed).length;

  return (
    <div className='todo'>
      <h1>To-Do List</h1>

      {/* Display the total number of tasks */}
      <p>Total tasks: {tasks.length}</p>

      {/* Display the number of completed tasks */}
      <p>Completed tasks: {completedTasksCount}</p>

      {/* Display the list of tasks */}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span
              style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            >
              {task.title}
            </span>
            {!task.completed && (
              <button onClick={() => completeTask(index)}>Complete</button>
            )}
            <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    <div className="form-fill">
      {/* Add new task input */}
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
    </div>
      
    </div>
  );
}

export default Todoapp;
