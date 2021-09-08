import React from 'react'
import Loading from '../Loading/Loading';
import { UserItem } from '../UserItem';
import "./UserList.css";

// khi dùng funtion thì không dùng this.
export const UserList = (props) => {
    const { users, isLoading } = props;
    if (isLoading) {
        return <Loading />
    }
    return (
        <div className="userList" >
            {users.map((userItem,index) =>{
                return <UserItem user={userItem} key={index} />
            })}
        </div>
    )
}
