const express = require('express');
const router = express.Router();
const CompleteAssignmentsRepository = require('../repository/completeAssignmentsRepository');

router.post('/add-assignment', (req, res) => {
    const body = req.body;
    CompleteAssignmentsRepository.insertAssignment(body).then((data) => {
        res.status(data.status).send(data.message)
    }).catch(err => {
        res.send(err.status).send(err.message)
    })
});

router.get('/get-assignments', (req, res) => {
    CompleteAssignmentsRepository.getAllAssignments().then((data) => {
        res.status(data.status).send(data.message)
    }).catch(err => {
        res.send(err.status).send(err.message)
    })
});

router.get('/get-assignment/:registrationNumber', (req, res) => {
    const param = req.params;
    CompleteAssignmentsRepository.getAssignment(param.registrationNumber).then((data) => {
        res.status(data.status).send(data.message)
    }).catch(err => {
        res.send(err.status).send(err.message)
    })
});

module.exports = router;