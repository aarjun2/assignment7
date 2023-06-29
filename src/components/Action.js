export const addTodo = (todo) => {
    return {
      type: 'ADD_TODO',
      todo
    };
  };
  
  export const toggleTodo = (index) => {
    return {
      type: 'TOGGLE_TODO',
      index
    };
  };