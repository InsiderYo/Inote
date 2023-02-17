import React, { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  deletePermanentlyAction,
  putIsDone,
  putRemoveTodo,
  setCurrentTodoId,
} from '../../store/reducers/todos/actions';
import { TodoItemType } from '../../store/reducers/todos/types';
import styles from './index.module.css';
import Checkbox from '@mui/material/Checkbox';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import EditIcon from '@mui/icons-material/Edit';
import QueryBuilderOutlinedIcon from '@mui/icons-material/QueryBuilderOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import moment from 'moment';

interface IProps {
  todo: TodoItemType;
}

const TodoItem: FC<IProps> = ({ todo }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [visibility, setVisability] = useState(styles.display);

  const handleSubmit = () => {
    dispatch(setCurrentTodoId(todo.id));
    navigate('/edit');
  };

  const changeDeleteBtns = () => {
    if (location.pathname === '/') {
      dispatch(putRemoveTodo(todo.id));
    } else {
      dispatch(deletePermanentlyAction(todo.id));
      setVisability(styles.display_none);
      setVisability(styles.display_none);
    }
  };

  useEffect(() => {
    if (location.pathname === '/') {
      setVisability(styles.display);
    } else {
      setVisability(styles.display_none);
    }
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.data}>
        <div className={styles.data_top}>
          <div className={visibility}>
            <Checkbox
              checked={todo.isDone}
              inputProps={{ 'aria-label': 'controlled' }}
              onClick={() => dispatch(putIsDone(todo.id))}
            />
          </div>
          {todo.title}  
          <div className={visibility}>
            <EditIcon
              style={{ color: '#a8a8a8' }}
              onClick={handleSubmit}
            />
          </div>
        </div>
        <div className={styles.disc}>{todo.description}</div>
      </div>
      <div className={styles.btns}>
        <div className={styles.date}>
          <QueryBuilderOutlinedIcon
            style={{ fontSize: '20px', color: '#a8a8a8' }}
          />
           {moment(todo.startDate).format('ll')}   
          <CheckCircleOutlineOutlinedIcon
            style={{ fontSize: '20px', color: '#a8a8a8' }}
          />
           {moment(todo.endDate).format('ll')}
        </div>
        <div>
          <DeleteForeverOutlinedIcon
            style={{ fontSize: '30px', color: '#a8a8a8' }}
            onClick={changeDeleteBtns}
          />
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
