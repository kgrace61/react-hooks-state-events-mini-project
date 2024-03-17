import React from "react";
import Task from "./Task.js"


function TaskList({ onDelete, tasks }) {
  const taskElements = tasks.map(task => (
    <Task key={task.text} task={task} text={task.text} category={task.category} onDelete={onDelete} />
  ))
  return (
    <div className="tasks">
      {taskElements}
    </div>
  );
}

export default TaskList;
