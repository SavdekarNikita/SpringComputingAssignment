import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React,{useState,useEffect} from 'react';
import Axios from 'axios'
import './App.css';
import { Link } from 'react-router-dom';

function Company() {

    const id = (localStorage.getItem('id'))
    const ename = (localStorage.getItem('ename'))

    const [CompanyName, setCompanyName]= useState("")
    const [CompanyCity, setCompanyCity]= useState("")

    const companyinput = (e) =>{
        e.preventDefault();
        Axios.post('http://localhost:3001/company',{
            id:id,
          CompanyName:CompanyName,
          CompanyCity:CompanyCity
        }).then((response)=>{
         console.log(response.data);
         alert("Company is added successfully")
         window.location.href = "./Company"
        })
      }
  return (
    <>
   
<Form>
<Form.Group className="mb-3" controlId="formBasicEmail">

        <Form.Label>Add Company For the User '{ename}'</Form.Label><br/>
        <Form.Control type="text" placeholder="Enter company name" onChange={(e)=>{setCompanyName(e.target.value)}} require/><br/>
        <Form.Control type="text" placeholder="Enter City of company" onChange={(e)=>{setCompanyCity(e.target.value)}} require/><br/>
      </Form.Group>
      <Link to="/Display">
       <Button style={{marginLeft: "2rem"}} variant="primary" type="button">
         Back
       </Button >
       </Link>
      <Button variant="primary" type="submit" onClick={companyinput}>
        Submit
      </Button >
      </Form>
      
       </>
  )
}

export default Company
