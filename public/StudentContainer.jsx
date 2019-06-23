'use strict';

import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import StudentSignUp from "./StudentSignUp";
import StudentLogin from "./StudentLogin";
import Student from "./Student";
import UploadAssignment from "./UploadAssignment";

export default class StudentContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <br/>
            <h2><center>Student System</center></h2>
            <Router>
                <div>
                    <br/>

                    <div className="row">
                        <div className="col-sm-2">
                            <Link to="/">Student SignUp</Link>
                        </div>
                        <div className="col-sm-2">
                            <Link to="/studentlogin">Student Login</Link>
                        </div>
                        <div className="col-sm-2">
                            <Link to="/availablecourses">Available Courses</Link>
                        </div>
                        <div className="col-sm-2">
                            <Link to="/upload">Upload Assignment</Link>
                        </div>
                    </div>
                    <Route exact path="/" render={props => {
                        return <StudentSignUp/>
                    }}/>
                    <Route path="/studentlogin" render={props => {
                        return <StudentLogin/>
                    }}/>
                    <Route path="/availablecourses" render={props => {
                        return <Student/>
                    }}/>
                    <Route path="/upload" render={props => {
                        return <UploadAssignment/>
                    }}/>
                </div>
            </Router>
        </div>;
    }
}
