"use strict";
var platform = require("platform");

module.exports = function(app) {
    app.route("/")
        .get(function(req, res) {
            res.sendFile(process.cwd() + "/public/index.html");
        });

    app.route("/whoami")
        .get(function (req, res) {
            var ip = req.get("X-Requested-For") || req.connection.remoteAddress;
            var lang = req.get("accept-Language").split(",")[0];
            var os = platform.parse(req.get("user-agent")).os;
            os = os.family + " " + os.version;

            var reqInfo = { "ipaddress": ip, "language": lang, "software": os };
            res.end(JSON.stringify(reqInfo));
        });
};
