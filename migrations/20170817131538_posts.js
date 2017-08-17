exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', function(table){
    table.increments();  // ID column
    table.string('id_user');
    table.string('postTitle');
    table.string('postBody');
  })
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};
