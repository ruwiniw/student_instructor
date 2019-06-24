const mongoose = require('../schema/studentSchema');
const CompleteAssignmentsModule = mongoose.model("CompleteAssignment");

const CompleteAssignmentRepository = function (){
    this.insertAssignment  = (assignment) => {
        return new Promise((resolve,reject) => {
            const newAssignment = new CompleteAssignmentsModule({
                courseCode: assignment.courseCode,
                assignmentCode: assignment.assignmentCode,
                registrationNumber: assignment.registrationNumber,
                file: assignment.file
            });

            newAssignment.save().then(() => {
                resolve({status:201, message: "Added assignment successfully"});
            }).catch(err => {
                reject({status:404, message: "Error: "+err});
            })
        })
    }

    this.getAllAssignments = () => {
        return new Promise((resolve, reject) => {
            CompleteAssignmentsModule.find().exec().then((data) => {
                resolve({status: 200, message: data})
            }).catch(err => {
                reject({status: 404, message: "Error: " + err})
            })
        })
    }

    this.getAssignment = (registrationNumber) => {
        return new Promise((resolve, reject) => {
            CompleteAssignmentsModule.find({registrationNumber: registrationNumber}).select('assignmentCode').populate('file').exec().then((data) => {
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

module.exports = new CompleteAssignmentRepository();