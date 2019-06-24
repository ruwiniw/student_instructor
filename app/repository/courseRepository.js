const mongoose = require('../schema/studentSchema');
const CourseModel = mongoose.model("Course");


const CourseRepository = function () {
    this.insertCourse  = (course) => {
        return new Promise((resolve,reject) => {
            const newCourse = new CourseModel({
                CourseName:course.CourseName,
                CourseCode:course.CourseCode,
                CoursePoints:course.CoursePoints,
                LecturerInCharge:course.LecturerInCharge
            });

            newCourse.save().then(() => {
                resolve({status:201, message: "Added course successfully"});
            }).catch(err => {
                reject({status:404, message: "Error: "+err});
            })
        })
    }


    this.getAllCourses = () => {
        return new Promise((resolve, reject) => {
            CourseModel.find().exec().then((data) => {
                resolve({status: 200, message: data})
            }).catch(err => {
                reject({status: 404, message: "Error: " + err})
            })
        })
    }

    this.delete=(LecturerInCharge) =>{
        return new Promise((resolve,reject)=>{
            CourseModel.remove({LecturerInCharge:LecturerInCharge}).then(()=>{
                resolve({status:200,message:"Removed"});
            }).catch(err=>{
               reject({status:500,message:"Error" + err});
            });
        });

    }
};


module.exports = new CourseRepository();