import * as actionTypes from './actionTypes';
import { ITodoReducer, TodoItemType } from './types';
import moment from 'moment';

moment.locale('ru');

const initialState: ITodoReducer = {
  items: [],
  deletedItems: [],
  currentTodoId: null,
  isLoading: false,
};

export default (
  state: ITodoReducer = initialState,
  action: Action
): ITodoReducer => {
  switch (action.type) {
    case actionTypes.ADD_TODO_REQUEST: {
      return { ...state, isLoading: true };
    }
    case actionTypes.ADD_TODO_SUCCSESS: {
      const newTodo = action.payload as TodoItemType;

      return { ...state, items: [...state.items, newTodo], isLoading: false };
    }
    case actionTypes.ADD_TODO_FAILURE: {
      return { ...state, isLoading: false };
    }
    case actionTypes.GET_TODOS_REQUEST: {
      return { ...state, isLoading: true };
    }
    case actionTypes.GET_TODOS_SUCCSESS: {
      const allTodos = action.payload as TodoItemType[];

      return {
        ...state,
        items: allTodos.filter((todo) => !todo.isDelete),
        deletedItems: allTodos.filter((todo) => todo.isDelete),
        isLoading: false,
      };
    }
    case actionTypes.GET_TODOS_FAILURE: {
      return { ...state, isLoading: false };
    }
    case actionTypes.REMOVE_TODOS_TO_TRASH_REQUEST: {
      return { ...state, isLoading: true };
    }
    case actionTypes.REMOVE_TODOS_TO_TRASH_SUCCSESS: {
      const targetTodo = action.payload as TodoItemType;

      return {
        ...state,
        items: state.items.filter((todo) => todo.id !== targetTodo.id),
        deletedItems: [...state.deletedItems, targetTodo],
        isLoading: false,
      };
    }
    case actionTypes.REMOVE_TODOS_TO_TRASH_FAILURE: {
      return { ...state, isLoading: false };
    }
    case actionTypes.PUT_CHANGE_IS_DONE_REQUEST: {
      return { ...state, isLoading: true };
    }
    case actionTypes.PUT_CHANGE_IS_DONE_SUCCSESS: {
      const targetTodo = action.payload as TodoItemType;

      return {
        ...state,
        items: state.items.map((todo) =>
          todo.id === targetTodo.id ? targetTodo : todo
        ),
        isLoading: false,
      };
    }
    case actionTypes.PUT_CHANGE_IS_DONE_FAILURE: {
      return { ...state, isLoading: false };
    }
    case actionTypes.DELETE_PERMANENTLY_REQUES: {
      return { ...state, isLoading: true };
    }
    case actionTypes.DELETE_PERMANENTLY_SUCCSESS: {
      const targetTodoId = action.payload as string;

      return {
        ...state,
        deletedItems: state.deletedItems.filter(
          (todo) => todo.id !== targetTodoId
        ),
        isLoading: false,
      };
    }
    case actionTypes.DELETE_PERMANENTLY_FAILURE: {
      return { ...state, isLoading: false };
    }
    case actionTypes.EDIT_TODO_REQUEST: {
      return { ...state, isLoading: true };
    }
    case actionTypes.EDIT_TODO_SUCCSESS:
      const targetTodo = action.payload as TodoItemType;
      
      return {
        ...state,
        items: state.items.map((todo) =>
          todo.id === targetTodo.id ? targetTodo : todo
        ),
        isLoading: false,
      };
    case actionTypes.EDIT_TODO_FAILURE: {
      return { ...state, isLoading: false };
    }
    case actionTypes.SET_CURRENT_TODO_ID:
      const currentTodoId = action.payload as string | null;
      return {
        ...state,
        currentTodoId,
      };
    default:
      return state;
  }
};
