import express from "express";

import userRoutes from './routes/user.js'

const port = 3000; 

const app = express()

app.use( "/users", userRoutes);

app.get("/users", (req, res)) => {

    res.render("index");
}


app.get("/users/:id", (req, res)) => {
    
    res.render("info");