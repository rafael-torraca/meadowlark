import getFortune from "./fortune.js";

class Handlers {
    constructor() {}

    static home = (req, res) => res.render("home");
    static about = (req, res) => res.render("about", { fortune: getFortune() });
    static notFound = (req, res) => res.render("404");
    /* eslint-disable no-unused-vars */
    static serverErorr = (err, req, res, next) => res.render("500");
    /* eslint-enable no-unused-vars */
}

export { Handlers };

// 1 forma pensada
// const home = (req, res) => res.render("home");
// const about = (req, res) => res.render("about", { fortune: getFortune() });
// const notFound = (req, res) => res.render("404");
// const serverErorr = (err, req, res, next) => res.render("500");

// export { home, about, notFound, serverErorr };

// 2 forma pensada
// function Handlers() {}
// Handlers.home = (req, res) => res.render("home");
// Handlers.about = (req, res) => res.render("about", { fortune: getFortune() });
// Handlers.notFound = (req, res) => res.render("404");
// Handlers.serverErorr = (err, req, res, next) => res.render("500");

// export { Handlers };
