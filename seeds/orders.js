/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('orders').del();
  await knex('orders').insert([
    {
      from: 'New York',
      to: 'Chicago',
      phone: '+123456789',
      estimate_time: '12.11.2022',
      transport_type: 'open',
      vehicle: 'running',
      year: '2022',
      make: 'BMW',
      model: 'ActiveHybrid 7',
      name: 'Jhon Doe',
      email: 'example@gmail.com',
    },
  ]);
};
