const express = require("express");
const app = express();
const port = 3002;
const path = require("path");

app.use("", express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/about.html"));
});
app.get("/vision", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/vision.html"));
});
app.get("/video", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/video.html"));
});
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "/public/404.html"));
});
app.listen(port, () => console.log(`listening on port ${port}`));
