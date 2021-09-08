import React, { Component } from 'react';
import axios from 'axios';

export default class UserDetail extends Component {
    state = {
        user: {},
    }
    componentDidMount(){
        const login = this.props.match.params.login;
        const response = axios.get(`https://api.github.com/users/${login}`);
        this.setState({
            user : response.data
        })
    }
    render() {
        return (
            <div>
                userDetail
            </div>
        )
    }
}
