export async function up(knex) {
  await knex.schema.createTable('todos', (table) => {
    table.increments('id')
    table.string('text')
    table.string('importance').defaultTo('default')
    table.boolean('done').defaultTo(false)
    table.bigint('creater_id')
    table.string('profile_img')
    table.timestamps(true, true)
    table.datetime('pending_date')
  })
}

export async function down(knex) {
  await knex.schema.dropTable('todos')
}
