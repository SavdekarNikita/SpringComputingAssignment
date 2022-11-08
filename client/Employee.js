import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React,{useState,useEffect} from 'react';
import Axios from 'axios'
import './App.css';

function Employee() {
    const [EmployeeName, setEmployeeName]= useState("")
    const [EmployeeEmail, setEmployeeEmail]= useState("")
    const [EmployeePhone, setEmployeePhone]= useState("")

    const employee = (e) =>{
        e.preventDefault();
        Axios.post('http://localhost:3001/employee',{
          EmployeeName: EmployeeName,
    EmployeeEmail:EmployeeEmail,
    EmployeePhone:EmployeePhone
        }).then((response)=>{
         console.log(response.data);
         alert("data is added successfully")
            window.location.href = "./Display"
        })
      }

  return (
    <Form onSubmit={employee}>
     
      <Form.Group className="mb-3" >
        <Form.Label>Add employee deatils</Form.Label><br/>
        <Form.Control type="text" placeholder="Enter employee name" onChange={(e)=>{setEmployeeName(e.target.value)}} required/><br/>
        <Form.Control type="email" placeholder="Enter employee email"onChange={(e)=>{setEmployeeEmail(e.target.value)}} required/><br/>
        <Form.Control type="text" placeholder="Enter employee phone" onChange={(e)=>{setEmployeePhone(e.target.value)}} required/><br/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button >
      
    </Form>
  )
}

export default Employee