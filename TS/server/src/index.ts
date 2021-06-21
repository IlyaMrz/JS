import express, { Request, Response } from "express";
import { router } from "./routes/loginRoutes";
// import bodyParser from "body-parser";
import { AppRouter } from "./AppRouter";
import cookieSession from "cookie-session";

import "./controllers/LoginController";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(
    cookieSession({
        keys: ["asdfaff1"],
    })
);
app.use(router);
app.use(AppRouter.getInstance());

app.listen(3000);
