import React, { useState } from 'react';

const categories = ['Personal', 'Work', 'Study'];

function TaskForm({ onAdd }) {
  const [text, setText] = useState('');
  const [category, setCategory] = useState(categories[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd({ text, category });
      setText('');
      setCategory(categories[0]);
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit} aria-label="Add Task">
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Add a new task..."
        aria-label="Task description"
        required
      />
      <select value={category} onChange={e => setCategory(e.target.value)} aria-label="Category">
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      <button type="submit">Add</button>
    </form>
  );
}

export default TaskForm; 