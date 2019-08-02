const express = require("express");
const router = express.Router();
const db = require("../config/database");
const Posts = require("../models/Posts");


// router.get("/", (req, res) => res.send("CONNECTED! SIR WE ARE CLEAR TO FLY"));

router.get("/", (req, res) => {
  Posts.findAll()
  .then((posts) => {
      console.log(posts);
      res.sendStatus(200);
  })
  .catch(err => console.log(err))
})

router.get("/add", (req, res) => {
  console.log(req.body);
  const data = {
    image: "https://lorempixel.com/640/480/?38655",
    title: "Holiday Season",
    date: "January",
    content: "Isaac and Mel wedding in Bali on January second",
    comment: "We walk with God even then"
  }

  let { image, title, date, content, comment } = data;

  Posts.create({
    image,
    title,
    date,
    content,
    comment
  }).then(posts => {
  res.redirect("/api/posts")
}).catch(err => console.log(err));
})

// router.post("/", (req, res) => {
//   console.log(req.body);
//   Posts.create({
//     image: req.body.image,
//     title: req.body.title,
//     date: req.body.date,
//     content: req.body.content,
//     comment: req.body.comment
//   }).then(posts => {
//   res.send("POST Created!!")
//   })
// })

// router.get("/api/posts/:id", (req, res) => {
//    let id = req.params.id
//     Posts.findOne({
//     where: {id: 'postId'},
//   }).then(posts => {
//       res.json(posts)
//     })
// })
//
// router.put("/api/posts/:id", (req, res) => {
//   let postId = req.params.id
//   let updatedPost = req.body
//   Posts.findOne({where: {id: postId}})
//   .then(posts => {
//       posts.update(updatedPost)
//       .then(newPost => {
//         res.json(newPost)
//       })
//   })
// })
//
// router.delete("/api/posts/:id", (req, res) => {
//   let postId = req.params.id
//   Posts.destroy(
//      {where: {id: postId}
//    }).then(() => {
//       res.send("Post Deleted");
//   })
// })


module.exports = router;
