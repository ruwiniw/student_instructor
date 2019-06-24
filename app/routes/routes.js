const express = require('express');
const app = express();
const StudentController = require('../controller/studentController');
const CompleteAssignmentsController = require('../controller/completeAssignmentsController');
const CourseController = require('../controller/courseController');

app.use('/student/',StudentController);
app.use('/assignment/',CompleteAssignmentsController);
app.use('/course/',CourseController);

module.exports = app;