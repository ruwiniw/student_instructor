const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const signupModel = new Schema({
    registrationNumber: {
        type: String
    },
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        minlength: 6,
        maxlength: 8
    }
})

const completeAssignmentModel = new Schema({
    courseCode: {
        type: String
    },
    assignmentCode: {
        type: String
    },
    registrationNumber: {
        type: String
    },
    file: {
        type: Buffer
    }
})

const courseModel = new Schema({
    CourseName:{
        type:String
    },
    CourseCode:{
        type:String
    },
    CoursePoints:{
        type:Number
    },
    LecturerInCharge:{
        type:String
    }
})

// mongoose.connect('mongodb://localhost:27017/af_db', err => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log('Successfully connected to MongoDB');
// })

mongoose.model("Signup", signupModel);
mongoose.model("Course", courseModel);
mongoose.model("CompleteAssignment", completeAssignmentModel);

module.exports = mongoose;