/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.raw(`CREATE TABLE zip_codes(
   id                serial
  ,zip               VARCHAR(10) NOT NULL 
  ,primary_city      VARCHAR(27) NOT NULL
  ,acceptable_cities VARCHAR(282)
  ,state             VARCHAR(2) NOT NULL
  ,county            VARCHAR(39)
  ,country           VARCHAR(2)
  ,latitude          NUMERIC(6,2) NOT NULL
  ,longitude         NUMERIC(7,2) NOT NULL
);`);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('zip_codes');
};
