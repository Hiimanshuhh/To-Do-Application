# 📝 To-Do Application

A simple and interactive To-Do List application built with React. This project demonstrates essential React concepts like state management, component composition, input validation, conditional rendering, and the use of localStorage to persist data.

## ✨ Features

- ✅ Add new tasks with input validation
- ❌ Remove tasks from the list
- ✔️ Mark tasks as completed or pending
- 🔍 Filter tasks by status (All / Completed / Pending)
- 🔃 Sort tasks alphabetically or by creation time
- 💾 Persist tasks using `localStorage`
- ⚡ Responsive and dynamic UI with clean UX
  
## 🧪 Testing Guide

After running the app locally, you can test its functionality by following this checklist:

1. ✅ **Add Task:**
   - Type a valid task in the input field and click “Add” or press Enter.
   - The task should appear in the task list below.

2. 🚫 **Input Validation:**
   - Try submitting an empty task or spaces only.
   - The app should prevent submission and show an error or warning.

3. ✔️ **Mark as Completed:**
   - Click the checkbox or completion toggle for a task.
   - The task should visually update (e.g., strikethrough).

4. ❌ **Delete Task:**
   - Click the Cross icon on a task.
   - The task should be removed from the list.

5. 🔍 **Filter & Sort:**
   - Use the filtering options (e.g., All / Active / Completed).
   - Try sorting tasks alphabetically.

6. 🔁 **Persistence:**
   - Refresh the page.
   - All previously added tasks should remain (thanks to `localStorage`).

> You can also open Developer Tools → Application → LocalStorage to verify tasks are saved properly.

  
## 📸 File Structure

```bash

├── 📁 node_modules/
├── 📁 public/
├── 📁 src/
│   ├── 📁 Components/
│   │   ├── ⚛️ AddTodo.jsx
│   │   ├── ⚛️ TodoItem.jsx
│   │   └── ⚛️ TodoList.jsx
│   ├── ⚛️ App.jsx
│   ├── 🎨 index.css
│   └── ⚛️ main.jsx
├── 🚫 .gitignore
├── ⚙️ eslint.config.js
├── 🌐 index.html
├── 🔒 package-lock.json
├── 📦 package.json
├── 📖 README.md
└── ⚡ vite.config.js
```


## 🛠️ How to Run

Follow these steps to run the project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/react-todo-list.git](https://github.com/Hiimanshuhh/To-Do-Application.git
   cd To-Do App
   ```
2. **Install Dependencies**
    ```bash
   npm intall
   ```
3. **Start Development Server**
   ```bash
   npm run dev
