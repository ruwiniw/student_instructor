'use strict';

import React, {Component} from 'react';

export default class ViewAssignment extends Component {
    constructor(props) {
        super(props);
        this.state = { assignments: []}
    }

    componentDidMount() {
        fetch('/allassignment', {method :'GET'})
            .then(res => res.json())
            .then(jsonres => {
                this.setState({assignments: jsonres}, (() => {

                }));
            })
            .catch(err => {
                this.setState({assignments: 'An error occurred'})
            })
    }

    render() {
        return <div>
            <br/>
            <h4><center>View Assignment</center></h4>
            <br/>
            <table align="center" border="1" width="1000">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Document</th>
                    <th>Duedate</th>
                </tr>
                </thead>
                <tbody>{this.state.assignments.map(function (item,key) {
                    var file;
                    file = new Blob(
                        [item.Document],
                        {type: 'application/pdf'});
                        const fileURL = window.URL.createObjectURL(file);
                    return(
                        <tr key={key}>
                            <td>{item.Name}</td>
                            <td>{fileURL}</td>
                            <td>{item.Duedate}</td>
                        </tr>
                    )
                })}

                </tbody>
            </table>
        </div>;
    }
}
