import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import "./App.css"

const todos = [ 
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    }
  ]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor () {
      super();
      this.state = {
          todos : todos
      }
  }

  toggleTodo = todoId => {
      const updatedTodos = this.state.todos.map(todo => {
          if(todoId === todo.id) {
            return {...todo, completed : !todo.completed}
          }
          return todo
      })
      console.log("updated todos", updatedTodos)
      this.setState({...this.state,
      todos: updatedTodos})
  }

  addTodo = newTodo => {
      console.log(newTodo)
      this.setState({
          ...this.state, 
          todos : [...this.state.todos, {
              task: newTodo,
              id: Date.now(),
              completed: false
          }]
      })

  }

  clearCompleted = () => {
      this.setState({
          ...this.state,
          todos : this.state.todos.filter(todo => !todo.completed)
      })
  }

  render() {
    return (
      <div className="app">
          <h1>To-do List</h1>
        <TodoForm 
            addTodo={this.addTodo}
            clearCompleted={this.clearCompleted}
             />
        <TodoList 
            todos={this.state.todos} 
            toggleTodo={this.toggleTodo}
            />
      </div>
    );
  }
}

export default App;
