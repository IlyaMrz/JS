import express, { Request, Response } from "express";
import { router } from "./routes.ts/loginRoutes";
// import bodyParser from "body-parser";
import cookieSession from "cookie-session";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(
    cookieSession({
        keys: ["asdfaff1"],
    })
);
app.use(router);

app.listen(3000);
