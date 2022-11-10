import React, {useState} from 'react'
import Register from './Register'
import Login from './Login'
import  './App.css'
 const App = () => {
const [form,setForm] = useState('Register')
function reg()
{
  setForm('Register')
  }
function log (){
  setForm('Login')
}
return (
<div className= "app">
    {
      form === 'Login'? <center><div> <Login/> <button  onClick = {reg}>Register</button></div>Don't have an account Register Here</center> 
      : <center> <div><Register/><button  onClick = {log}>Login</button></div> Have an account Login Here</center>}
      <center>
     
      </center>
</div>
  )
 }
export default App;