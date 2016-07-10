"use strict";
var express = require("express"),
    routes = require("./app/routes/index.js");
var app = express();

routes(app);

app.listen(process.env.PORT || 3000, function () {
    console.log('Listening!');
});
