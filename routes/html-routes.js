// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const db = require("../models");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
    app.get("/", (req, res) => {
        // If the user already has an account send them to the members page
        if (req.user) {
            return res.render("homepage", { layout: 'everypage' }
            );
        }
        res.render("signup");
    });


    app.get("/login", (req, res) => {
        // If the user already has an account send them to the members page

        res.render("login");
    });

    app.get("/createplayer", (req, res) => {
        res.render('newplayer', { layout: 'everypage' });
    });

    app.get("/createteam", (req, res) => {
        res.render('newteam', { layout: 'everypage' });
    });

    app.get("/createleague", (req, res) => {
        res.render('newleague', { layout: 'everypage' });
    });
    app.get("/teams", (req, res) => {
        res.render('teams', { layout: 'everypage' });
    });
// each item for team getting its own page
    app.get("/teams/:id", (req, res) => {

        db.Team.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (dbteam) {
           
            let data=dbteam.dataValues
             console.log(data)
                res.render('teams',  { data, layout: 'everypage' });
            });
        
    });

    app.get("/leagues/:id", (req, res) => {
        db.League.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (dbleague) {
           
            let data=dbleague.dataValues
             console.log(data)
                res.render('leagues',  { data, layout: 'everypage' });
            });
        
    });

    app.get("/players/:id", (req, res) => {
        db.Player.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (dbplayer) {
           
            let data=dbplayer.dataValues
             console.log(data)
                res.render('players',  { data, layout: 'everypage' });
            });
        

    });

    // Here we've add our isAuthenticated middleware to this route.
    // If a user who is not logged in tries to access this route they will be redirected to the signup page
    // app.get("/members", isAuthenticated, (req, res) => {
    //     res.sendFile(path.join(__dirname, "../public/members.html"));
    // });


    // app.get('/coaches', isAuthenticated, function (req, res, next) {
    //     res.render('coaches', { layout: 'everypage' });
    // });
    // app.get('/schedule', isAuthenticated, function (req, res, next) {
    //     res.render('schedule', { layout: 'everypage' });
    // });
    // app.get('/matchinput', isAuthenticated, function (req, res, next) {
    //     res.render('matchinput', { layout: 'everypage' });
    // });

    // app.get('/teams', isAuthenticated, function (req, res, next) {
    //     res.render('teams', { layout: 'everypage' });
    // });

};
