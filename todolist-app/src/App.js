import 'bootstrap/dist/css/bootstrap.min.css'; 
/* Importe o Bootstrap CSS */

import React, { useState } from 'react';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const addTodo = () => {
    if (task.trim() !== '') {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Nova tarefa"
        />
        <button onClick={addTodo}>Adicionar</button>
      </div>
      <TodoList todos={todos} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
