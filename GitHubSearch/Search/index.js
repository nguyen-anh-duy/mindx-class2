import React, { Component } from 'react';
import SearchUser from '../../AComponents/SearchUser';
import axios from 'axios';
import { UserList } from '../../AComponents/UsersList';
import userAPI from '../../AService-goiAPI/user';

export default class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            users : [],
            isLoading: false,
            isShowButtonClear: false,
        }
    }
    // cách 2 dùng asyn await để gọi API
    fetchUser = async (search) => {
        try {
            this.setState ({
                isLoading: true,
            })
            const response = await userAPI.searchUser(search);
            this.setState ({
                 users : response.data.items,
                 isLoading: false,
                 isShowButtonClear: true,
            })
        } catch (err) {
            console.log(err);
        }
    }
    onClearUsers = () => {
        this.setState ({
            users : [],
        })
    }
    render() {
        const { users, isLoading, isShowButtonClear } = this.state
        return (
            <div>
                <SearchUser searchUser={this.fetchUser} 
                isShowButtonClear={isShowButtonClear} onClearUsers={this.onClearUsers} />
                <UserList users={users} isLoading={isLoading} />
            </div>
        )
    }
}
// cách 1 gọi API
    // fetchUser = (search) => {
    //     axios
    //     .get(`https://api.github.com/search/users?q=${search}`)
    //     .then((response)=> {
    //         this.setState ({
    //             users : response.data.items,
    //         });
    //         })
    //     .catch ((err) => {
    //             console.log(err)
    //     } );  
    // }