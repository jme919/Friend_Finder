var friends = require("../data/friends.js");
var path = require("path");
var bodyParser = require("body-parser");
var express = require("express");
var bestBud;
var bestBudArray

//get route//
module.exports = function(app){
	app.get("/api/friends", function(req, res){
		res.json(friends);
	});

//post route//
	app.post("/api/friends", function(req,res){
		var userScores = req.body.scores;
		var friendName = "";
		var friendImage = "";
		var Total = "99999";
		var userData = req.body;

//trying to get the difference between the new users score and the scores of the previouse users//
		for(var i = 0; i < friends.length; i++){
			var difference = 0;
			for(var x = 0; x < userScores.length; x++){
				difference += Math.abs(friends[i].scores[x] - userScores[x]);
			}
			if (difference < Total){
				Total = difference;
				friendName = friends[i].name;
				friendImage = friends[i].photo;
			}

		}

		friends.push(userData);

		res.json({friendName: friendName, friendImage: friendImage})


		
	});
};