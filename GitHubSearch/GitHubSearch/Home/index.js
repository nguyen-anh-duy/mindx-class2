import React, { Component } from 'react';
import SearchUser from '../../AComponents/SearchUser';
import axios from 'axios';
import { UserList } from '../../AComponents/UsersList';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            users : [],
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
    // cách 2 dùng asyn await để gọi API
    fetchUser = async (search) => {
        try {
            const response = await axios.get(`https://api.github.com/search/users?q=${search}`);
            this.setState ({
                 users : response.data.items,
            })
        } catch (err) {
            console.log(err);
        }
    }
    render() {
        const { users } = this.state
        return (
            <div>
                <SearchUser fetchUser={this.fetchUser} />
                <UserList users={users} />
            </div>
        )
    }
}
