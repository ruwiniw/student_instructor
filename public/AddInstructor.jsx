'use strict';

import React, {Component} from 'react';

export default class AddInstructor extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="container">
            <br/>
            <h4>Add Instructor</h4>
            <br/>
            <form action="/newinstructor" method='POST'>
                <div className="form-group row">
                    <label className="col-sm-1 col-form-label">
                        Code</label>
                    <div className="col-sm-9">
                        <input type="text" name="code"/>
                    </div>
                </div>
                <br/>
                <div className="form-group row">
                    <label className="col-sm-1 col-form-label">
                        Name</label>
                    <div className="col-sm-9">
                        <input type="text" name="name"/>
                    </div>
                </div>
                <br/>
                <div className="form-group row">
                    <label className="col-sm-1 col-form-label">
                        Email</label>
                    <div className="col-sm-9">
                        <input type="text" name="email"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-1 col-form-label">
                        Mobile</label>
                    <div className="col-sm-9">
                        <input type="text" name="mobile"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-1 col-form-label">
                        Course</label>
                    <div className="col-sm-9">
                        <input type="text" name="course"/>
                    </div>
                </div>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
        </div>;
    }
}
