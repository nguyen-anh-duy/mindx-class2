import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
    render() {
        const { todos, onHandleTodo, query } = this.props
        return (
            <div>
                <h3>To do</h3>
                <ul>
                    {
                        todos.length>0 ? 
                        todos.filter((todoItem) => {
                            return todoItem.title.toLowerCase().includes(query.toLowerCase());
                        })
                        .map((todoItem) => { 
                            return <TodoItem 
                            todoItem ={todoItem} key={todoItem.id} onHandleTodo={onHandleTodo} />
                        }) : <p>Add your task</p>
                    }
                </ul>
            </div>
        )
    }
}
