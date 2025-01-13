import express from "express";
import expressHandlebars from "express-handlebars";
import path from "path";
import { Handlers } from "./lib/handlers.js";

const __dirname = path.resolve();
const app = express();
const PORT = process.env.PORT || 3000;

app.engine("handlebars", expressHandlebars.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static(__dirname + "/public"));
app.disable("x-powered-by");
app.get("/", Handlers.home);
app.get("/about", Handlers.about);

app.get("/headers", (req, res) => {
    res.type("text/plain");
    const headers = Object.entries(req.headers).map(
        ([key, value]) => `${key}: ${value}`,
    );
    res.send(headers.join("\n"));
});

app.get("/tests", (req, res) => {
    let ip = req.ip;
    console.log(typeof ip);
    res.send("valew!");
});

app.use(Handlers.notFound);
app.use(Handlers.serverErorr);

if (PORT !== "test") {
    app.listen(PORT, () => {
        console.log(`Express started on http://localhost:${PORT}`);
    });
}

export default app;
