const express = require("express");
const app = express();
var bodyParser = require("body-parser"); //import library use this post method//

const { error, Console } = require("console");
const { CLIENT_RENEG_LIMIT } = require("tls");

//For Database connection through ExpressJS (From line 9 to 21)
const mysql = require("mysql");

let connection = mysql.createConnection({
  host: "mysql.razs.me",
  user: "flh_user2",
  password: "z3M5-gQDX_Ba!8[23",
  //   port: "3306",
  database: "flh_student",
});

connection.connect((err) => {
  if (err) /*console.log(err)*/throw err;
  console.log("DB is Connected");
});

const port = 3300;
app.use(bodyParser.json()); //import chesina library ni use chesukovadaniki sequence of two lines//
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello!Welcome to Express Server!");
});

app.get("/users", (req, res) => {
  console.log(req.query);

  let sql = `SELECT * FROM Users WHERE 1`      //For Database connection through ExpressJS (From line 36 to 40)

  connection.query(sql, (err, result) => {
    console.log(err);
    if (err) throw err;

    console.log(result);
    res.send(result);
  })

  // res.send([
  //   { id: 1, name: "Surendra", qualification: "B.Tech" },
  //   { id: 2, name: "Gopal", qualification: "M.Tech" },
  //   { id: 3, name: "Balu", qualification: "MCA" },
  // ])
})





// app.get("/users", (req, res) => {
//   res.send("Welcome to Hello World");
// });

// app.get("/userg", (req, res) => {
//   res.send("I will go to Tirumala");
// });

// app.get("/detailes", (req, res) => {
//   //console.log(req.query);  //this is one method (url dvara parameters ni tesukovadam)
//   res.send([
//     { id: 1, name: "gopi", qualification: "B.Tech" },
//     { id: 2, name: "hari", qualification: "dsc" },
//     { id: 3, name: "mahi", qualification: "CIVIL" },
//   ]);
// });

// app.get("/detailes/:id", (req, res) => {
//   // console.log(req.params.id);  //this is one method(url dvara parameters ni tesukovadam)
//   let users = [
//     { id: 1, name: "gopi", qualification: "B.Tech" },
//     { id: 2, name: "hari", qualification: "dsc" },
//     { id: 3, name: "mahi", qualification: "CIVIL" },
//   ];
//   //let selecteduser = users.filter(user => user.id == req.params.id)
//   let selecteduser = users.find((user) => user.id == req.params.id);
//   // console.log(selecteduser);
//   res.send(selecteduser);
// });

// app.get("/bln", function (req, res) {
//   res.send([{ name: "Gopi" }, { mobile: "9908959534" }]);
// });

// app.post("/users", (req, res) => {
//   console.log(req.body);
//   res.send({ id: 9595, message: "Hello everyone", data: req.body });
// });

// app.post("/about", (req, res) => {
//   console.log(req.body);
//   res.send({ name: "gopi", message: "my location is gudur", data: req.body });
// });

// app.post("/gopi/login", (req, res) => {
//   let data = req.body;
//   if (data.username === "gopi" && data.password === "gudur")
//     res.send({ message: "your successful login" });
//   else res.send({ message: "login failed username / password invalid" });
// });

// app.patch("/detailes/:id", (req, res) => {
//   console.log(req.params.id);
//   res.send({ message: "user has been updated", id: req.params.id });
// });

// app.delete("/detailes/:id", (req, res) => {
//   console.log(req.params.id);
//   res.send({ message: "user has been deleted", id: req.params.id });
// });

app.listen(port, () => {
  console.log(`Servre is running in port 3300`);
});
