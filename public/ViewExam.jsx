'use strict';

import React, {Component} from 'react';

export default class ViewExam extends Component {
    constructor(props) {
        super(props);
        this.state = { exams: []}
    }

    componentDidMount() {
        fetch('/allexam', {method :'GET'})
            .then(res => res.json())
            .then(jsonres => {
                this.setState({exams: jsonres}, (() => {

                }));
            })
            .catch(err => {
                this.setState({exams: 'An error occurred'})
            })
    }

    render() {
        return <div>
            <br/>
                <h4><center>View Exam</center></h4>
            <br/>
            <table align="center" border="1" width="1000">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Document</th>
                    <th>Duedate</th>
                </tr>
                </thead>
                <tbody>{this.state.exams.map(function (item,key) {

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
