import { Todo } from '../types/Todo';
import * as React from 'react';

type Props = {
  todos: Todo[];
  filteredTodos: Todo[];
  deleteTodo: (id: number) => void;
};

export const MainTodo: React.FC<Props> = ({
  todos,
  filteredTodos,
  deleteTodo,
}) => {
  return (
    <section
      className={`todoapp__main ${todos.length === 0 ? 'hidden' : ''}`}
      data-cy="TodoList"
    >
      {filteredTodos.map(todo => (
        <div
          key={todo.id}
          data-cy="Todo"
          className={todo.completed ? 'todo completed' : 'todo'}
          // eslint-disable-next-line react/jsx-no-comment-textnodes
        >
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label className="todo__status-label">
            <input
              data-cy="TodoStatus"
              type="checkbox"
              className="todo__status"
              checked={todo.completed}
            />
          </label>
          <span data-cy="TodoTitle" className="todo__title">
            {todo.title}
          </span>
          <button
            type="button"
            className="todo__remove"
            data-cy="TodoDelete"
            onClick={() => deleteTodo(todo.id)}
          >
            ×
          </button>
          <div data-cy="TodoLoader" className="modal overlay">
            <div className="modal-background has-background-white-ter" />
            <div className="loader" />
          </div>
        </div>
      ))}
    </section>
  );
};
