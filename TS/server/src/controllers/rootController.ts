import { Request, Response, NextFunction } from "express";
import { controller, get, use } from "./decorators";

function requireAuth(req: Request, res: Response, next: NextFunction): void {
    if (req.session && req.session.loggedIn) {
        return next();
        return;
    } else {
        res.status(403);
        res.send("Not permitted");
    }
}

@controller("")
class RootController {
    @get("/")
    getRoot(req: Request, res: Response) {
        if (req.session && req.session.loggedIn) {
            res.send(`
                <div>
                    <div>u r logged in as <b>"user"</b></div>
                    <a href="/protected">protected side</a>
                    <a href="/auth/logout">Logout</a> 
                    <div>
    
                        here is super secret stuff
                    </div>
                </div>
            `);
        } else {
            res.send(`
            <div>
                <div>You are NOT logged in</div>
                <a href="/auth/login">Log in</a>
            </div>
        `);
        }
    }

    @get("/protected")
    @use(requireAuth)
    getProtected(req: Request, res: Response) {
        res.send("Welcome to protected super secret side");
    }
}
