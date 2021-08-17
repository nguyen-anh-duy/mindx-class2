import React, { Component } from 'react'
import "./Student.css";

export default class StudentForm extends Component {
    state={
        id: "",
        fullName: "",
        phoneNumber: "",
        email: "",
    }
    onChangeHandle = (e) =>{
        const { name, value } = e.target;
        this.setState ({
            [name]: value,
        });
    };
    onSubmitHandle = (e) =>{
        e.preventDefault();
        // đưa cái object student ra component cha là StudentManagement
        this.props.onAddStudent(this.state);
    }
    render() {
        return (
            <div>
                <h2>Thông tin sinh viên</h2>
                <form onSubmit={this.onSubmitHandle}>
                    <div className="chiaCot">
                        <div><label htmlFor="id">MSSV </label>
                            <input type="text" name="id" onChange={this.onChangeHandle} value={this.state.id} />
                        </div>
                        <div><label htmlFor="fullname">fullname </label>
                            <input type="text" name="fullname" onChange={this.onChangeHandle} value={this.state.fullname} />
                        </div>
                        <div><label htmlFor="phoneNumber">phoneNumber </label>
                            <input type="text" name="phoneNumber" onChange={this.onChangeHandle} value={this.state.phoneNumber} />
                        </div>
                        <div><label htmlFor="email">email </label>
                            <input type="text" name="email" onChange={this.onChangeHandle} value={this.state.email} />
                        </div>
                    </div>
                    <button type="submit">Thêm sinh viên</button>
                </form>
            </div>
        )
    }
}
