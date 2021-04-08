// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import { render } from '@testing-library/react';
import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
    render (){
        return (
            <div>
                <div>
                {this.props.todos.map(todo => 
                 <Todo todo={todo} key={todo.id} toggleTodo={this.props.toggleTodo}/>)} 
                </div>
            </div>
        )
    }
}
export default TodoList

