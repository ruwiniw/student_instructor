'use strict';

const express = require('express'),
    mongoose = require('mongoose');
const BodyParser = require('body-parser');
// const Bundler = require('parcel-bundler');
const routes = require('./app/routes/routes');
const MailService = require('./EmailService/MailService');//nethmini

// mongoose.connect('mongodb://intelli:nhf7ofFa7EQfkuSmcFJXXpj5Ydnd6iZvIUcFvKwifcO9Hbw7J4UamXCtGDLJVFQtNveERxUfi5LPASR05farug%3D%3D@intelli.documents.azure.com:10255/?ssl=true&sslverifycertificate=false/af_db', function (err) {
//     if (err) {
//         console.error(err);
//         process.exit(-1);
//     }
//
//     console.log('Connected to the DB');
// });

mongoose.connect('mongodb://127.0.0.1:27017/af_db', function (err) {
    if (err) {
        console.error(err);
        process.exit(-1);
    }

    console.log('Connected to the DB');
});


const app = express();

// const bundler = new Bundler('./public/index.html', {});

app.use(express.json());

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended:true}));

app.use('/api', routes);

// app.use(bundler.middleware());

app.use(express.static('dist'));
app.use(express.static(__dirname));

// app.get('/', (req, res, next) => {
//     res.sendFile('./dist/index.html');
// });

const UserLoginModel = mongoose.model("userlogin", {
    username:String,
    password:String
});

const AssignmentModel = mongoose.model("assignment", {
    Name:String,
    Document:Buffer,
    Duedate:Date
});

const ExamModel = mongoose.model("exam", {
    Name:String,
    Document:Buffer,
    Duedate:Date
});

const MarksModel = mongoose.model("mark", {
    StudentId:String,
    CourseId:String,
    ExamName:String,
    Mark:Number
});
const AcceptcourseModel = mongoose.model("acceptcourse", {
    StudentId:String,
    Courses:[String]
});

const CourseModel = mongoose.model("course", {
    CourseName:String,
    CourseCode:String,
    CoursePoints:Number,
    LecturerInCharge:String
});

const InstructorModel = mongoose.model("instructor", {
    CourseName:String,
    InstructorName:String
});

const NewAdminModel = mongoose.model("newadmin", {
    code:String,
    name:String,
    email:String,
    mobile:Number
});
const NewInstructorModel = mongoose.model("newinstructor", {
    code:String,
    name:String,
    email:String,
    mobile:Number,
    course:String
});


app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.post('/assignment', async (req,res) => {
    try{
        var assignment = new AssignmentModel(req.body);
        var result = await assignment.save();
        res.send(result);
    }catch(error){
        res.status(500).send(error);
    }
});
app.get('/allassignment', async (req,res) => {
    console.log('Test');
    try{
        var result = await AssignmentModel.find().exec();
        //console.log(result);
        res.send(result);
    }catch(error){
        res.status(500).send(error);
    }
});

app.post('/exam', async (req,res) => {
    try{
        var exam = new ExamModel(req.body);
        var result = await exam.save();
        res.send(result);
    }catch(error){
        res.status(500).send(error);
    }
});
app.get('/allexam', async (req,res) => {
    try{
        var result = await ExamModel.find().exec();
        res.send(result);
    }catch(error){
        res.status(500).send(error);
    }
});

app.post('/mark', async (req,res) => {
    try{
        var mark = new MarksModel(req.body);
        var result = await mark.save();
        res.send(result);
    }catch(error){
        res.status(500).send(error);
    }
});

app.post('/acceptcourse', async (req,res) => {
    try{
        console.log(req.body);
        var acceptcourse = new AcceptcourseModel(req.body);
        var result = await acceptcourse.save();
        res.send(result);
    }catch(error){
        res.status(500).send(error);
    }
});

app.get('/login/:username/:password',async (req,res) => {
    try{
        console.log(req.params.username);
        console.log(req.params.password);
        var result = await UserLoginModel.find({username:req.params.username},{password:req.params.password}).exec();
        console.log('res ' + result);
        res.send(result);
    }catch(error){
        console.log('err ' + error);
        res.status(500).send(error);
    }
});

app.post('/adduser', async (req,res) => {
    try{
        var user = new UserLoginModel(req.body);
        var result = await user.save();
        res.send(result);
    }catch(error){
        res.status(500).send(error);
    }
});

app.post('/course', async (req,res) => {
    try{
        var course = new CourseModel(req.body);
        var result = await course.save();
        res.send(result);
    }catch(error){
        res.status(500).send(error);
    }
});
app.get('/allcourses', async (req,res) => {
    try{
        var result = await CourseModel.find().exec();
        res.send(result);
    }catch(error){
        res.status(500).send(error);
    }
});

app.post('/instructor', async (req,res) => {
    try{
        var instructor = new InstructorModel(req.body);
        var result = await instructor.save();
        res.send(result);
    }catch(error){
        res.status(500).send(error);
    }
});
app.get('/allinstructors', async (req,res) => {
    try{
        var result = await InstructorModel.find().exec();
        res.send(result);
    }catch(error){
        res.status(500).send(error);
    }
});

app.post('/newadmin', async (req,res) => {
    try{
        var admin = new NewAdminModel(req.body);
        var result = await admin.save();
        res.send(result);
        MailService.sendMail(req.body.email, req.body.name, "Instructor Registration", "Instructor Registration", req.body).then( data => {
            resolve({status: 200, message: 'Notification Sent Successfully !'});
        }).catch( err => {
            reject({status: 500, err});
        });
    }catch(error){
        res.status(500).send(error);
    }
});
app.get('/newallAdmin', async (req,res) => {
    try{
        var result = await NewAdminModel.find().exec();
        res.send(result);
    }catch(error){
        res.status(500).send(error);
    }
});
app.post('/newinstructor', async (req,res) => {
    try{
        var newinstructor = new NewInstructorModel(req.body);
        var result = await newinstructor.save();
        res.send(result);
    }catch(error){
        res.status(500).send(error);
    }
});
app.get('/newallInstructor', async (req,res) => {
    try{
        var result = await NewInstructorModel.find().exec();
        res.send(result);
    }catch(error){
        res.status(500).send(error);
    }
});

app.listen(3000, function (err) {
    if (err) {
        console.error(err);
        return;
    }

    console.log('Listening on port 3000');
});

// const express = require('express');
// const Bundler = require('parcel-bundler');
// const routes = require('./app/routes/routes');
// const mongoose  = require('mongoose');
// const app = express();
//
// const bundler = new Bundler('./public/index.html', {});
//
// app.use(express.json());
//
// mongoose.connect('mongodb://localhost:27017/af_db').then(() => {
//     console.log('Connected to the DB');
// }).catch(err => {
//     console.error(err);
//     // process.exit(-1);
// });
//
// app.use('/api', routes);
//
// app.use(bundler.middleware());
//
// app.use(express.static('./dist'));
//
// app.get('/', (req, res, next) => {
//     res.sendFile('./dist/index.html');
// });
//
// app.listen(3000, err => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log('Server is running successfully on Port 3000');
// });
