const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Idea = require("../models/Idea");
const User = require("../models/User");

router.post("/new/:id", (req, res) => {
  newIdea = req.body;
  console.log("user data:",newIdea)
  console.log("user body:",req.body)

  Idea.create({ title : req.body.title, description: req.body.description, user : req.params.id})
    .then(idea => {
      console.log(idea._id);
      User.findByIdAndUpdate(req.params.id, {
        $push: { ideas: { $each: [idea._id] } }
      })
        .then(user => {
          res.json({ message : "Idea Created for User"}).status(200);
        })
        .catch(err => res.json(err).status(400));
    })
    .catch(err => res.json(err).status(400));
});


router.get("/ideas", (req, res) => {
  Idea.find().sort('-createdAt')
  .populate('user')
    .then(ideas => {
      console.log(ideas)
      res.json(ideas)})
    .catch(err => res.send(err));
});

router.get("/:id", (req, res) => {
  Idea.findById(req.param.id)
    .then(ideas => {
      console.log(ideas)
      res.json(ideas)
    })
    .catch(err => res.send(err));
});

router.get("/ideas/:userId", (req, res) => {
  console.log(req.params.userId);
  User.findById(req.params.userId)
    .then(user => {
      console.log(user.ideas);
      Idea.find({ _id: { $in: user.ideas } })
        .then(idea => res.json(idea))
        .catch(err => res.send(err));
    })
    .catch(err => res.send(err));
});

module.exports = router;
