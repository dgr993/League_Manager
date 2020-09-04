// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
    app.get("/", (req, res) => {
        // If the user already has an account send them to the members page
        if (req.user) {
            return res.render("homepage"
            // ,  { layout: 'loggedin' }
            );
        }
        res.render("signup");
    });


    app.get("/login", (req, res) => {
        // If the user already has an account send them to the members page
        if (req.user) {
            res.redirect("/");
        }
        res.render("login");
    });

    app.get("/createplayer", (req, res) => {
        // If the user already has an account send them to the members page
        res.render('create_new_players');
    });

    // Here we've add our isAuthenticated middleware to this route.
    // If a user who is not logged in tries to access this route they will be redirected to the signup page
    // app.get("/members", isAuthenticated, (req, res) => {
    //     res.sendFile(path.join(__dirname, "../public/members.html"));
    // });


    app.get('/coaches', isAuthenticated, function (req, res, next) {
        res.render('coaches', { layout: 'loggedin' });
    });
};
