import React from 'react';

function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className={`task-item${task.completed ? ' completed' : ''}`}> 
      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          aria-label={`Mark ${task.text} as completed`}
        />
        <span className="task-text">{task.text}</span>
        <span className="task-category">[{task.category}]</span>
      </label>
      <button className="delete" onClick={() => onDelete(task.id)} aria-label={`Delete ${task.text}`}>✕</button>
    </li>
  );
}

export default TaskItem; 