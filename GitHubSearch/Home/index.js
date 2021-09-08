import React, { Component } from 'react';
import SearchUser from '../../AComponents/SearchUser';
import axios from 'axios';
import { UserList } from '../../AComponents/UsersList';
import userAPI from '../../AService-goiAPI/user';


export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            users : [],
            isLoading: false,
        }
    }
    async componentDidMount(){
        try {
            this.setState ({
                isLoading: true,
            })
            const response = await userAPI.fetchUser();
            this.setState ({
                users : response.data,
                isLoading: false,
            });
        } catch (error) {
            console.log(error);
        }
       
    }

    render() {
        const { users } = this.state
        return (
            <div>
               <UserList users={users} />
            </div>
        )
    }
}
