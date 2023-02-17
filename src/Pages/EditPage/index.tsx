import moment from 'moment';
import React, { FC, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  addTodo,
  editAction,
  setCurrentTodoId,
} from '../../store/reducers/todos/actions';
import { TodoItemType } from '../../store/reducers/todos/types';
import currentTodoSelector from '../../store/selectors/currentTodoSelector';
import styles from './index.module.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { v4 as uuidv4 } from 'uuid';

const EditPage: FC = () => {
  const navigate = useNavigate();
  var today = new Date();

  const newFormatToday =
    today.getFullYear() +
    '-' +
    ('0' + (today.getMonth() + 1)).slice(-2) +
    '-' +
    ('0' + today.getDate()).slice(-2);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState(newFormatToday);
  const [endDate, setEndDate] = useState(newFormatToday);

  const dispatch = useDispatch();
  const currentTodo = useSelector(currentTodoSelector);

  const handleSubmit = () => {
    if (currentTodo) {
      dispatch(
        editAction({
          ...currentTodo,
          title,
          description,
          startDate: startDate,
          endDate: endDate,
        })
      );
    } else {
      const data: TodoItemType = {
        id: uuidv4(),
        title,
        description,
        startDate: startDate,
        endDate: endDate,
        isDelete: false,
        isDone: false,
      };
      dispatch(addTodo(data));
    }
    setTitle('');
    setDescription('');
    setStartDate('');
    setEndDate('');
    navigate('/');
  };

  useEffect(() => {
    if (currentTodo) {
      setTitle(currentTodo.title);
      setDescription(currentTodo.description);
      setStartDate(currentTodo.startDate);
      setEndDate(currentTodo.endDate);
    }
  }, [currentTodo]);

  useEffect(() => {
    return () => {
      if (currentTodo) {
        dispatch(setCurrentTodoId(null));
      }
    };
  }, []);

  return (
    <div className={styles.root}>
      Заголовок
      <input
        className={styles.input_title}
        name="title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      Описание
      <input
        className={styles.input_disc}
        name="description"
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div className={styles.input_date}>
        <input
          name="startDate"
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          name="endDate"
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
      <div className={styles.btn_submit}>
        <CheckCircleIcon
          style={{ fontSize: '35px', color: '#3d79b0' }}
          onClick={handleSubmit}
        />
        <CancelIcon
          style={{ fontSize: '35px', color: '#b3716d' }}
          onClick={() => navigate('/')}
        />
      </div>
    </div>
  );
};

export default EditPage;
