const express = require("express");
const app = express();
var bodyParser = require("body-parser"); //import library use this post method//

// const { error, Console } = require("console");
// const { CLIENT_RENEG_LIMIT } = require("tls");

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

var cors = require('cors');
app.use(cors()) //Use this after the variable declaration

app.get("/", (req, res) => {
  res.send("Hello!Welcome to Express Server!");
});

app.post("/post-job",(req,res)=>{
  console.log(req.body);
  let data = req.body;
  let sql = `INSERT INTO surendra_postjob (id,job_title,company_name,qualification,experience,location,vacancy,job_description,skills)
    VALUES ('${data.id}','${data.job_title}','${data.company_name}','${data.qualification}','${data.experience}','${data.location}','${data.vacancy}','${data.job_description}','${data.skills}')`; 
    connection.query(sql, (err, result) => {
      // console.log(err);
      if (err) throw err;
      if (result.length)
        res.send(result[0])
      else
        // res.send({ message: "Email/Password does not match" })
      // console.log(result);
      res.send(result);
})

})

app.post("/logins", (req, res) => {
  console.log(req.body);
  let data = req.body;
  let sql = `SELECT * FROM surendra_registration WHERE email LIKE '${data.email}' AND password LIKE '${data.password}'`;      //For Database connection through ExpressJS (From line 36 to 40)

  connection.query(sql, (err, result) => {
    // console.log(err);
    if (err) throw err;
    if (result.length)
      res.send(result[0])
    else
      res.send({ message: "Email/Password does not match" })
    // console.log(result);
    // res.send(result);
  })
})

app.post("/login", (req, res) => {
  let data = req.body;
  if (data.email === "surendra@gmail.com" && data.password === "Surendra12345")
    res.send({ message: "Login Successfull" });
  else res.send({ message: "Login Failed Email/Password Invalid" });
});


app.post("/registration", (req, res) => {

  console.log(req.body);
  let data = req.body;
  let sql = `INSERT INTO surendra_registration (id,name,email,password,repeat_password) 
   VALUES ('${data.id}','${data.name}','${data.email}','${data.password}','${data.repeatpassword}')`;

  connection.query(sql, (err, result) => {
    console.log(err);
    if (err) throw err;
    console.log(result);
    res.send({ result, data: req.body });
  })

})














// res.send([
//   { id: 1, name: "Surendra", qualification: "B.Tech" },
//   { id: 2, name: "Gopal", qualification: "M.Tech" },
//   { id: 3, name: "Balu", qualification: "MCA" },
// ])
// })


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

//Statically given this for database for getting this data email and password by giving email and password details in 


// app.post("/registration", (req, res) => {
//   let data = req.body;
//   if (data.name === "surendra" && data.email === "surendra@gmail.com" && data.password === "Surendra12345" && data.repeatpassword === "Surendra12345")
//     res.send({ message: "Registration Successfull" });
//   else res.send({ message: "Registraion Failed " });
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
  console.log(`Server is running in port 3300`);
});
