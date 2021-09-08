import React, { Component } from 'react'
import "./SearchUser.css";

export default class SearchUser extends Component {
    constructor(props){
        super(props);
        this.state={
            search: "",
        }
    }
    onSearchChange = (e) =>{
        this.setState({
            search: e.target.value,
        })
    }
    onSubmitSearchUser = (e) => {
        e.preventDefault();
        this.props.searchUser(this.state.search);
        this.setState ({
            search: "",
        })
    }
    render() {
        const { search } = this.state;
        const { isShowButtonClear, onClearUsers } = this.props;
        return (
            <div className="Search" >
                <form onSubmit={this.onSubmitSearchUser} >
                    <input name="search" placeholder="Enter User name" value={search} 
                    className="searchInput" onChange={this.onSearchChange} />
                    <button type="submit" className="btnSearch" >Search</button>
                    {
                        isShowButtonClear && (
                            <button type="button" 
                            className="btnSearch" onClick={onClearUsers} >CLear user</button>
                    )}
                </form>
            </div>
        )
    }
}
