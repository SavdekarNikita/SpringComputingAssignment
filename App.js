import React,{useState,useEffect} from 'react';
import Axios from 'axios'
// import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Company from './Company';
import Employee from './Employee';
import Display from "./Display";
import Deleting from './Deleting';
import CDisplay from './CDisplay';

function App() {
 
 
//   const [DataList, setDatalist] = useState([])
//   console.log(DataList);
//   // Axios.defaults.withCredentials = true;
   


 
//   useEffect(() => {
//     Axios.get('http://localhost:3001/getCInputs').then((response) => {
//         // console.log(response.data);
//         setDatalist(response.data)
//     })
// }, [])

  return (
    <Router>
    {/* <ActionButton /> */}
    {/* <NavBar/> */}
    <Routes>
      {/* <Route path="/" element={<StoryView />} /> */}
      <Route path='/' element={<Employee/>} />
      <Route path="/Company" element={<Company/>}/>
      <Route path="/Deleting" element={<Deleting/>}/>
      <Route path="/Display" element={<Display/>}/>
      <Route path="/CDisplay" element={<CDisplay/>}/>
      
    </Routes>
  </Router>
  );
}


export default App;
