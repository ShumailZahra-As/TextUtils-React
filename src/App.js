import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState} from 'react';
import Alert from './Components/Alert';

import {
 HashRouter  as Router,
  Routes, //instead of switch
  Route, //instead of link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
      const [alert, setAlert] = useState(null); //bydefault alert is null and null is an object
//setAlert is a function of setting the state
//showAlert is a function which will help us to show alert message
const showAlert =  (message, type)=>{
setAlert({
  msg: message,
type: type //type means alert is of which type primary, success, warning,danger
})
setTimeout(() => {
  setAlert(null);
}, 1500); //1500 means 1.5 second
}

  //define toggleMode function so that we can enable dark or light mode using switch
  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743'; // by this we can make whole page white
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode'; //the title show in browser tab 
    //   setInterval(() => { //people do this to catch your attention install this or there is virus in computer
    //      document.title = 'TextUtils is Amazing Mode';
    //   }, 2000);
    //    setInterval(() => {
    //      document.title = 'Install TextUtils Now';
    //   }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
    <Router>
    {/* <Navbar title="TextUtils" aboutText="About"/> */}
  {/* <Navbar/>  */}

    <Navbar title="TextUtils" mode={mode} aboutText="About" toggleMode={toggleMode}/> {/*pass the title prop here */}

    <Alert  alert={alert}/>

  <div className="container my-3">

{/* use exact path so that react matching otherwise react matching partially */}
    {/* /users --> Component 1
    /users/home -->--> Component 2 */}
       <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}/>
      
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below"  mode={mode}/>}/>

        </Routes>
          </div>
     </Router>

  
</>
  );
}

export default App;
