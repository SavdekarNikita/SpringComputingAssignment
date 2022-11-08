import React, { useState, useEffect } from 'react'
import { AiFillPlusSquare } from "react-icons/ai";
import {AiFillDelete } from "react-icons/ai";
import {AiFillPlusCircle } from "react-icons/ai";
import Button from 'react-bootstrap/Button';

import BootstrapTable from 'react-bootstrap-table-next';
// import filterFactory, { textFilter, selectFilter, Comparator } from 'react-bootstrap-table2-filter';
// import JsonData from './Data.json';
import { Link } from 'react-router-dom';
import Axios from 'axios'
import ReactTooltip from "react-tooltip";
import './App.css';

function CDisplay() {
    const id = (localStorage.getItem('id'))
    const Ename = (localStorage.getItem('ename'))
    const [CInput, setCInput]= useState("") 
    
    useEffect(() => {
        Axios.post('http://localhost:3001/getCInputs', {
            id: id,
        }).then((response) => {
            // console.log(response.data);
            setCInput(response.data);
        })
    }, [id])
    const columns = [
        // {
        //     dataField: "id",
        //     text: "Employee no",
        //     formatter: (cell, row) => <button className='LinkButton' onClick={() => { handleLink(row.id) }}> {cell} </button>
        // },
        {
            dataField: "company_name",
            text: "Company Name",
            // formatter: (cell, row) => <Link className='LinkButton' onClick={() => { handleLink(row.id) }}> {cell} </Link>
        },
        {
            dataField: "company_city",
            text: "Company email",
            // formatter: (cell, row) => <button className='LinkButton' onClick={() => { handleLink(row.id) }}> {cell} </button>
        },
    ]
  return (
    <>
    <div style={{ marginTop: "10rem", marginLeft: "auto", marginRight: "auto",   width: "20em"}} >
        <h3>Companies For the user {Ename}</h3>
    <BootstrapTable keyField='company_name' data={CInput} columns={columns} />
    <Link to="/Display">
       <Button style={{marginLeft: "2rem"}} variant="primary" type="button">
         Back
       </Button >
       </Link>
    </div>
    </>
  )
}

export default CDisplay