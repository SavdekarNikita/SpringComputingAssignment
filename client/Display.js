import React, { useState, useEffect } from 'react'
import { AiFillPlusSquare } from "react-icons/ai";
import {AiFillDelete } from "react-icons/ai";
import {AiFillPlusCircle } from "react-icons/ai";

import BootstrapTable from 'react-bootstrap-table-next';
// import filterFactory, { textFilter, selectFilter, Comparator } from 'react-bootstrap-table2-filter';
// import JsonData from './Data.json';
import { Link } from 'react-router-dom';
import Axios from 'axios'
import ReactTooltip from "react-tooltip";
import './App.css';

function Display() {
    const [DataList, setDatalist] = useState([])

    const handleLink = (id, ename) => {
        localStorage.setItem('id', `${id}`);
        localStorage.setItem('ename', `${ename}`);
        Axios.post('http://localhost:3001/getCInputs',{
           id: id
          }).then((response)=>{
           console.log(response.data);
        //    alert("data is added successfully")
              window.location.href = "./CDisplay"
          })
    }
    const handleUpdate = (id,ename) => {
        localStorage.setItem('id', `${id}`);
        localStorage.setItem('ename', `${ename}`);
    }
    useEffect(() => {
        Axios.get('http://localhost:3001/getEInputs').then((response) => {
            console.log(response.data);
            setDatalist(response.data)
        })
    }, [])
    const columns = [
        // {
        //     dataField: "id",
        //     text: "Employee no",
        //     formatter: (cell, row) => <button className='LinkButton' onClick={() => { handleLink(row.id) }}> {cell} </button>
        // },
        {
            dataField: "ename",
            text: "Employee Name",
            formatter: (cell, row) => <Link className='LinkButton' onClick={() => { handleLink(row.id, row.ename) }}> {cell} </Link>
        },
        {
            dataField: "eemail",
            text: "Employee email",
            formatter: (cell, row) => <Link className='LinkButton' onClick={() => { handleLink(row.id, row.ename) }}> {cell} </Link>
        },
        {
            dataField: "ephone",
            text: "Employee phone",
            formatter: (cell, row) => <Link className='LinkButton' onClick={() => { handleLink(row.id, row.ename) }}> {cell} </Link>
        },
        {

            dataField: "Delete",
            text: "Delete",
            formatter: (cell, row) => (
            <div style={{display:'flex'}}>
                <div>
                <Link to="/Deleting">
                    <button data-tip data-for="DeleteTip" className='Btn' onClick={() => {handleUpdate(row.id) }}><AiFillDelete/></button>
                    <ReactTooltip id="DeleteTip" place="left" effect="solid">
                        Delete the User permanently   
                    </ReactTooltip>
                </Link>
                </div>
            </div>
            )
        },
        {
            dataField: "Add",
            text: "Add New Employee",
            formatter: (cell, row) => (
            <div style={{display:'flex'}}>
                <div style={{marginLeft: '1em'}}>
                <Link to="/">
                    <button data-tip data-for="AddTip" className='Btn'><AiFillPlusCircle/></button>
                    <ReactTooltip id="AddTip" place="right" effect="solid">
                       Add New User  
                    </ReactTooltip>
                </Link>
                </div>
            </div>
            )
        },
        {

            dataField: "Add",
            text: "Add Company",
            formatter: (cell, row) => (
            <div style={{display:'flex'}}>
                <div style={{marginLeft: '1em'}}>
                <Link to="/Company">
                    <button data-tip data-for="AddCTip" className='Btn' onClick={() => {handleUpdate(row.id, row.ename)}}><AiFillPlusSquare/></button>
                    <ReactTooltip id="AddCTip" place="right" effect="solid">
                       Add Companies for the User  
                    </ReactTooltip>
                </Link>
                </div>
            </div>
            )
        },
    ]
  return (
    <div style={{padding: "12rem", paddingTop: "5rem", marginTop: "0rem", marginLeft: "auto", marginRight: "auto"}} >
          <h3>Details Of The User</h3>
    <BootstrapTable keyField='eemail' data={DataList} columns={columns} />
    </div>
  )
}

export default Display