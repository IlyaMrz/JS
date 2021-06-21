"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var loginRoutes_1 = require("./routes/loginRoutes");
// import bodyParser from "body-parser";
var controller_1 = require("./controllers/decorators/controller");
var cookie_session_1 = __importDefault(require("cookie-session"));
require("./controllers/LoginController");
var app = express_1.default();
app.use(express_1.default.urlencoded({ extended: true }));
app.use(cookie_session_1.default({
    keys: ["asdfaff1"],
}));
app.use(controller_1.router);
app.use(loginRoutes_1.router);
app.listen(3000);
