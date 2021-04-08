import React from 'react';
import "./TodoForm.css"

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            todo : ""
        }
    }

    changeHandler = e => {
        this.setState({
            ...this.state, todo: e.target.value
        })
    }

    submitTodo = e => {
        e.preventDefault();
        this.props.addTodo(this.state.todo)
        this.setState({todo: ""})
    }

    render (){
        return (
            <div className="formdiv">
                <form onSubmit={this.submitTodo} className="form">
                     <input name="todo" value={this.state.todo} onChange={this.changeHandler} />
                    <button>Add Todo</button>
                </form>
                <button onClick={this.props.clearCompleted}>Clear Completed</button>
            </div>
        )
    }
}
export default TodoForm