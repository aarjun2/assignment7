import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo,toggleTodo } from './components/Action';

function App() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = (event) => {
    event.preventDefault();
    const description = event.target.todo.value;
    dispatch(addTodo({
      description,
      completed: false
    }));
    event.target.todo.value = '';
  };

  const handleToggleTodo = (index) => {
    dispatch(toggleTodo(index));
  };

  return (
    <div>
      <h1>Todo App</h1>
      <form onSubmit={handleAddTodo}>
        <input type="text" name="todo" placeholder="Add a todo" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            onClick={() => handleToggleTodo(index)}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            {todo.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;