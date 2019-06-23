'use strict';

import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Instructor from "./Instructor";
import AdminContainer from "./AdminContainer";
import StudentContainer from "./StudentContainer";
import Container from "./Container";

export default class AppContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <br/>
            <h2><center>Student and Instructor Management System</center></h2>
            <Router>
                <div>
                    <br/>

                    <div className="row">
                        <div className="col-sm-1">
                            <Link to="/">Instructor</Link>
                        </div>
                        <div className="col-sm-1">
                            <Link to="/admin">Admin</Link>
                        </div>
                        <div className="col-sm-1">
                            <Link to="/student">Student</Link>
                        </div>
                        <div className="col-sm-1">
                            <Link to="/admin2">Admin2</Link>
                        </div>
                    </div>
                    <Route exact path="/" render={props => {
                        return <Instructor/>
                    }}/>
                    <Route path="/admin" render={props => {
                        return <AdminContainer/>
                    }}/>
                    <Route path="/student" render={props => {
                        return <StudentContainer/>
                    }}/>
                    <Route path="/admin2" render={props => {
                        return <Container/>
                    }}/>
                </div>
            </Router>
        </div>;
    }
}
