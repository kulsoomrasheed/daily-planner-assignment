import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import SearchBar from './components/SearchBar';
import BackToTop from './components/BackToTop';
import { getTasks, saveTasks } from './utils/storage';

function App() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setTasks(getTasks());
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const handleAdd = ({ text, category }) => {
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text,
        category,
        completed: false,
      },
    ]);
  };

  const handleToggle = id => {
    setTasks(tasks =>
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDelete = id => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const handleClearAll = () => {
    if (window.confirm('Clear all tasks?')) setTasks([]);
  };

  const handleSearch = useCallback((value) => {
    setSearch(value);
  }, []);

  const filteredTasks = tasks.filter(
    t =>
      t.text.toLowerCase().includes(search.toLowerCase()) ||
      t.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <header className="main-header">
        <h1>My Daily Planner</h1>
      </header>
      <main>
        <TaskForm onAdd={handleAdd} />
        <SearchBar onSearch={handleSearch} />
        <TaskList
          tasks={filteredTasks}
          onToggle={handleToggle}
          onDelete={handleDelete}
          onClearAll={handleClearAll}
        />
      </main>
      <BackToTop />
      <footer className="footer">&copy; {new Date().getFullYear()} Daily Planner</footer>
    </div>
  );
}

export default App;
