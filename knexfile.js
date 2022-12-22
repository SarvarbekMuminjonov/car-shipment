/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({ path: './.env' });
module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: process.env.POSTGRESS_DB,
      user: process.env.POSTGRESS_USERNAME,
      password: process.env.POSTGRESS_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'car_shipment',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      connectionString: process.env.DATABASE_URL,
      database: process.env.POSTGRESS_DB,
      user: process.env.POSTGRESS_USERNAME,
      password: process.env.POSTGRESS_PASSWORD,
      port: process.env.POSTGRESS_PORT,
      ssl: {
        rejectUnauthorized: false,
        ca: process.env.CACERT,
      },
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};
