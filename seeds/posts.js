
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {id_user: '1', postTitle: 'testing', postBody: 'heyas'},
        {id_user: '2', postTitle: 'trying', postBody: 'ur dumb'},
        {id_user: '3', postTitle: 'wanting', postBody: 'ftfy'},
        {id_user: '4', postTitle: 'needing', postBody: 'thumbs up'},
      ]);
    });
};
