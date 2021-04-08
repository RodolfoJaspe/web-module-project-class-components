import React from 'react'
import './Todo.css'

class Todo extends React.Component {
    render (){
        return (
            <div onClick={() => this.props.toggleTodo(this.props.todo.id)} className={`todo${this.props.todo.completed ? ' completed' : ''}`}>
                <h3>{this.props.todo.task}</h3>
            </div>
        )
    }
}
export default Todo

