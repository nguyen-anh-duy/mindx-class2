import React, { Component } from 'react'

export default class AddNewTodo extends Component {
    state = {
        todoTitle: ""
    }
    onTodoChange = (e) => {
        this.setState ({
            todoTitle: e.target.value
        })
    }
    btnAddTodo = () => {
        const newTodo = {
            id: this.props.todos.length+1, 
            title: this.state.todoTitle , 
            isComplete: false,
        }
        this.setState({
            todoTitle: "",
        })
        this.props.onAddTodo(newTodo);
    }
    render() {
        return (
            <div>
                <h3>Add new todo</h3>
                <div className="fg" >
                    <input type="text" value={this.state.todoTitle} onChange={this.onTodoChange} />
                    <button onClick={this.btnAddTodo} >Add</button>
                </div>
                
            </div>
        )
    }
}
