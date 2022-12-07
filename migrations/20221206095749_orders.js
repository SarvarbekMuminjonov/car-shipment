/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('orders', (table) => {
    table.increments('id');
    table.string('name').notNullable();
    table.string('from').notNullable();
    table.string('to').notNullable();
    table.string('email').notNullable();
    table.timestamps(true, true);
    table.string('phone').notNullable();
    table.string('estimate_time').notNullable();
    table.string('make').notNullable();
    table.string('model').notNullable();
    table.string('transport_type').notNullable();
    table.string('vehicle').notNullable();
    table.string('year').notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('orders');
};
