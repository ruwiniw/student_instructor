import React,{Component} from 'react';
import {Link} from "react-router-dom";

class StudentLogin extends Component{

    constructor(props){
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        //initial state
        this.state = {
            username:'',
            password:''
        }
    }

    onChangeUsername(event){
        this.setState({
            username: event.target.value
        });
    }

    onChangePassword(event){
        this.setState({
            password: event.target.value
        });
    }

    onSubmit(event){
        alert('Successfully Logged In!');
        event.preventDefault();
        this.setState({
            username:'',
            password:''
        });
    }

    render() {
        return(
            <div className="container">
                <h3>Welcome To Student Login</h3><br/>

                <form onSubmit={this.onSubmit}>
                    <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Username</label>
                        <div className="col-sm-9">
                            <input type="text" className="form-control" value={this.state.username} onChange={this.onChangeUsername} required/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Password</label>
                        <div className="col-sm-9">
                            <input type="password" className="form-control" value={this.state.password} onChange={this.onChangePassword} required/>
                        </div>
                    </div>

                    <div className="form-group">
                        <button className="btn btn-primary" type="reset">Reset</button>&nbsp;&nbsp;
                        <Link to="/Student">
                            <button className="btn btn-primary" type="submit">Login</button>
                        </Link>
                    </div>

                </form>
            </div>
        );
    }
}

export default StudentLogin;