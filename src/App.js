import { useState } from 'react';
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import Alert from './Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const sAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black';
      sAlert("darkmode has been enabled", "Success");
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      sAlert("lightmode has been enabled", "Success");
    }
  }
  return (
    <>
    {/* <Router> */}
        <Navbar title="projectfile" mode={mode} toggleMode={toggleMode} aboutText="About" />
        <Alert Alert={alert}>
        </Alert>
        <div className="container ">
        {/* <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={} /> */}
          <Textform sAlert={sAlert} heading="convert your text" mode={mode} />
        {/* </Routes> */}
        </div>
        {/* </Router> */}
<About mode={mode} ></About>
    </>
  );
}

export default App;
