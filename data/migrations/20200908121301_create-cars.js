
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments('id');
      tbl.string('make', 128)
      .notNullable()
      .index()
      tbl.string('model', 255)
      .notNullable()
      .index()
      tbl.string('VIN', 17)
      .unique()
      .notNullable()
      .index()
      tbl.integer('mileage')
      .notNullable()
      .defaultTo(0)
      tbl.string('transmissionType', 255)
      tbl.string('status', 128)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};
