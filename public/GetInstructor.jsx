'use strict';

import React, {Component} from 'react';

export default class GetInstructor extends Component {
    constructor(props) {
        super(props);
        this.state = { newinstructor: []}
    }

    componentDidMount() {
        fetch('/newallInstructor', {method :'GET'})
            .then(res => res.json())
            .then(jsonres => {
                this.setState({newinstructor: jsonres}, (() => {

                }));
            })
            .catch(err => {
                this.setState({newinstructor: 'An error occurred'})
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
                    <th>Code</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Course</th>
                </tr>
                </thead>
                <tbody>{this.state.newinstructor.map(function (item,key) {
                    return(
                        <tr key={key}>
                            <td>{item.code}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.mobile}</td>
                            <td>{item.course}</td>
                        </tr>
                    )
                })}

                </tbody>
            </table>
        </div>;
    }
}
