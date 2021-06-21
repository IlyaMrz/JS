import express from "express";
// import bodyParser from "body-parser";
import { AppRouter } from "./AppRouter";
import cookieSession from "cookie-session";

import "./controllers/LoginController";
import "./controllers/rootController";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(
    cookieSession({
        keys: ["asdfaff1"],
    })
);
app.use(AppRouter.getInstance());

app.listen(3000);
