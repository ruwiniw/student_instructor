const express = require('express');
const router = express.Router();
const StudentRepository = require('../repository/studentRepository');

router.post('/add-student', (req,res) => {
    const body = req.body;
    StudentRepository.insertStudent(body).then((data) => {
        res.status(data.status).send(data.message)
    }).catch(err=> {
        res.send(err.status).send(err.message)
    })
});

router.get('/get-students',(req,res) => {
   StudentRepository.getAllStudents().then((data) => {
       res.status(data.status).send(data.message)
   }).catch(err => {
       res.send(err.status).send(err.message)
   })
});

router.get('/get-student/:registrationNumber',(req,res) => {
    const param = req.params;
    StudentRepository.getStudent(param.registrationNumber).then((data) => {
        res.status(data.status).send(data.message)
    }).catch(err => {
        res.send(err.status).send(err.message)
    })
});

module.exports = router;