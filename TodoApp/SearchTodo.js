import React, { Component } from 'react'
import "./TodoApp.css";

export default class SearchTodo extends Component {
    state = {
        query: "",
    };
    onQueryChange = (e) => {
        this.setState ({
            query: e.target.value
        });
        this.props.onQueryTodo(e.target.value); 
        // ko để this.state.query vô đây vì máy chưa set state xong mà chạy luôn onQueryTodo rồi
    }
    onClear = (e) => {
        this.setState ({
            query: "",
        });
        this.props.onQueryTodo(e.target.value);
    }
    render() {
        return (
            <div>
                <label style={{
                    fontWeight: "bold",
                }} >
                    <span>Filter task by name</span>
                    <div className="fg" >
                    <input type="text" value={this.state.query} onChange={this.onQueryChange} />
                    <button onClick={this.onClear} >Clear</button>
                    </div> 
                </label>
            </div>
        )
    }
}
