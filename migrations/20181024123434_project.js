exports.up = function (knex, Promise) {
    return knex.schema.createTable('project', (table) => {
        table.increments()
        table.text('projectName')
        table.text('client')
        table.text('logoClient')
        table.float('revenue')
        table.float('frontendHours')
        table.float('backendHours')
        table.text('startDate')
        table.text('endDate')
        table.text('auth_id')
        })
    }

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('project')
}