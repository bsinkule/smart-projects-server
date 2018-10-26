const express = require('express')
const router = express.Router()
const knex = require('../db/connection')

const queries = require('../db/queries') 

router.get('/', (req, res) => {
    queries.getAll('engineer')
        .then(data => {
            res.json({
                data: data
            })
        })
})

router.get('/:id', (req, res) => {
    queries.getOne('engineer', req.params.id)
        .then(one => {
            res.json({
                getOne: one[0]
            })
        })
})

router.post('/', (req, res) => {
    const body = req.body

    queries.postOne('engineer', body)
        .then(post => {
            res.json({
                posted: post[0]
            })
        })
})

router.put('/:id', (req, res) => {
    const id = req.params.id
    const body = req.body

    queries.updateOne('engineer', id, body)
        .then(update => {
            res.json({
                updated: update[0]
            })
        })
})

router.delete('/:id', (req, res) => {
    queries.deleteOne('engineer', req.params.id)
        .then(del => {
            res.json({ deleted: del[0]})
        })
})

module.exports = router