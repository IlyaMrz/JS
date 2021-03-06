"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        return next();
        return;
    }
    else {
        res.status(403);
        res.send("Not permitted");
    }
}
var router = express_1.Router();
exports.router = router;
router.post("/login", function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (email && password && email === "a@a.a" && password === "a") {
        req.session = { loggedIn: true };
        res.redirect("/");
        // res.send(`u r logged in as <b>${email}</b>`);
    }
    else {
        res.send("access denied");
    }
});
router.get("/", function (req, res) {
    if (req.session && req.session.loggedIn) {
        res.send("\n            <div>\n                <div>u r logged in as <b>\"user\"</b></div>\n                <a href=\"/protected\">protected side</a>\n                <a href=\"/logout\">Logout</a>\n                <div>\n\n                    here is super secret stuff\n                </div>\n            </div>\n        ");
    }
    else {
        res.send("\n        <div>\n            <div>You are NOT logged in</div>\n            <a href=\"/login\">Log in</a>\n        </div>\n    ");
    }
});
router.get("/logout", function (req, res) {
    if (req.session && req.session.loggedIn) {
        req.session = undefined;
        res.redirect("/");
    }
    else {
        res.send("<a href=\"/login\">Log in</a>");
    }
});
router.get("/protected", requireAuth, function (req, res) {
    res.send("Welcome to protected super secret side");
});
