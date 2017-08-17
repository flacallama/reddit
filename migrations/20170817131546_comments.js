
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', function(table){
    table.increments();  // ID column
    table.string('id_user');
    table.string('id_post');
    table.string('commentBody');
  })
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments');
};
