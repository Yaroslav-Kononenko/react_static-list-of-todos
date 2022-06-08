import React from 'react';
import { Todo } from '../../interfaces/Todo';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import './TodoList.scss';

type Props = {
  todoes: Todo[],
};

export const TodoList: React.FC<Props> = ({ todoes }) => (
  <ul className="list">
    {
      todoes.map((todo) => (
        <li className="list__item item" key={todo.id}>
          {todo.user
          && (
            <TodoInfo todo={todo} />
          )}
        </li>
      ))
    }
  </ul>
);