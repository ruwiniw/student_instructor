'use strict';

import React, {Component} from 'react';

export default class ViewInstructor extends Component {
    constructor(props) {
        super(props);
        this.state = { instructors: []}
    }

    componentDidMount() {
        fetch('/allinstructors', {method :'GET'})
            .then(res => res.json())
            .then(jsonres => {
                this.setState({instructors: jsonres}, (() => {

                }));
            })
            .catch(err => {
                this.setState({instructors: 'An error occurred'})
            })
    }

    render() {
        return <div>
            <br/>
            <h4><center>View Instructor</center></h4>
            <br/>
            <table align="center" border="1" width="1000">
                <thead>
                <tr>
                    <th>CourseName</th>
                    <th>InstructorName</th>
                </tr>
                </thead>
                <tbody>{this.state.instructors.map(function (item,key) {
                    return(
                        <tr key={key}>
                            <td>{item.CourseName}</td>
                            <td>{item.InstructorName}</td>
                        </tr>
                    )
                })}

                </tbody>
            </table>
        </div>;
    }
}
