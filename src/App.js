import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import '../src/components/TodoComponents/Todo.css'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super() 
    this.state = {
      tasks: [{}],
      inputText: '',
      completed: false,
      id: Date.now()
    }
  }

  handleChange = e => {
    this.setState({
    [e.target.name]:e.target.value
  })
  }

  lineThrough = id => {
    this.setState({
      tasks:this.state.tasks.map(task => {
        if(task.id === id) {
          return ({...task, completed: !task.completed})
        }
        else {
          return task
        }
      })
    })
  }

 addTask = e => {
   e.preventDefault()
   this.setState({
     tasks: [...this.state.tasks, {task: this.state.inputText,
    id: Date.now(),
    completed: false}],
    inputText: ''
 })
 }

 clearComplete = (e) => {
  e.preventDefault();
  this.setState({
    tasks: this.state.tasks.filter(task => task.completed === false)
  })
 };




  render() {
    return (
      <div className='App'>
      <div className='header'>
        <h2>ToDo List</h2>
        <i class="fas fa-pen"></i>
      </div>
        <TodoForm inputText={this.state.inputText} handleChange={this.handleChange}
        clearComplete={this.clearComplete} addTask={this.addTask}
        />
        <TodoList todo={this.state.tasks} lineThrough={this.lineThrough}></TodoList>
      </div>
    );
  }
}

export default App;
