'use strict';

import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import AddAssignment from "./AddAssignment";
import ViewAssignment from "./ViewAssignment";
import AddExam from "./AddExam";
import ViewExam from "./ViewExam";
import Marks from "./Marks";
import AcceptCourse from "./AcceptCourse";
import Login from "./Login";

export default class Instructor extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <br/>
            <h2><center>Instructor System</center></h2>
            <Router>
                <div>
                    <br/>

                    <div className="row">
                        <div className="col-sm">
                            <Link to="/">Login</Link>
                        </div>
                        <div className="col-sm">
                            <Link to="/addassignment">Add Assignment</Link>
                        </div>
                        <div className="col-sm">
                            <Link to="/viewassignment">View Assignment</Link>
                        </div>
                        <div className="col-sm">
                            <Link to="/addexam">Add Exam</Link>
                        </div>
                        <div className="col-sm">
                            <Link to="/viewexam">View Exam</Link>
                        </div>
                        <div className="col-sm">
                            <Link to="/mark">Marks</Link>
                        </div>
                        <div className="col-sm">
                            <Link to="/acceptcourse">Accept Course</Link>
                        </div>
                    </div>
                    <Route exact path="/" render={props => {
                        return <Login/>
                    }}/>
                    <Route path="/addassignment" render={props => {
                        return <AddAssignment/>
                    }}/>
                    <Route path="/viewassignment" render={props => {
                        return <ViewAssignment/>
                    }}/>
                    <Route path="/addexam" render={props => {
                        return <AddExam/>
                    }}/>
                    <Route path="/viewexam" render={props => {
                        return <ViewExam/>
                    }}/>
                    <Route path="/mark" render={props => {
                        return <Marks/>
                    }}/>
                    <Route path="/acceptcourse" render={props => {
                        return <AcceptCourse/>
                    }}/>
                </div>
            </Router>
        </div>;
    }
}
