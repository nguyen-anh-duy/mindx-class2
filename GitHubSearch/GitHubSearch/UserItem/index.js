import React from 'react'
import "./UserItem.css";

export const UserItem = (props) => {
    const { login, avatar_url } = props.user;
    return (
        <div className="userItem" >
            <div className="userAvatar" >
                <img src={avatar_url} alt="img" />
            </div>
            <p className="userName" >{login} </p>
            <button className="btnMore" >More</button>
        </div>
    )
}
