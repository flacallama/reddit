
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {id_user: '1', id_post: '2', commentBody: 'response to trying'},
        {id_user: '2', id_post: '3', commentBody: 'response to wanting'},
        {id_user: '3', id_post: '4', commentBody: 'response to needing'},
        {id_user: '4', id_post: '1', commentBody: 'response to testing'},
        {id_user: '1', id_post: '3', commentBody: 'response to wanting'},
        {id_user: '2', id_post: '4', commentBody: 'response to trying'},
        {id_user: '3', id_post: '1', commentBody: 'response to testing'},
        {id_user: '4', id_post: '2', commentBody: 'response to needing'},
      ]);
    });
};
