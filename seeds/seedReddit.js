
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {user_name: 'Ricky', password: 'rickster', email: 'fake@faker.com'},
        {user_name: 'Bobby', password: 'bobster', email: 'fake@faker.com'},
        {user_name: 'Thelma', password: 'thelmer', email: 'fake@faker.com'},
        {user_name: 'Louise', password: 'louster', email: 'fake@faker.com'},
      ]);
    });
  // return knex('posts').del()
  //   .then(function () {
  //     // Inserts seed entries
  //     return knex('posts').insert([
  //       {id_user: '1', postTitle: 'testing', postBody: 'heyas'},
  //       {id_user: '2', postTitle: 'trying', postBody: 'ur dumb'},
  //       {id_user: '3', postTitle: 'wanting', postBody: 'ftfy'},
  //       {id_user: '4', postTitle: 'needing', postBody: 'thumbs up'},
  //     ]);
  //   });
  // return knex('comments').del()
  //   .then(function () {
  //     // Inserts seed entries
  //     return knex('comments').insert([
  //       {id_user: '1', id_post: '2', commentBody: 'response to trying'},
  //       {id_user: '2', id_post: '3', commentBody: 'response to wanting'},
  //       {id_user: '3', id_post: '4', commentBody: 'response to needing'},
  //       {id_user: '4', id_post: '1', commentBody: 'response to testing'},
  //       {id_user: '1', id_post: '3', commentBody: 'response to wanting'},
  //       {id_user: '2', id_post: '4', commentBody: 'response to trying'},
  //       {id_user: '3', id_post: '1', commentBody: 'response to testing'},
  //       {id_user: '4', id_post: '2', commentBody: 'response to needing'},
  //     ]);
  //   });




};
