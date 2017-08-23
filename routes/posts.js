var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');
var bcrypt = require('bcrypt');

router.get('/:id', function(req, res, next) {
  var id = req.params.id
  knex.raw(`select users.id as users_id, users.username as users_username, posts.id as posts_id, posts.posttitle as posts_title, posts.postbody as posts_body from users join posts on users.id = posts.id_user where posts.id = ${id}`)
  .then(function(data){
    res.render('postsShow', {posts:data.rows[0], allPosts:data.rows});
  })
})


router.post('/:id', function(req, res, next){
  // idUser = res.cookie('id')
  // console.log(idUser)
  var idWrong = req.params.id
  knex.raw(`SELECT * FROM posts where id = ${idWrong}`)
  console.log(idWrong)
    // .then(function(data){
    //   console.log(data.rows)
    //   // knex.raw(`INSERT into posts (id_user, posttitle, postbody) values(${idWrong}, )`)
    // })

})

// bcrypt.hash(user.rows[0].id, 12, function(err, hashID){
//   bcrypt.compare(req.body.password, user.rows[0].password, function(err, resp){
//     if(resp){
//       res.cookie('id', '${hashID}', {maxAge: 100000, httpOnly: true})
//       res.cookie('username', user.rows[0].username, {maxAge: 100000, httpOnly: true})
//       // console.log(user.rows[0])


// INSERT into tickets values(default, ‘Fred’, ‘Fred@gmail.com’, ‘cannot login’, true, 5);






module.exports = router;
