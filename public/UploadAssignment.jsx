import React,{Component} from 'react';
// import './App.css';


class UploadAssignment extends Component{
    constructor(props) {
        super(props);
        this.state = {
            courseCode: '',
            assignmentCode: '',
            registrationNumber: '',
            file: ''
        }
    };

    handleSubmit(e) {

        const assignment = {
            "courseCode": e.assignment.courseCode,
            "assignmentCode": e.assignment.assignmentCode,
            "registrationNumber": e.assignment.registrationNumber,
            "file": e.assignment.file
        };
        alert("Your Assignment has uploaded");

        fetch('http://localhost:3000/api/assignment/add-assignment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(assignment)
        }).then(response => {
            console.log(response)
        }).catch(err => {
            console.log(err);
        })
    }

    //handle On Submit
    handleOnSubmit(e) {
        e.preventDefault();

        const assignment_details = {
            courseCode: document.getElementById('courseCode').value,
            assignmentCode: document.getElementById('assignmentCode').value,
            registrationNumber: document.getElementById('st_reg_num').value,
            file: document.getElementById('file').value

        };

        this.handleSubmit({assignment: assignment_details});
    }

    render() {
        return(
          <div className="container">
              <form onSubmit={value => this.handleOnSubmit(value)}>

                  <label htmlFor="courseCode" className="col-sm-3 col-form-label">Course Code</label>
                  <input type="text" className="form-control" name='courseCode' id='courseCode' required/>

                  <label htmlFor="assignmentCode" className="col-sm-3 col-form-label">Assignment Code</label>
                  <input type="text" className="form-control" name='assignmentCode' id='assignmentCode' required/>

                  <label htmlFor="registrationNumber" className="col-sm-3 col-form-label">Registration Number</label>
                  <input type="text" className="form-control" name='registrationNumber' id='registrationNumber' required/>

                  <label htmlFor="file" className="col-sm-3 col-form-label">File</label>
                  <input type="file" className="form-control" name='file' id='file' required/>

                  <br/>
                  <div className="form-group">
                      <button className="btn btn-primary" type="reset">Reset</button>&nbsp;&nbsp;
                      <button className="btn btn-primary" type="submit">Submit Assignment</button>
                  </div>
              </form>
          </div>
        );
    }
}

export default UploadAssignment;