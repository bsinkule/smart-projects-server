const dataEngineer = require('../dataEngineer')

exports.seed = function (knex, Promise) {
    return knex('engineer').del()
        .then(function () {
        return knex('engineer').insert(dataEngineer)
        })
}