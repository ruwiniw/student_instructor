import React,{Component} from 'react';
import {Link} from "react-router-dom";

class StudentSignUp extends Component{
    constructor(props) {
        super(props);
        this.state = {
            registrationNumber: '',
            name: '',
            email: '',
            password: ''
        }
    };

    //handle Submit
    handleSubmit(e) {

        const student = {
            "registrationNumber": e.student.registrationNumber,
            "name": e.student.name,
            "email": e.student.email,
            "password": e.student.password
        };
        alert(student.registrationNumber + "  " + student.name + "    " + student.email);

        fetch('http://localhost:3000/api/student/add-student', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(student)
        }).then(response => {
            console.log(response)
        }).catch(err => {
            console.log(err);
        })
    }

    //handle On Submit
    handleOnSubmit(e) {
        e.preventDefault();

        const student_details = {
            registrationNumber: document.getElementById('registrationNumber').value,
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value

        };

        this.handleSubmit({student: student_details});
    }

    render() {
        return(
            <div className="container">
                <form onSubmit={value => this.handleOnSubmit(value)}>

                        <label htmlFor="registrationNumber" className="col-sm-3 col-form-label">Registration Number</label>
                        <input type="text" className="form-control" name='registrationNumber' id='registrationNumber' required/>

                        <label htmlFor="name" className="col-sm-3 col-form-label">Name</label>
                        <input type="text" className="form-control" name='name' id='name' required/>

                        <label htmlFor="email" className="col-sm-3 col-form-label">Email</label>
                        <input type="email" className="form-control" name='email' id='email' required/>

                        <label htmlFor="password" className="col-sm-3 col-form-label">Password</label>
                        <input type="password" className="form-control" name='password' id='password' required/>

                        <br/>
                        <div className="form-group">
                        <button className="btn btn-primary" type="reset">Reset</button>&nbsp;&nbsp;
                        <button className="btn btn-primary" type="submit">Sign Up</button>
                        </div>
                </form>
            </div>
        );
    }

}

export default StudentSignUp;