// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");


// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/", function(req, res) {
    // Add sequelize code to find all posts, and return them to the user with res.json
    db.burger.findAll({}).then(function(result){
      var displayedItems = {
        burgers: result };
      return res.render("index", displayedItems);
    })
  });


  // POST route for saving a new post
  app.post("/", function(req, res) {
    // Add sequelize code for creating a post using req.body,
    // then return the result using res.json
    var newBurger = req.body;

    db.burger.create({
      burger_name: newBurger.name
      }).then(function(result){
      res.redirect("/");
  });
    });

  //PUT route for updating burger to eaten
  app.put("/:id", function(req,res){

    db.burger.update({
      devoured: req.body.devoured},{
        where: {id: req.params.id}
      }).then(function(result){
        res.redirect("/");
      });
  });


};
