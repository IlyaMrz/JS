import { Router, Request, Response, NextFunction } from "express";

interface RequestWithBody extends Request {
    body: { [key: string]: string | undefined };
}

function requireAuth(req: Request, res: Response, next: NextFunction): void {
    if (req.session && req.session.loggedIn) {
        return next();
        return;
    } else {
        res.status(403);
        res.send("Not permitted");
    }
}

const router = Router();

router.get("/login", (req: RequestWithBody, res: Response) => {
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
});

router.post("/login", (req: RequestWithBody, res: Response) => {
    const { email, password } = req.body;
    if (email && password && email === "a@a.a" && password === "a") {
        req.session = { loggedIn: true };
        res.redirect("/");
        // res.send(`u r logged in as <b>${email}</b>`);
    } else {
        res.send(`access denied`);
    }
});

router.get("/", (req: Request, res: Response) => {
    if (req.session && req.session.loggedIn) {
        res.send(`
            <div>
                <div>u r logged in as <b>"user"</b></div>
                <a href="/protected">protected side</a>
                <a href="/logout">Logout</a>
                <div>

                    here is super secret stuff
                </div>
            </div>
        `);
    } else {
        res.send(`
        <div>
            <div>You are NOT logged in</div>
            <a href="/login">Log in</a>
        </div>
    `);
    }
});

router.get("/logout", (req: Request, res: Response) => {
    if (req.session && req.session.loggedIn) {
        req.session = undefined;
        res.redirect("/");
    } else {
        res.send(`<a href="/login">Log in</a>`);
    }
});

router.get("/protected", requireAuth, (req: Request, res: Response) => {
    res.send("Welcome to protected super secret side");
});

export { router };
