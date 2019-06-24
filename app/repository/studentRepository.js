const mongoose = require('../schema/studentSchema');
const SignupModule = mongoose.model("Signup");

const SignupRepository = function (){
    this.insertStudent  = (student) => {
        return new Promise((resolve,reject) => {
            const newStudent = new SignupModule({
                registrationNumber: student.registrationNumber,
                name: student.name,
                email: student.email,
                password: student.password
            });

            newStudent.save().then(() => {
                resolve({status:201, message: "Added student successfully"});
            }).catch(err => {
                reject({status:404, message: "Error: "+err});
            })
        })
    }

    this.getAllStudents = () => {
        return new Promise((resolve, reject) => {
            SignupModule.find().exec().then((data) => {
                resolve({status: 200, message: data})
            }).catch(err => {
                reject({status: 404, message: "Error: " + err})
            })
        })
    }

    this.getStudent = (registrationNumber) => {
        return new Promise((resolve, reject) => {
            SignupModule.find({registrationNumber: registrationNumber}).select('name').populate('email').exec().then((data) => {
                resolve({status: 200, message: data})
            }).catch(err => {
                reject({status: 404, message: "Error: " + err})
            })
        })
    }

    // this.updateStudent = (registrationNumber) => {
    //     return new Promise((resolve,reject) => {
    //         SignupModule.find({registrationNumber:registrationNumber}).
    //     })
    // }
}

module.exports = new SignupRepository();