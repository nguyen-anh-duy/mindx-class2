import React, { Component } from 'react'
import AddNewTodo from './AddNewTodo';
import SearchTodo from './SearchTodo';
import "./TodoApp.css";
import TodoList from './TodoList';

export default class TodoApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos : [
                { id: 1, title: "pay bill", isComplete: true },
                { id: 2, title: "abc", isComplete: false },
                { id: 3, title: "def", isComplete: true },
                { id: 4, title: "ghi", isComplete: false },
                { id: 5, title: "rty", isComplete: false },
            ],
            query: ""
        }
    }
    onAddTodo = (newTodo) => {
        this.setState({
            todos: [...this.state.todos,newTodo ]
        })
    }
    onHandleTodo = (id,value) =>{
        // khi so sánh id truyền ra = id thì cập nhật lại isComplete thành false
        const updateTodos = this.state.todos.map((todoItem) => {
            return todoItem.id === id ? {...todoItem,isComplete: value } :todoItem
        })
        // set lại state todos thành updateTodos
        this.setState({
            todos: updateTodos,
        })
    }
    onQueryTodo = (newQuery) => {this.setState({ query: newQuery}) }
    render() {
        const { todos, query } = this.state;
        return (
            <div className="container" >
                <h1>To do App</h1>
                <SearchTodo 
                onQueryTodo = {this.onQueryTodo}
                />
                <TodoList 
                todos = {todos}
                onHandleTodo = {this.onHandleTodo}
                query = {query}
                />
                <AddNewTodo 
                onAddTodo = {this.onAddTodo}
                todos = {todos} 
                />
            </div>
        )
    }
}
