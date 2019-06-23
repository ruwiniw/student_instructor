'use strict';

import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import AddCourse from "./AddCourse";
import ViewCourse from "./ViewCourse";
import AssignInstructor from "./AssignInstructor";
import ViewInstructor from "./ViewInstructor";

export default class AdminContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <br/>
            <h2><center>Admin System</center></h2>
            <Router>
                <div>
                    <br/>

                    <div className="row">
                        <div className="col-sm">
                            <Link to="/">Add Course</Link>
                        </div>
                        <div className="col-sm">
                            <Link to="/viewcourse">View Course</Link>
                        </div>
                        <div className="col-sm">
                            <Link to="/assigninstructor">Assign Instructor</Link>
                        </div>
                        <div className="col-sm">
                            <Link to="/viewinstructor">View Instructor</Link>
                        </div>
                    </div>
                    <Route exact path="/" render={props => {
                        return <AddCourse/>
                    }}/>
                    <Route path="/viewcourse" render={props => {
                        return <ViewCourse/>
                    }}/>
                    <Route path="/assigninstructor" render={props => {
                        return <AssignInstructor/>
                    }}/>
                    <Route path="/viewinstructor" render={props => {
                        return <ViewInstructor/>
                    }}/>
                </div>
            </Router>
        </div>;
    }
}
