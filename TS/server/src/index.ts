import express, { Request, Response } from "express";
import { router } from "./routes/loginRoutes";
// import bodyParser from "body-parser";
import { router as controllerRouter } from "./controllers/decorators/controller";
import cookieSession from "cookie-session";

import "./controllers/LoginController";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(
    cookieSession({
        keys: ["asdfaff1"],
    })
);
app.use(controllerRouter);
app.use(router);

app.listen(3000);
