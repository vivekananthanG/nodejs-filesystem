import express from "express";
import fs from "fs";
import path from "path";

export const router = express.Router();

router.get("/", (req, res) => {
  fs.readdir("./folder", (err, data) => {
    const txtFiles = data.filter(el => path.extname(el) === '.txt')
    res.send(txtFiles);
  });
});

router.put("/add", (req, res) => {
  let date = new Date();
  let fileName =
    date.getDate() +
    "-" +
    (date.getMonth() + 1) +
    "-" +
    date.getFullYear() +
    "-" +
    date.getHours() +
    "-" +
    date.getMinutes() +
    "-" +
    date.getSeconds();

  fs.writeFile(`./folder/${fileName}.txt`, date.toString(), (err) => {
    res.send("File Created!!");
  });
});

export const files = router;
