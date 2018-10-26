const express = require('express')
const router = express.Router()
const knex = require('../db/connection')

const queries = require('../db/queries') 

router.get('/', (req, res) => {
    queries.getAll('project')
        .then(data => {
            res.json({
                data: data
            })
        })
})

router.get('/:id', (req, res) => {
    queries.getOne('project', req.params.id)
        .then(one => {
            res.json({
                getOne: one[0]
            })
        })
})

router.post('/', (req, res) => {
    const body = req.body

    queries.postOne('project', body)
        .then(post => {
            res.json({
                posted: post[0]
            })
        })
})

router.put('/:id', (req, res) => {
    const id = req.params.id
    const body = req.body

    queries.updateOne('project', id, body)
        .then(update => {
            res.json({
                updated: update[0]
            })
        })
})

router.delete('/:id', (req, res) => {
    queries.deleteOne('project', req.params.id)
        .then(del => {
            res.json({ deleted: del[0]})
        })
})

module.exports = router