/**
 * @param { import('knex').Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('companies').del();
  await knex.raw(`
INSERT INTO companies(company_name) VALUES ('AC');
INSERT INTO companies(company_name) VALUES ('Acura');
INSERT INTO companies(company_name) VALUES ('Alfa Romeo');
INSERT INTO companies(company_name) VALUES ('Am General');
INSERT INTO companies(company_name) VALUES ('American Motors');
INSERT INTO companies(company_name) VALUES ('Aston Martin');
INSERT INTO companies(company_name) VALUES ('ATV');
INSERT INTO companies(company_name) VALUES ('Auburn');
INSERT INTO companies(company_name) VALUES ('Audi');
INSERT INTO companies(company_name) VALUES ('Austin');
INSERT INTO companies(company_name) VALUES ('Austin-Healey');
INSERT INTO companies(company_name) VALUES ('Avanti Motors');
INSERT INTO companies(company_name) VALUES ('Bentley');
INSERT INTO companies(company_name) VALUES ('BMW');
INSERT INTO companies(company_name) VALUES ('Boat');
INSERT INTO companies(company_name) VALUES ('Bugatti');
INSERT INTO companies(company_name) VALUES ('Buick');
INSERT INTO companies(company_name) VALUES ('Cadillac');
INSERT INTO companies(company_name) VALUES ('Checker');
INSERT INTO companies(company_name) VALUES ('Chevrolet');
INSERT INTO companies(company_name) VALUES ('Chrysler');
INSERT INTO companies(company_name) VALUES ('Citroen');
INSERT INTO companies(company_name) VALUES ('Daewoo');
INSERT INTO companies(company_name) VALUES ('Daihatsu');
INSERT INTO companies(company_name) VALUES ('Datsun');
INSERT INTO companies(company_name) VALUES ('Delahaye');
INSERT INTO companies(company_name) VALUES ('Delorean');
INSERT INTO companies(company_name) VALUES ('Desoto');
INSERT INTO companies(company_name) VALUES ('DeTomaso');
INSERT INTO companies(company_name) VALUES ('Dodge');
INSERT INTO companies(company_name) VALUES ('Eagle');
INSERT INTO companies(company_name) VALUES ('Edsel');
INSERT INTO companies(company_name) VALUES ('Essex');
INSERT INTO companies(company_name) VALUES ('Ferrari');
INSERT INTO companies(company_name) VALUES ('Fiat');
INSERT INTO companies(company_name) VALUES ('Fisker');
INSERT INTO companies(company_name) VALUES ('Ford');
INSERT INTO companies(company_name) VALUES ('Franklin');
INSERT INTO companies(company_name) VALUES ('Genesis');
INSERT INTO companies(company_name) VALUES ('Geo');
INSERT INTO companies(company_name) VALUES ('GMC');
INSERT INTO companies(company_name) VALUES ('Honda');
INSERT INTO companies(company_name) VALUES ('Hudson');
INSERT INTO companies(company_name) VALUES ('Hummer');
INSERT INTO companies(company_name) VALUES ('Hupmobile');
INSERT INTO companies(company_name) VALUES ('Hyundai');
INSERT INTO companies(company_name) VALUES ('Infiniti');
INSERT INTO companies(company_name) VALUES ('International');
INSERT INTO companies(company_name) VALUES ('Isuzu');
INSERT INTO companies(company_name) VALUES ('Jaguar');
INSERT INTO companies(company_name) VALUES ('Jeep');
INSERT INTO companies(company_name) VALUES ('Jensen');
INSERT INTO companies(company_name) VALUES ('Kaiser');
INSERT INTO companies(company_name) VALUES ('Kia');
INSERT INTO companies(company_name) VALUES ('Koenigsegg');
INSERT INTO companies(company_name) VALUES ('Lamborghini');
INSERT INTO companies(company_name) VALUES ('Lancia');
INSERT INTO companies(company_name) VALUES ('Land Rover');
INSERT INTO companies(company_name) VALUES ('LaSalle');
INSERT INTO companies(company_name) VALUES ('Lexus');
INSERT INTO companies(company_name) VALUES ('Lincoln');
INSERT INTO companies(company_name) VALUES ('Lotus');
INSERT INTO companies(company_name) VALUES ('Maserati');
INSERT INTO companies(company_name) VALUES ('Maybach');
INSERT INTO companies(company_name) VALUES ('Mazda');
INSERT INTO companies(company_name) VALUES ('McLaren');
INSERT INTO companies(company_name) VALUES ('Mercedes-Benz');
INSERT INTO companies(company_name) VALUES ('Mercury');
INSERT INTO companies(company_name) VALUES ('Merkur');
INSERT INTO companies(company_name) VALUES ('MG');
INSERT INTO companies(company_name) VALUES ('MINI');
INSERT INTO companies(company_name) VALUES ('Mitsubishi');
INSERT INTO companies(company_name) VALUES ('Morgan');
INSERT INTO companies(company_name) VALUES ('Morris');
INSERT INTO companies(company_name) VALUES ('Motorcycle');
INSERT INTO companies(company_name) VALUES ('Nash');
INSERT INTO companies(company_name) VALUES ('Nissan');
INSERT INTO companies(company_name) VALUES ('Oldsmobile');
INSERT INTO companies(company_name) VALUES ('Opel');
INSERT INTO companies(company_name) VALUES ('Packard');
INSERT INTO companies(company_name) VALUES ('Panoz');
INSERT INTO companies(company_name) VALUES ('Peugeot');
INSERT INTO companies(company_name) VALUES ('Plymouth');
INSERT INTO companies(company_name) VALUES ('Pontiac');
INSERT INTO companies(company_name) VALUES ('Porsche');
INSERT INTO companies(company_name) VALUES ('Qvale');
INSERT INTO companies(company_name) VALUES ('RAM');
INSERT INTO companies(company_name) VALUES ('Renault');
INSERT INTO companies(company_name) VALUES ('Rolls-Royce');
INSERT INTO companies(company_name) VALUES ('Rover');
INSERT INTO companies(company_name) VALUES ('RV');
INSERT INTO companies(company_name) VALUES ('Saab');
INSERT INTO companies(company_name) VALUES ('Saleen');
INSERT INTO companies(company_name) VALUES ('Saturn');
INSERT INTO companies(company_name) VALUES ('Scion');
INSERT INTO companies(company_name) VALUES ('smart');
INSERT INTO companies(company_name) VALUES ('Spyker');
INSERT INTO companies(company_name) VALUES ('SRT');
INSERT INTO companies(company_name) VALUES ('Sterling');
INSERT INTO companies(company_name) VALUES ('Studebaker');
INSERT INTO companies(company_name) VALUES ('Subaru');
INSERT INTO companies(company_name) VALUES ('Sunbeam');
INSERT INTO companies(company_name) VALUES ('Suzuki');
INSERT INTO companies(company_name) VALUES ('Tesla');
INSERT INTO companies(company_name) VALUES ('Toyota');
INSERT INTO companies(company_name) VALUES ('Triumph');
INSERT INTO companies(company_name) VALUES ('Volkswagen');
INSERT INTO companies(company_name) VALUES ('Volvo');
INSERT INTO companies(company_name) VALUES ('Willys');
INSERT INTO companies(company_name) VALUES ('Yacht');
INSERT INTO companies(company_name) VALUES ('Yugo');
INSERT INTO companies(company_name) VALUES ('Heavy Equipment');
INSERT INTO companies(company_name) VALUES ('Freight');
INSERT INTO companies(company_name) VALUES ('Harley-davidson');
INSERT INTO companies(company_name) VALUES ('Other');
`);
};
