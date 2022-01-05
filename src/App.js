import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = '#212529';
      document.body.style.color = 'white';
      showAlert("Dark mode enabled","success");
      document.title = 'TextUtils - Dark';
      // setInterval(()=>{
      //   document.title = 'TextUtils is amazing';
      // },2000)
      // setInterval(()=>{
      //   document.title = 'Install TextUtils Now';
      // },1500)
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = '#212529';
      showAlert("Light mode enabled","success");
      document.title = 'TextUtils - Light';
    }
  }
  return (
    <>
      <Router>
        <Navbar title = "Alpana" mode={mode} toggleMode={toggleMode}></Navbar>
          <Alert alert={alert}></Alert>
          <div className="container my-5">
            <Routes>
              <Route exact path="/about" element={<About />}>
              </Route>
              <Route exact path="/" element={<TextForm heading="Enter text to analyze" showAlert={showAlert} />}>
              </Route>
            </Routes>
          </div>
          {/* <div className="container my-5">
            <About></About>
          </div> */}
      </Router>
    </>
  );
}

export default App;
