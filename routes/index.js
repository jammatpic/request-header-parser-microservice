"use strict";

module.exports = function(app) {
    app.route("/")
        .get(function(req, res) {
            res.sendFile(process.cwd() + "/public/index.html");
        });

    app.route("/whoami")
        .get(function (req, res) {
            var ip = req.get("X-Requested-For");
            var lang = req.get("Content-Language");
            var reqInfo = { "ipaddress": toString(ip), "language": toString(lang) };
            res.end(JSON.stringify(reqInfo));
        });
};
