import React, { FC, useEffect, useState } from 'react';
import styles from './index.module.css';
import { useDispatch, useSelector } from 'react-redux';
import TodoList from '../../components/TodoList';
import 'moment/locale/ru';
import { useNavigate } from 'react-router-dom';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { getTodos } from '../../store/reducers/todos/actions';

const MainPage: FC = () => {
  const navigate = useNavigate();
  const todos = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.template}>
        <div className={styles.template_add}>Добавить заметку</div>
        <AddCircleIcon
          className={styles.circle}
          style={{ fontSize: '35px', color: '#3d79b0' }}
          onClick={() => navigate('/edit')}
        />
      </div>
      <TodoList todos={todos} />
    </div>
  );
};

export default MainPage;
