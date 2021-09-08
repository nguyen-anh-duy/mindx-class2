import React from 'react'
import "./UserItem.css";
import { useHistory } from 'react-router-dom';

export const UserItem = (props) => {
    const { login, avatar_url } = props.user;
    const history = useHistory();
    const onLinkToUserDetail = () => {
        history.push(`/users/${login}`)
    }
    return (
        <div className="userItem" >
            <div >
                <img className="userAvatar" src={avatar_url} alt="img" />
                <p className="userName" >{login} </p>
                <button onClick={onLinkToUserDetail} className="btnMore" >More</button>
            </div>
        </div>
    )
}
