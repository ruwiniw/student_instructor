'use strict';

import React, {Component} from 'react';

export default class ViewCourse extends Component {
    constructor(props) {
        super(props);
        this.state = { courses: []}
    }

    componentDidMount() {
        fetch('/allcourses', {method :'GET'})
            .then(res => res.json())
            .then(jsonres => {
                this.setState({courses: jsonres}, (() => {

                }));
            })
            .catch(err => {
                this.setState({courses: 'An error occurred'})
            })
    }

    render() {
        return <div>
            <br/>
            <h4><center>View Courses</center></h4>
            <br/>
            <table align="center" border="1" width="1000">
                <thead>
                <tr>
                    <th>CourseCode</th>
                    <th>CourseName</th>
                    <th>CoursePoints</th>
                    <th>LecturerInCharge</th>
                </tr>
                </thead>
                <tbody>{this.state.courses.map(function (item,key) {
                    return(
                        <tr key={key}>
                            <td>{item.CourseCode}</td>
                            <td>{item.CourseName}</td>
                            <td>{item.CoursePoints}</td>
                            <td>{item.LecturerInCharge}</td>
                        </tr>
                    )
                })}

                </tbody>
            </table>
        </div>;
    }
}
