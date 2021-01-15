const express = require('express');
const router = new express.Router()

const DOGS = [
    {id:1, name: "champ"},
    {id:2, name: "brutus"},
]

router.get('/', (req, res) => {
    return res.json({dogs: DOGS})
})

router.get('/:id', (req, res) => {
    let dog = DOGS.find(u => u.id === +req.params.id)
    res.json({dog})
})

module.exports = router;