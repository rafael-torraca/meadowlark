import express from "express";
import expressHandlebars from "express-handlebars";
import path from "path";

const __dirname = path.resolve();
const app = express();

// Templating engine configure
app.engine("handlebars", expressHandlebars.engine({ defaultLayout: "main" })); // layout principal
app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/public"));

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => res.render("home"));

app.get("/about", (req, res) => {
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    res.render("about", { fortune: randomFortune });
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

const fortunes = [
    "Conquer your fears or they will conquer you.",
    "Rivers need springs.",
    "Do not fear what you don't know.",
    "You will have a pleasant surprase.",
    "Whenever possible, keep it simple.",
];

app.listen(PORT, () =>
    console.log(`Express started on http://localhost:${PORT}`),
);
