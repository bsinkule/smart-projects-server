const knex = require('./connection')

const getAll = (table) => knex(table).orderBy('id', 'desc')
const getOne = (table, id) =>  knex(table).where('id', id)
const postOne = (table, body) => knex(table).insert(body).returning('*')
const updateOne = (table, id, body) => knex(table).where('id', id).update(body).returning('*')
const deleteOne = (table, id) => knex(table).where('id', id).del().returning('*')

module.exports = {
    getAll,
    getOne,
    postOne,
    updateOne,
    deleteOne
}