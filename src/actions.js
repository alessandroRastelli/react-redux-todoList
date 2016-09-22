export function addTodoAction(item) {
  return {
    type: "ADD_TODO",
    item
  }
}

export function removeTodoAction(item) {
  return {
    type: "REMOVE_TODO",
    item
  }
}

export function doneTodoAction(item) {
  return {
    type: "DONE_TODO",
    item
  }
}

export function undoneTodoAction(item) {
  return {
    type: "UNDONE_TODO",
    item
  }
}