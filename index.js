// Part One: Routes, Templates, and Views 


import express from "express";

const app = express();
const port = 3000;


app.set("view engine", "ejs");
app.listen(3000, () => {
    console.log('Listening on port 3000')
})

