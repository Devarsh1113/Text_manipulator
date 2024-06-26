import "./App.css";
import Alert from "./components/Alert";

import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React,{useState} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {

  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message,type)=>
  {
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() =>{
        setAlert(null);
      }
      ,1500
      )
  }
  const toggleMode =()=>{
    if (mode ==='light') {
      setMode('dark')
      showAlert("  Dark Mode has been Enabled", 'success');
      document.body.style.backgroundColor = 'grey';
    }
    else{
      setMode('light')
      showAlert("  Light Mode has been Enabled", 'success');
      document.body.style.backgroundColor = 'white';
    }
    
  }
  return (
    <>
    <Router>
    <Navbar title ="TextUtils" about ="ABOUT" mode={mode} toggleMode={toggleMode}/>  
   <Alert alert={alert} />
   <div className="container" >

 
 
    <Routes>
      <Route exact path="/about" element={<About/>}></Route>
      <Route exact path="/"element={<TextForm  showAlert ={showAlert}heading ="Enter the Text to Analyse!!" mode={mode}/>}></Route>
    </Routes>
    
   </div>
   </Router>
    
    </>
  );
}
export default App;
