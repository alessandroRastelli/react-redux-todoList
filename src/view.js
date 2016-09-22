import React from 'react';

class TodoView extends React.Component {

  constructor(props) {
    super(props);
    console.log(props)
    this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
  }

  handleRemoveTodo(todo) {
    this.props.removeTodo( todo );
  }

  handleDoneTodo(index){
    this.props.doneTodo( index );
  }

  handleUnDoneTodo(index){
    this.props.undoneTodo( index );
  }
  render() {
    return (
      <div>
        <div style={{display: "inline-flex", width: "100%"}}>
          <div style={{ width: "100%"}}>
            <h1>TODO List</h1>

            <ul className="list-group">
              {this.props.todos.map((todo,i)=>
                <li className="list-group-item">{todo}
                  <button className="btn btn-danger" style={{margin: "7px"}} onClick={event => this.handleRemoveTodo(i)}> DELETE</button>
                  <button className="btn btn-success" style={{margin: "7px"}} onClick={event => this.handleDoneTodo(i)}> DONE</button>
                </li>
              )}
            </ul>
          </div> 
          <div style={{ width: "100%"}}>
            <h1>DONE List</h1>
            <ul className="list-group">
              {this.props.dones.map((todo,i)=>
                <li className="list-group-item">{todo}
                  <button className="btn btn-primary" style={{margin: "7px"}} onClick={event => this.handleUnDoneTodo(i)}> TODO</button>
                </li>
              )}
            </ul>
          </div> 
        </div>
        <div style = {{display: "flex", width: "100%"}}>
          <h2 style ={{width: "50%"}}>Todos : {this.props.todos.length}</h2>
          <h2>Done : {this.props.dones.length}</h2>
        </div>
      </div>
    )
  }
}

class TodoInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {text: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleChange(event) {
    this.setState({text: event.target.value});
  }

  handleAddTodo() {
    let item = String(this.state.text);
    this.props.addTodo( item );
    this.setState({text: ""})
    
  }

  render() {
    return (
    <div style={{display: "inline-flex", width: "100%"}}>
      <div className="form-group" style ={{width: "100%"}}>
        <label for="usr">Todo: </label>
        <input type="text" className="form-control" style={{width: "100%"}} onChange={event => this.handleChange(event)} value={this.state.text} />
      </div>
      <div>
        <button style ={{ margin: "23px"}} className="btn btn-primary" onClick={event => this.handleAddTodo()}>Add Todo</button>
      </div>
     </div>
    )
  }
}

let View = function(props){
  return (
    <div>
      <TodoInput addTodo={props.addTodo}></TodoInput>
      <TodoView todos={props.todos}  dones={props.dones} removeTodo={props.removeTodo} doneTodo={props.doneTodo} undoneTodo={props.undoneTodo}/>
    </div>
  )
};


export default View;