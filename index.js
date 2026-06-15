// Part One: Routes, Templates, and Views

import express from "express";

const app = express();
const port = 3000;

app.set("view engine", "ejs");
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
