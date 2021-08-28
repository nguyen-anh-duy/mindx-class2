import React, { Component } from 'react'
import "./TodoApp.css";

export default class TodoItem extends Component {
    render() {
        const {id, title, isComplete} = this.props.todoItem;
        return (
            <li className={isComplete ? "done" : ""} >
                {title}
                {<button>Edit</button>}
                {!isComplete && <button onClick={()=>this.props.onHandleTodo(id,true)} >Delete</button> }
                {isComplete && <button onClick={()=>this.props.onHandleTodo(id,false)} >Restore</button> }
            </li>
        )
    }
}
