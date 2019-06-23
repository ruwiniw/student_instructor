import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Student extends Component{

    constructor(props){
        super(props);

        this.state={
            data:[]
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/api/course/get-courses')
            .then(res=>{
                return res.json();
            })
            .then(json=>{
                console.log(json);
                this.setState({data:json});
            })
    }

    render() {
        return(
            <div className="container">
                <h4>Available Courses</h4>
                <div className="container p-3 mb-2 bg-light text-dark rounded">
                    <table className="table table-borderless">
                        <thead>
                        <tr>
                            <th scope="col">Course Code</th>
                            <th scope="col">Course Title</th>
                            <th scope="col">Points</th>
                            <th scope="col">Lecturer In Charge</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.data.map(course=>
                            <tr key={course._id}>
                                <td>{course.CourseCode}</td>
                                <td>{course.CourseName}</td>
                                <td>{course.CoursePoints}</td>
                                <td>{course.LecturerInCharge}</td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>

                <h4>Assignments</h4>
                <div className="container p-3 mb-2 bg-light text-dark rounded">
                    <table className="table table-borderless">
                        <thead>
                        <tr>
                            <th scope="col">Course Code</th>
                            <th scope="col">Assignment Code</th>
                            <th scope="col">Description</th>
                            <th scope="col">Marks</th>
                            <th scope="col">Due Date</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th>c001</th>
                            <td>a001</td>
                            <td>Plugin Development</td>
                            <td>20</td>
                            <td>17/06/2019</td>
                            <td>
                                <Link to="/UploadAssignment">
                                    <button className="btn btn-success" type="submit">Upload</button>
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <th>c001</th>
                            <td>a002</td>
                            <td>Case Study</td>
                            <td>20</td>
                            <td>17/09/2019</td>
                            <td>
                                <Link to="/UploadAssignment">
                                    <button className="btn btn-success" type="submit">Upload</button>
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <th>c002</th>
                            <td>a001</td>
                            <td>Review Paper</td>
                            <td>20</td>
                            <td>22/07/2019</td>
                            <td>
                                <Link to="/UploadAssignment">
                                    <button className="btn btn-success" type="submit">Upload</button>
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <th>c002</th>
                            <td>a002</td>
                            <td>Online Ticket Reservation System</td>
                            <td>20</td>
                            <td>25/10/2019</td>
                            <td>
                                <Link to="/UploadAssignment">
                                    <button className="btn btn-success" type="submit">Upload</button>
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <th>c003</th>
                            <td>a001</td>
                            <td>Tool Comparison</td>
                            <td>10</td>
                            <td>05/07/2019</td>
                            <td>
                                <Link to="/UploadAssignment">
                                    <button className="btn btn-success" type="submit">Upload</button>
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <th>c004</th>
                            <td>a001</td>
                            <td>Hackathon</td>
                            <td>5</td>
                            <td>19/08/2019</td>
                            <td>
                                <Link to="/UploadAssignment">
                                    <button className="btn btn-success" type="submit">Upload</button>
                                </Link>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <h4>Examinations</h4>
                <div className="container p-3 mb-2 bg-light text-dark rounded">
                    <table className="table table-borderless">
                        <thead>
                        <tr>
                            <th scope="col">Course Code</th>
                            <th scope="col">Marks</th>
                            <th scope="col">Exam Date</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">c001</th>
                            <td>60</td>
                            <td>02/11/2019</td>
                        </tr>
                        <tr>
                            <th scope="row">c002</th>
                            <td>50</td>
                            <td>04/11/2019</td>
                        </tr>
                        <tr>
                            <th scope="row">c003</th>
                            <td>50</td>
                            <td>06/11/2019</td>
                        </tr>
                        <tr>
                            <th scope="row">c004</th>
                            <td>40</td>
                            <td>08/11/2019</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Student;