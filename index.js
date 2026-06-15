// Part One: Routes, Templates, and Views

import express from "express";

// Part Two: Middleware (installed)
import morgan from "morgan";

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(morgan("dev"));

app.listen(3000, () => {
  console.log("Listening on port 3000");
});


app.post("/submit", (req, res) => {
console.log(req.body);
res.send("Success!")
});


app.get("/", (req, res) => {
  res.render("home", { title: "App", message: "Welcome!" });
});

app.get('/about', (req, res) => {
    res.render('about', {title: 'App', message: 'Welcome!'})
})

app.get("/:name", (req,res) => {
    res.render("about")
})

app.listen(port, () =< {
    console.log (`Server is Running on port ${port}`);
})

