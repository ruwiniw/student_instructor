'use strict';

import React, {Component} from 'react';

export default class Marks extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="container">
            <br/>
            <h4>Marks</h4>
            <br/>
            <form action="/mark" method='POST'>
                <div className="form-group row">
                <label className="col-sm-2 col-form-label">
                    StudentId</label>
                    <div className="col-sm-9">
                    <input type="text" name="StudentId"/>
                    </div>
                </div>
                <br/>
                <div className="form-group row">
                <label className="col-sm-2 col-form-label">
                    CourseId</label>
                    <div className="col-sm-9">
                    <input type="text" name="CourseId"/>
                    </div>
                </div>
                <br/>
                <div className="form-group row">
                <label className="col-sm-2 col-form-label">
                    Exam Name</label>
                    <div className="col-sm-9">
                    <input type="text" name="ExamName"/>
                    </div>
                </div>
                <br/>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">
                        Mark</label>
                    <div className="col-sm-9">
                        <input type="text" name="Mark"/>
                    </div>
                </div>
                <input type="submit" value="Submit"/>
            </form>
        </div>;
    }
}
