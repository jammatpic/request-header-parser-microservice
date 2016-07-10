"use strict";
var HeaderParser = require(process.cwd() + "/app/controllers/headerParser.js");

module.exports = function(app) {
    var headerParser = new HeaderParser();

    // sends index.html to home
    app.route("/")
        .get(function(req, res) {
            res.sendFile(process.cwd() + "/public/index.html");
        });

    // parses header when /whoami is visited
    app.route("/whoami")
        .get(headerParser.parseHeader);
};
