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
  let d = new Date();
  let filename =
    d.getDate() +
    "-" +
    (d.getMonth() + 1) +
    "-" +
    d.getFullYear() +
    "-" +
    d.getHours() +
    "-" +
    d.getMinutes() +
    "-" +
    d.getSeconds();

  fs.writeFile(`./folder/${filename}.txt`, d.toString(), (err) => {
    res.send("File Created!!");
  });
});

export const files = router;
