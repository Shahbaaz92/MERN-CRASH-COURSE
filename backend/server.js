//!Old module -  const express = require('express');
//* ES Module
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.get("/products", (req, res) => {
  // res.send(data.products);
});
console.log(process.env.MONGO_URI);

app.listen(5000, () => {
  console.log("Server started at http://localhost:5000 hello");
});

//nvytkDOK2ylW0E6J
//
