const express = require('express');

// connection to cars database
const db = require('../data/connection')

const router = express.Router();


/* GET REQUESTS */

// Get list of all Car Inventory
router.get('/', (req, res) => {
    db('cars')
    .then(cars => {
        res.status(200).json({ data: cars });
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: err.message })
    })
})

// Get info on specific car by ID
router.get('/:id', (req, res) => {
    const { id } = req.params;

    db('cars')
    .where({ id }).first()
    .then(fruit =>{
        res.status(200).json(fruit);
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({ error: err.message })
    });
});


/* POST REQUESTS */
router.post('/', (req, res) => {
    const carData = req.body

    db('cars')
    .insert(carData)
    .returning('id')
    .then(ids => {
        res.status(201).json({ data: ids })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ error: err.message })
    });
});

module.exports = router