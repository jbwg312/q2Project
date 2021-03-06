exports.up = function(knex, Promise) {
  return knex.schema.createTable('finished_batches', function(table){
    table.increments();
    table.string('beer_name');
    table.integer('user_id');
    table.foreign('user_id').references('id').inTable('users');
    table.integer('batch_id');
    table.foreign('batch_id').references('id').inTable('batch');
    table.string('taste');
    table.string('aftertaste');
    table.string('appearance');
    table.string('smell');
    table.string('mouth_feel');
    table.string('drinkability');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('finished_batches');
};
