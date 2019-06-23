'use strict';

import React, {Component} from 'react';

export default class AddCourse extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <form action="/course" method='POST'>
                <label>
                    CourseCode:
                    <input type="text" name="CourseCode"/>
                </label>
                <br/>
                <label>
                    CourseName:
                    <input type="text" name="CourseName"/>
                </label>
                <br/>
                <label>
                    CoursePoints:
                    <input type="text" name="CoursePoints"/>
                </label>
                <br/>
                <label>
                    LecturerInCharge:
                    <input type="text" name="LecturerInCharge"/>
                </label>
                <br/>
                <input type="submit" value="Add"/>
            </form>
        </div>;
    }
}
