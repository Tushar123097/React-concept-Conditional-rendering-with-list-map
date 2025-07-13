import { useState } from 'react'
import UseStatee from './components/Usestatee'
import Useeffectt from './components/Useeffectt'
import Login from './components/Login'
import Logout from './components/Logout'
import Studentlist from './components/Studentlist'
import './App.css'

function App() {

  //Conditional rendering using hooks usestate

  const [istrue, setCondtn] = useState(false)
  return (
  <div>
   <UseStatee/>
   <Useeffectt/>
   {/* This is the conditional rendering */}
   {istrue? <Login/> : <Logout/>}
   {/* <Login/>
   <Logout/> */}
   <Studentlist/>
  </div>
  )
}

export default App
