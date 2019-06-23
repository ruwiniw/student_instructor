'use strict';

import React, {Component} from 'react';

export default class AcceptCourse extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="container">
            <br/>
            <h4>Accept Course</h4>
            <br/>
            <form action="/acceptcourse" method='POST'>
                <div className="form-group row">
                <label className="col-sm-1 col-form-label">
                    StudentId</label>
                    <div className="col-sm-9">
                    <input type="text" name="StudentId"/>
                    </div>
                </div>
                <br/>
                <label>
                    Courses <br/>
                    {/*<input type="text" name="Courses"/>*/}
                     <input type="checkbox" name="Courses" value="SE" />Software Engineering <br/>
                    <input type="checkbox" name="Courses" value="IT"/> Information Technology <br/>
                    <input type="checkbox" name="Courses" value="IM"/> Interactive Media <br/>
                </label>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
        </div>;
    }
}
