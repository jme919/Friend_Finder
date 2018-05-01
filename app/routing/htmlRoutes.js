var path = require("path");
var bodyParser = require("body-parser");
var express = require("express");

//survey page route//
module.exports = function(app){
	app.get("/survey", function (req,res){
		res.sendFile(path.join(__dirname + "/../public/survey.html"));

	});


//home page route//
	app.use("/", function(req, res){
		res.sendFile(path.join(__dirname + "/../public/home.html"));
	});
};