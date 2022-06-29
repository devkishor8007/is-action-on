const express = require("express");
const app = express();

app.get("/test", (_req, res) => {
  res.status(200).send("Hello world");
});

app.post("/test", (_req, res) => {
  const data = [];
  data.push("nodejs", "expressjs");
  res.status(200).json({ success: true, data });
});

module.exports = app;
