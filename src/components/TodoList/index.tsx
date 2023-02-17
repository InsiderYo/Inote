import React, { FC } from 'react';
import TodoItem from '../TodoItem';
import { TodoItemType } from '../../store/reducers/todos/types';
import { useDispatch } from 'react-redux';
import styles from './index.module.css';


interface IProps {
  todos: TodoItemType[];
}

const TodoList: FC<IProps> = ({ todos }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.root}>
      {todos.map((item) => (
        <div className={styles.card}>
          <TodoItem
            key={item.id}
            todo={item}
          />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
