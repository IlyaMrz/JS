import { NextFunction, Request, Response } from "express";
import { get, controller, bodyValidator, post } from "./decorators";

@controller("/auth")
export class LoginController {
    @get("/login")
    getLogin(req: Request, res: Response): void {
        res.send(`
        <form method="POST">
            <div>
                <label>Email</label>
                <input name="email" />
            </div>
            <div>
                <label>Password</label>
                <input name="password">
            </div>
            <button>Submit</button>
        </form>
        `);
    }

    @post("/login")
    @bodyValidator("email", "password")
    postLogin(req: Request, res: Response) {
        const { email, password } = req.body;
        if (email && password && email === "a@a.a" && password === "a") {
            req.session = { loggedIn: true };
            res.redirect("/");
            // res.send(`u r logged in as <b>${email}</b>`);
        } else {
            res.send(`access denied`);
        }
    }
}
