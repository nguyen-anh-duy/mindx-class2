import React, {Component} from "react";

export default class DemoState extends Component {
    constructor(props){
        super(props);
        this.state = {
            isAuthenticated: false,
        };
        this.username = "duy"
    };
    onLogin = () => {
        this.setState({
            isAuthenticated: true,
        })
    };
    onLogout = () => {
        this.setState({
            isAuthenticated: false,
        })
    };
    render (){
        return (
            <div>
                { this.state.isAuthenticated ? (<div>
                <p>Hello {this.username}</p>
                <button onClick = {this.onLogout} >log out</button></div>)
                :(<button onClick = {this.onLogin} >click to log in </button>)
                }  
            </div>
        )
    }
}