
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {id: 3, make: 'Ford', model: 'F-150', VIN: 'VIN92839485938431', mileage: 38483},
        {id: 4, make: 'Dodge', model: 'Ram', VIN: 'VIN92839485938432', mileage: 22839},
        {id: 5, make: 'Toyota', model: 'Tacoma', VIN: 'VIN92839485938433', mileage: 14234}
      ]);
    });
};
