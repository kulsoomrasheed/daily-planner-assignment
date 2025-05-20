import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onToggle, onDelete, onClearAll }) {
  return (
    <section className="task-list" aria-label="Task List">
      <div className="task-list-header">
        <h2>Tasks</h2>
        {tasks.length > 0 && (
          <button className="clear-all" onClick={onClearAll}>Clear All Tasks</button>
        )}
      </div>
      <ul>
        {tasks.length === 0 ? (
          <li className="empty">No tasks found.</li>
        ) : (
          tasks.map(task => (
            <TaskItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
          ))
        )}
      </ul>
    </section>
  );
}

export default TaskList; 