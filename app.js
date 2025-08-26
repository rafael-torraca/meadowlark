import express from "express";
import expressHandlebars from "express-handlebars";
import path from "path";
import getFortune from "./lib/fortune.js";

const __dirname = path.resolve();
const app = express();

// Templating engine configure
app.engine("handlebars", expressHandlebars.engine({ defaultLayout: "main" }));
// layout principal
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));
app.set("view cache", false);
app.use(express.static(__dirname + "/public"));

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => res.render("home"));

app.get("/about", (req, res) => {
    res.render("about", { fortune: getFortune() });
});

app.use((req, res) => {
    res.status(404);
    res.render("404");
});

app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500);
    res.render("500");
});

app.listen(PORT, () =>
    console.log(`Express started on http://localhost:${PORT}`),
);
