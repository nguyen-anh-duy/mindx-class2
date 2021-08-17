import React, { Component } from 'react'
import StudentForm from './StudentForm'
import StudentTable from './StudentTable'

export default class StudentManagement extends Component {
    state={
        students: [],
    };
    onAddStudent = (student) => {
        this.setState({
            students: [...this.state.students,student],
        })
    }
    render() {
        return (
            <div>
                <h1>Quản lí sinh viên</h1>
                <StudentForm onAddStudent={this.onAddStudent} />
                <StudentTable students={this.state.students} />
            </div>
        )
    }
}
