import React, { Component } from 'react'

export default class StudentTable extends Component {
    render() {
        const {students=[]} = this.props;
        return (
            <div>
                <table><thead>
                        <tr><th>Mã SV</th>
                            <th>Họ tên</th>
                            <th>Số ĐT</th>
                            <th>Email</th>
                        </tr></thead>
                    <tbody>
                        { students.length>0 ? students.map((student) =>{
                                const {id, fullName, phoneNumber, email} = student;
                                return <tr>
                                        <td>{id}</td>
                                        <td>{fullName}</td>
                                        <td>{phoneNumber}</td>
                                        <td>{email}</td>
                                    </tr>
                            }) : <p>chưa thêm sinh viên</p>
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
