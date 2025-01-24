import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Corrigido o nome de useDispach para useDispatch
import { toggleTodo, removeTodo } from '../slices/todoSlice';

const TodoList = () => {
  const { list, filter } = useSelector((state) => state.todos);

  const dispatch = useDispatch(); // Corrigido o nome de useDispach para useDispatch

  const filterdList = list.filter((todo) => {
    if (filter === 'all') return true;
    if (filter === 'completed') return todo.completed;
    if (filter === 'incomplete') return !todo.completed;
    return true;
  });
  return (
    <div>
      <button onClick={() => dispatch(filterTodos('all'))}>Todas</button>
      <button onClick={() => dispatch(filterTodos('completed'))}>
        Completas
      </button>
      <button onClick={() => dispatch(filterTodos('incomplete'))}>
        Incompletas
      </button>
      <ul>
        {filterdList.map((todo) => (
          <li key={todo.id}>
            <span
              onClick={() => dispatch(toggleTodo(todo.id))}
              className={todo.completed ? 'line-through' : null} // Corrigido 'line-trough' para 'line-through'
            >
              {todo.text}
            </span>
            <button onClick={() => dispatch(removeTodo(todo.id))}>
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
