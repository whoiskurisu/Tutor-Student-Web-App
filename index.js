const express = require("express");
const app = express();
const path = require("path")
const PORT = 5000;

app.use(express.json()); // To parse the data in req.body so that we can access it in json
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "./public"))); // So that we dont need to readFile for every respective css, js and images

// Home Page
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./public/html/index.html"));
  });

app.listen(PORT, () => {
    console.log(`Website is live at http://localhost:${PORT}`);
  });