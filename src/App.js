// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';                                                                                                                                                                                                                                                                                                                                                                                               
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const[mode,setMode]= useState("light") // Set the Mode 
  const[alert, setAlert]= useState(null)

  const showAlert=(message,type)=>{
        setAlert({
          msg:message,
          type: type

        })
        setTimeout(()=>{
          setAlert(null)
        },1300)
        
        
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743'
      showAlert("Dark Mode has been enabled","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white' 
      showAlert("Light Mode has been enabled","success")
    }
  }
  return (
    <>
    {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />} /> */}
           < TextForm showAlert={showAlert} heading="Enter text to analyze below" mode={mode}  />
             
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </> 
  );
  
}

export default App;
