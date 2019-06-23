'use strict';

import React, {Component} from 'react';

export default class ViewAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = { newadmin: []}
    }

    componentDidMount() {
        fetch('/newallAdmin', {method :'GET'})
            .then(res => res.json())
            .then(jsonres => {
                this.setState({newadmin: jsonres}, (() => {

                }));
            })
            .catch(err => {
                this.setState({newadmin: 'An error occurred'})
            })
    }

    render() {
        return <div>
            <br/>
            <h4><center>View Admin</center></h4>
            <br/>
            <table align="center" border="1" width="1000">
                <thead>
                <tr>
                    <th>Code</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                </tr>
                </thead>
                <tbody>{this.state.newadmin.map(function (item,key) {
                    return(
                        <tr key={key}>
                            <td>{item.code}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.mobile}</td>
                        </tr>
                    )
                })}

                </tbody>
            </table>
        </div>;
    }
}
