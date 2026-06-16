const express = require("express");
const app = expres();

app.listen (3000, () => {
    console.log("Server Running")
});

app.get("/", (req, res) => {
    res.send("Welcome to the Pet Store!")
});

app.get("/animals/dogs", (req, res) =>) {
    res.send("Woof! Dogs")
};

app.get("/animals/cats", (req, res) = > {
    res.send ("Meow, Cats")
});

app.get("/animals/:animal", (req,res) =>) {
    res.send(`You selected: ${req.params.animal}`)
};
