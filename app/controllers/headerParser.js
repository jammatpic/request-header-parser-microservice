"use strict";
var platform = require("platform");

function headerParser() {
    this.parseHeader = function(req, res) {
        // getting IP address, language, and OS information - mostly from the HTTP headers.
        var ip = req.get("X-Requested-For") || req.connection.remoteAddress; 
        var lang = req.get("accept-Language").split(",")[0];
        var os = platform.parse(req.get("user-agent")).os;
        os = os.family + " " + os.version;

        var reqInfo = { "ipaddress": ip, "language": lang, "software": os };
        res.end(JSON.stringify(reqInfo));
    };
};

module.exports = headerParser;
