'use strict';

import React, {Component} from 'react';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {username:'' , password:'', resultLogin:[]};

        this.handlechange = this.handlechange.bind(this);
        this.handlesubmit = this.handlesubmit.bind(this);
    }

    handlechange(event){
        const {name,value} = event.target;
        this.setState({[name]:value});
    }

    handlesubmit(event){
        //alert('success');

        fetch('/login/'+ this.state.username + '/' +this.state.password , {method: 'GET'} )
            .then(res => res.json())
            .then(jsonres => {
                this.setState({resultLogin: jsonres}, (() => {
                    //alert('got here ' + this.state.resultLogin);
                    this.state.resultLogin.map(function (item,key) {
                        document.getElementById('loginform').style.display = 'none';
                        alert('Welcome Back');
                    })
                }));
            })
            .catch(err => {
                this.setState({resultLogin: 'An error occurred'})
            });
        event.preventDefault();
    }

    render() {
        return <div className="container">
            <div id='loginform'>
                <br/>
                <h4>Instructor Login</h4>
                <br/>
            <form onSubmit={this.handlesubmit}>
                <label className="col-sm-1 col-form-label">
                    Username</label>
                    <input type="text" name="username" value={this.state.username} onChange={this.handlechange}/>
                <br/>
                <label className="col-sm-1 col-form-label">
                    Password</label>
                    <input type="text" name="password" value={this.state.password} onChange={this.handlechange}/>
                <br/>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
            </div>

        </div>;
    }
}

// 'use strict';
//
// import React, {Component} from 'react';
//
// export default class Login extends Component {
//     constructor(props) {
//         super(props);
//     }
//
//     render() {
//         return <div className="container">
//             <br/>
//             <h4>Login</h4>
//             <br/>
//             <form action="/adduser" method='POST'>
//                 <div className="form-group row">
//                     <label className="col-sm-1 col-form-label">
//                         Username</label>
//                     <div className="col-sm-9">
//                         <input type="text" name="username"/>
//                     </div>
//                 </div>
//                 <br/>
//                 <div className="form-group row">
//                     <label className="col-sm-1 col-form-label">
//                         Password</label>
//                     <div className="col-sm-9">
//                         <input type="text" name="password"/>
//                     </div>
//                 </div>
//                 <br/>
//                 <input type="submit" value="Submit"/>
//             </form>
//         </div>;
//     }
// }




