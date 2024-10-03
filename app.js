import express from "express";
import expressHandlebars from "express-handlebars";

const app = express();

// Templating engine configure
app.engine("handlebars", expressHandlebars.engine({ defaultLayout: "main" })); // layout principal
app.set("view engine", "handlebars");

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.type("text/plain");
    res.send("Meadowlark Travel");
});

app.get("/about*", (req, res) => {
    res.type("text/plain");
    res.send("About Meadowlark Travel");
});

app.get("/about/contact", (req, res) => {
    res.type("text/plain");
    res.send("About Contacts");
});

app.get("/about/directions", (req, res) => {
    res.type("text/plain");
    res.send("About Directions");
});

app.use((err, req, res, next) => {
    console.error(err.message);
    res.type("text/plain");
    res.status(500);
    res.send("500 - Server Error");
});

app.use((req, res) => {
    res.type("text/plain");
    res.status(404);
    res.send("404 - Not Found!");
});

app.listen(PORT, () =>
    console.log(`Express started on http://localhost:${PORT}`),
);
