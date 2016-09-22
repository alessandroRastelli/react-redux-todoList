import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import store from './store';
import View from './view';
import {addTodoAction, removeTodoAction, doneTodoAction, undoneTodoAction} from './actions';


function mapStateToProps(reduxState) {
  return {
    todos: reduxState.todos,
    dones: reduxState.dones
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: bindActionCreators(addTodoAction, dispatch),
    removeTodo: bindActionCreators(removeTodoAction, dispatch),
    doneTodo: bindActionCreators(doneTodoAction, dispatch),
    undoneTodo: bindActionCreators(undoneTodoAction, dispatch)
  }
}

let ViewConnected = connect(mapStateToProps, mapDispatchToProps)(View);

ReactDOM.render(
  React.createElement(ViewConnected, {store: store}),
  document.getElementById('app')
);

window.store = store;
window.addTodoAction = addTodoAction;
window.doneTodoAction = doneTodoAction;
window.undoneTodoAction = undoneTodoAction;