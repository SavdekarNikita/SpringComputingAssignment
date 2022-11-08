const express = require('express')
const app = express();
const port = 3001;
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const session = require('express-session');

const conn = mysql.createConnection({
   host :'localhost',
   port :'3306',
   user:'root',
   password :'Nikita140296',
   database:'employee', 
})
conn.connect(function (err) {
    if (err)
    throw err;
    console.log('connection successful');
    
})
app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(session({key: "userId",
         secret: "subscribe",
         resave:false,
         saveUninitialized:false,
         cookei:{
            expires:60 * 60 * 24,
         }
}));

// ADD EMPLOYEE DEATAILS
app.post("/employee",(req, res)=>{
    const ename = req.body.EmployeeName;
    const eemail = req.body.EmployeeEmail;
    const ephone = req.body.EmployeePhone;
    const sqlInput ="INSERT INTO employee_table (ename, eemail, ephone) values(?,?,?)"
    conn.query(sqlInput, [ename, eemail, ephone],
        (err, result)=>{
            console.log(err);
            res.send(result);
        })  
})

// ADD COMPANY DETAILS
app.post("/company",(req, res)=>{
    const fk_id = req.body.id
    const Company_name = req.body.CompanyName;
    const Company_city = req.body.CompanyCity;
    const sqlReqister ="INSERT INTO company_table (company_name, company_city, e_id) values (?,?,?)"
    conn.query(sqlReqister, [Company_name, Company_city, fk_id],
        (err, result)=>{
            console.log(err);
            res.send(result);
        })  
})



 app.get("/getEInputs", (req, res) => {
    const sqlEmployee = "SELECT * FROM employee_table";
    conn.query(sqlEmployee, (err, result) => {
       console.log(err);
       res.send(result);
    })
 })

 app.post("/getCInputs", (req, res) => {
    const fk_Eid = req.body.id
    const sqlcompany = "SELECT * FROM company_table WHERE e_id = ?";
    conn.query(sqlcompany, fk_Eid, (err, result) => {
       console.log(err);
       res.send(result);
    })
 })

 app.delete('/Edelete/:id', (req, res) => {
    const id = req.params.id
    console.log(id);
    const sqlEChecks = "SET FOREIGN_KEY_CHECKS = 0";
    conn.query(sqlEChecks, (err, result) => {
       const sqlEDelete = "DELETE FROM employee_table WHERE id = ?";
       conn.query(sqlEDelete, id, (err, result) => {
          console.log(err)
          const sqlDelete = "DELETE FROM company_table WHERE e_id = ?";
          conn.query(sqlDelete, id, (err, result) => {
             console.log(err)
          })
          const sqlreSet = "SET FOREIGN_KEY_CHECKS = 1";
          conn.query(sqlreSet, (err, result) => {
             console.log(err);
          })
       })
       console.log(err)
    })
 })

app.get('/', (req, res)=>{
    res.send('hello')
})

app.listen(port, ()=>{
    console.log(`example app listening at http:${port}`);
})
