import React from 'react'
import "./App.css"
import Axios from 'axios'
import { Link } from 'react-router-dom';
import './App.css';

function Deleting() {
    const id = (localStorage.getItem('id'))
    // console.log(Rule_Id);
  
    const Delete = () => {
      Axios.delete(`http://localhost:3001/Edelete/${id}`)
    }
  return (
    <>
    {/* <div className="box">
      <a className="button" href="/StoryView" style={{border:"1px solid  rgb(0, 208, 255)", color:" rgb(0, 208, 255)"}}>Add</a>
  </div>  */}
    <div id="popup1" className="overlay">
      <div className="popup" >
        <h1>Are you sure?</h1>
        <p style={{ marginLeft: '2rem' }}>Do you really want to delete this record</p>
        <Link to="/StoryView">
          <span className="close">×</span>
        </Link>
        <div  style={{ marginLeft: '4rem' }}>
          <Link to="/Display">
            <button style={{ border: "1px solid  rgb(0, 208, 255)", color: " rgb(0, 208, 255), marginLeft:'2rem'" }}>Cancel</button>
          </Link>
          <Link to="/Display">
            <button style={{ border: "1px solid  rgb(255 95 95)", color: " rgb(255 95 95)" }} onClick={Delete}>Delete</button>
          </Link>
        </div>
      </div>
    </div>
  </>
  )
}

export default Deleting
