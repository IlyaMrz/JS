import { NextFunction, Request, Response } from "express";
import { get, controller, use } from "./decorators";

function logger(req: Request, res: Response, next: NextFunction): void {
    console.log("request was made");
    next();
}

@controller("/auth")
export class LoginController {
    @get("/login")
    @use(logger)
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
}
