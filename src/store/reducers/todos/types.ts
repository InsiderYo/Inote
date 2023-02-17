export interface ITodoReducer {
  items: TodoItemType[];
  deletedItems: TodoItemType[];
  currentTodoId: string | null;
  isLoading: boolean;
}

export type TodoItemType = {
  id: string;
  title: string;
  description: string;
  isDone: boolean;
  isDelete: boolean;
  startDate: string;
  endDate: string;
};

export type AddTodoResponse = {};
