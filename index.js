//const express = require('express')
import express from "express";
import dotenv from "dotenv";
import { files } from "./routes/files.js";
dotenv.config();
const app = express();
//const port = 9000;
const port=process.env.PORT;
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World vivekðððððððð!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use("/files",files);