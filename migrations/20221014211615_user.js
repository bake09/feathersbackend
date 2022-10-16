export async function up(knex) {
  await knex.schema.createTable('users', (table) => {
    table.increments('id')
    table.string('text')
    table.string('name')
    table.string('profile_img')
  })
}

export async function down(knex) {
  await knex.schema.dropTable('users')
}
