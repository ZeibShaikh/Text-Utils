import { useState } from 'react'
import Navbar from './components/Navbar'
import TextArea from './components/TextArea'
import Alert from './components/Alert'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import About from './components/About';

function App() {
  const [mode, setmode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert=(msg,type)=>{
    setAlert({
      msg:msg,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const controlMode=()=>{
    if(mode=='light'){
      setmode('dark')
      document.body.style.backgroundColor='#042743'
      document.body.style.color='white'
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white'
      document.body.style.color='black'
      showAlert("Light mode has been enabled","success")
    }
  }
  return (
    <>
    
    <BrowserRouter>
    <Navbar title="TextUtils" controlMode={controlMode} mode={mode}/>
    <Alert alert={alert}/>
    <div className="container">
    <Routes>
    <Route path="/" element={<TextArea showAlert={showAlert}/>}/>
    
    <Route path="/about" element={<About/>}/>
    </Routes>
    </div>
    </BrowserRouter>
    </>
  )
}

export default App
