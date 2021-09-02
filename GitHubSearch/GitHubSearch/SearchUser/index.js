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
        this.props.fetchUser(this.state.search);
    }
    render() {
        const { search } = this.state;
        return (
            <div className="Search" >
                <form onSubmit={this.onSubmitSearchUser} >
                    <input name="search" placeholder="Enter User name" value={search} className="searchInput" onChange={this.onSearchChange} />
                    <button type="submit" className="btnSearch" >Search</button>
                </form>
            </div>
        )
    }
}
