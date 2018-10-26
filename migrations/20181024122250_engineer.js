exports.up = function (knex, Promise) {
    return knex.schema.createTable('engineer', (table) => {
        table.increments()
        table.text('name')
        table.text('imgUrl')
        table.text('title')
        table.text('department')
        table.float('hourlyWage')
        table.float('hoursPerWeek')
        table.text('startDate')
        table.text('endDate')
        table.text('auth_id')
        })
    }

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('engineer')
}