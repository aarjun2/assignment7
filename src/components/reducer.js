const initialState = {
    todos: []
  };
  
  const Reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          ...state,
          todos: [...state.todos, action.todo]
        };
      case 'TOGGLE_TODO':
        return {
          ...state,
          todos: state.todos.map((todo, index) =>
            index === action.index ? { ...todo, completed: !todo.completed } : todo
          )
        };
      default:
        return state;
    }
  };
  
  export default Reducer;