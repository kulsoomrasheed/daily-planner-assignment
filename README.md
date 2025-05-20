# Daily Planner

A simple, modern web application for managing your daily tasks. Built with React, it allows you to add, complete, delete, search, and categorize tasks. All tasks are saved in your browser for persistence.

## Features

- **Add Tasks:** Enter a task and select a category (Personal, Work, Study).
- **Task List:** View all tasks, mark as complete (with strikethrough), or delete them.
- **Search:** Filter tasks by text or category with a debounced search bar.
- **Categories:** Organize tasks by category.
- **Clear All:** Remove all tasks with one click.
- **Back to Top:** Button appears on scroll for easy navigation (throttled for performance).
- **Persistent Storage:** Tasks are saved in your browser's localStorage.
- **Responsive Design:** Works well on desktop and mobile.

## Project Structure

- `src/App.js` — Main app logic and layout.
- `src/components/TaskForm.js` — Add task form.
- `src/components/TaskList.js` — List of tasks.
- `src/components/TaskItem.js` — Single task item.
- `src/components/SearchBar.js` — Search input.
- `src/components/BackToTop.js` — Back to Top button.
- `src/utils/storage.js` — LocalStorage helpers.
- `src/utils/debounce.js` — Debounce utility.
- `src/utils/throttle.js` — Throttle utility.
- `src/App.css` — Main styles.

## Setup & Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd daily-planner
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm start
   ```
   The app will open at [http://localhost:3000](http://localhost:3000).

4. **Build for production:**
   ```bash
   npm run build
   ```
   The optimized build will be in the `build/` folder.

## Usage
- Add a new task using the input and select a category.
- Use the search bar to filter tasks by text or category.
- Mark tasks as complete by checking the box.
- Delete individual tasks or clear all tasks.
- Use the "Back to Top" button when scrolling down.

## Code Quality
- The codebase is modular, clean, and well-documented.
- Each component and utility is separated for clarity and maintainability.

---

Feel free to customize and extend the planner for your needs!
