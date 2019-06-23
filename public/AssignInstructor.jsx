'use strict';

import React, {Component} from 'react';

export default class AssignInstructor extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <form action="/instructor" method='POST'>
                <label>
                    CourseName:
                    <input type="text" name="CourseName"/>
                </label>
                <br/>
                <label>
                    InstructorName:
                    <input type="text" name="InstructorName"/>
                </label>
                <br/>
                <input type="submit" value="Add"/>
            </form>
        </div>;
    }
}
