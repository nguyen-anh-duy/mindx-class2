import React from 'react'
import { UserItem } from '../UserItem';

// khi dùng funtion thì không dùng this.
export const UserList = (props) => {
    const { users } = props;
    return (
        <div>
            {users.map((userItem,index) =>{
                return <UserItem user={userItem} key={index} />
            })}
        </div>
    )
}
