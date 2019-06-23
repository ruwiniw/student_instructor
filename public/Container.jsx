'use strict';

import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import AddAdmin from "./AddAdmin";
import ViewAdmin from "./ViewAdmin";
import AddInstructor from "./AddInstructor";
import GetInstructor from "./GetInstructor";

export default class Container extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <h4>Admin2</h4>
            <Router>
                <div>
                    <div className="row">
                        <div className="col-sm">
                            <Link to="/">Add Admin</Link>
                        </div>
                        <div className="col-sm">
                            <Link to="/viewadmin">View Admin</Link>
                        </div>
                        <div className="col-sm">
                            <Link to="/addinstructor">Add Instructor</Link>
                        </div>
                        <div className="col-sm">
                            <Link to="/getinstructor">View Instructor</Link>
                        </div>
                    </div>
                    <Route exact path="/" render={props => {
                        return <AddAdmin/>
                    }}/>
                    <Route path="/viewadmin" render={props => {
                        return <ViewAdmin/>
                    }}/>
                    <Route path="/addinstructor" render={props => {
                        return <AddInstructor/>
                    }}/>
                    <Route path="/getinstructor" render={props => {
                        return <GetInstructor/>
                    }}/>
                </div>
            </Router>
        </div>;
    }
}
