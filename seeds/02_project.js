const dataProject = require('../dataProject')

exports.seed = function (knex, Promise) {
    return knex('project').del()
        .then(function () {
        return knex('project').insert(dataProject)
        })
}