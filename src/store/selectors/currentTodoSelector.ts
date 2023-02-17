const currentTodoSelector = (state: State) => {
  const currentTodoId = state.todos.currentTodoId;
  return state.todos.items.find((item) => item.id === currentTodoId);
};

export default currentTodoSelector;
