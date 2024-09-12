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


// Tutor Login Page
app.get("/tutor-login", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public/html/tutorLogin.html"));
});

// Student Login Page
app.get("/student-login", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public/html/studentLogin.html"));
});

// LogIn functionality
// app.post("/login", async (req, res) => {
//   try {
//     const check = await collection.findOne({ Email: req.body.email });
//     if (check.Password === req.body.password) {
//       res.sendFile(path.resolve(__dirname, "./public/html/index.html"));
//     } else {
//       res.send("Wrong Password");
//     }
//   } catch {
//     res.send("Wrong Credentials");
//   }
// });


// Signup Page
app.get("/signup", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public/html/sign-up.html"));
});

// SignUp functionality
// const { authCollection } = require("./mongodb");

// app.post("/signup", async (req, res) => {
//   const data = {
//     FirstName: req.body.fname,
//     LastName: req.body.lname,
//     Email: req.body.email,
//     Password: req.body.password,
//   };
//   await authCollection.insertMany([data]);

//   res.sendFile(path.resolve(__dirname, "./public/html/index.html"));
// });

app.listen(PORT, () => {
    console.log(`Website is live at http://localhost:${PORT}`);
  });