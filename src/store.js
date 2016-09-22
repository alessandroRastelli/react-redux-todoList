import {createStore} from 'redux';

let initialState = {
  todos: [],
  dones: []
};

function reducer(state, action) {
  state = state || initialState;

  switch (action.type) {

    case "ADD_TODO":
      return addTodo(state, action.item);
    
    case "REMOVE_TODO":
      return removeTodo(state, action.item);

    case "DONE_TODO":
      return doneTodo(state, action.item);

    case "UNDONE_TODO":
      return undoneTodo(state, action.item);

    default:
      return state;
  }
}

function addTodo(state, item) {
  if(item != "")
    state.todos.push(item);
  let change = { todos:[...state.todos] };

  return Object.assign({}, state, change);
}

function removeTodo(state, index) {
  state.todos.splice(index, 1)
  let change = { todos:[...state.todos] };

  return Object.assign({}, state, change);
}

function doneTodo(state, index) {
  state.dones.push(state.todos[index]);
  state.todos.splice(index, 1)
  let change = { todos:[...state.todos], dones:[...state.dones]  };
  
  return Object.assign({}, state, change);
}

function undoneTodo(state, index) {
  state.todos.push(state.dones[index]);
  state.dones.splice(index, 1)
  let change = { todos:[...state.todos], dones:[...state.dones]  };
  
  return Object.assign({}, state, change);
}

let middlewares = window.devToolsExtension ? window.devToolsExtension() : f => f;
let store = createStore(reducer, null, middlewares);

export default store;