import { Dispatch } from 'redux';
import {
  deletePermanently,
  editTodo,
  getAllTodos,
  postTodo,
  putChangeIsDone,
  putRemoveTodoToTrash,
} from '../../../mock/mockApi';
import * as actionTypes from './actionTypes';
import { TodoItemType } from './types';

export const addTodo = (payload: TodoItemType) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: actionTypes.ADD_TODO_REQUEST });
    try {
      const response = await postTodo(payload);
      if (response.status === 204) {
        return dispatch({
          type: actionTypes.ADD_TODO_SUCCSESS,
          payload: response.data,
        });
      }
      return dispatch({ type: actionTypes.ADD_TODO_FAILURE });
    } catch (error) {
      return dispatch({ type: actionTypes.ADD_TODO_FAILURE });
    }
  };
};

export const getTodos = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: actionTypes.GET_TODOS_REQUEST });
    try {
      const response = await getAllTodos();
      if (response.status === 200) {
        return dispatch({
          type: actionTypes.GET_TODOS_SUCCSESS,
          payload: response.data,
        });
      }
      return dispatch({ type: actionTypes.GET_TODOS_FAILURE });
    } catch (error) {
      return dispatch({ type: actionTypes.GET_TODOS_FAILURE });
    }
  };
};

export const putRemoveTodo = (itemId: string) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: actionTypes.REMOVE_TODOS_TO_TRASH_REQUEST });
    try {
      const response = await putRemoveTodoToTrash(itemId);
      if (response.status === 200) {
        return dispatch({
          type: actionTypes.REMOVE_TODOS_TO_TRASH_SUCCSESS,
          payload: response.data,
        });
      }
      return dispatch({ type: actionTypes.REMOVE_TODOS_TO_TRASH_FAILURE });
    } catch (error) {
      return dispatch({ type: actionTypes.REMOVE_TODOS_TO_TRASH_FAILURE });
    }
  };
};

export const putIsDone = (itemId: string) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: actionTypes.PUT_CHANGE_IS_DONE_REQUEST });
    try {
      const response = await putChangeIsDone(itemId);
      if (response.status === 200) {
        return dispatch({
          type: actionTypes.PUT_CHANGE_IS_DONE_SUCCSESS,
          payload: response.data,
        });
      }
      return dispatch({ type: actionTypes.PUT_CHANGE_IS_DONE_FAILURE });
    } catch (error) {
      return dispatch({ type: actionTypes.PUT_CHANGE_IS_DONE_FAILURE });
    }
  };
};

export const deletePermanentlyAction = (itemId: string) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: actionTypes.DELETE_PERMANENTLY_REQUES });
    try {
      const response = await deletePermanently(itemId);
      if (response.status === 200) {
        return dispatch({
          type: actionTypes.DELETE_PERMANENTLY_SUCCSESS,
          payload: response.data,
        });
      }
      return dispatch({ type: actionTypes.DELETE_PERMANENTLY_FAILURE });
    } catch (error) {
      return dispatch({ type: actionTypes.DELETE_PERMANENTLY_FAILURE });
    }
  };
};

export const editAction = ( newTodo: TodoItemType ) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: actionTypes.EDIT_TODO_REQUEST });
    try {
      const response = await editTodo(newTodo);
      if (response.status === 200) {
        return dispatch({
          type: actionTypes.EDIT_TODO_SUCCSESS,
          payload: response.data,
        });
      }
      return dispatch({ type: actionTypes.EDIT_TODO_FAILURE });
    } catch (error) {
      return dispatch({ type: actionTypes.EDIT_TODO_FAILURE });
    }
  };
};

export const setCurrentTodoId = (payload: string | null) => ({
  type: actionTypes.SET_CURRENT_TODO_ID,
  payload,
});
