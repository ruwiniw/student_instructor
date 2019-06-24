const express = require('express');
const router = express.Router();
const CourseRepository = require('../repository/courseRepository');


router.post('/add-course', (req,res) => {
    const body = req.body;
    CourseRepository.insertCourse(body).then((data) => {
        res.status(data.status).send(data.message)
    }).catch(err=> {
        res.send(err.status).send(err.message)
    })
});

router.get('/get-courses',(req,res) => {
    CourseRepository.getAllCourses().then((data) => {
        res.status(data.status).send(data.message)
    }).catch(err => {
        res.send(err.status).send(err.message)
    })
});

router.delete('/delete/:LecturerInCharge',(res,req)=>{
    CourseRepository.delete(req.params.LecturerInCharge).then(data=>{
        res.status(data.status).send(data.message)
    }).catch(err=>{
        res.status(err.status).send(err.message)
    })
});

module.exports = router;