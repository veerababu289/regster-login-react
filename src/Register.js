import React, {useEffect, useState} from 'react'
import './App.css'
const Register = () => {
  const [dataarr,setDataarr] = useState([])
    const [data, setData] = useState({
        username: "",
        password : "",
        confirmpassword: "",
        mobile : "",
        email : ""
    })
    const {username, password, confirmpassword, mobile, email} = data

  const changehandler = (e) => {
        setData ({...data, [e.target.name]: [e.target.value]})
    }


  const  submithandler = (e) => {
        e.preventDefault()
        console.log(password)
        if (username[0].length<5){
          alert('username should be more than 5 letters')
        }
         else if(password [0]!== confirmpassword[0] ){
           alert ("passwords not matched")
         }
        else if(mobile[0] <10 ){
          alert ("Incorrect mobile number")
        }
        else if(email[0]<5){
          alert ("Incorrect Email")
        }
        else{
          console.log(data)
        }
      }

  return (
     <div className='reg'> 
         <center></center>
     <center>
   <form onSubmit = {submithandler} className= 'regform'>
          <h1>Register</h1>
          <label>Username</label>
         <input type = "text" name = 'username' placeholder = "username" onChange = {changehandler} /> <br/> <br/>
         <label>Password</label>
         <input type = 'password' name = 'password'  placeholder = 'password' onChange = {changehandler} /><br/><br/>
         <label> Confirm password</label>
         <input type = 'password' name = 'confirmpassword'  placeholder = 'confirm password' onChange = {changehandler} /><br/><br/>
         <label>Mobile</label>
         <input type = 'text' name = 'mobile' placeholder= 'mobile' onChange = {changehandler} /><br/><br/>
         <label>Email</label> 
         <input type = 'text' name = 'email' placeholder = "email" onChange = {changehandler} /> <br/><br/>
         <input type = 'submit'  name = 'submit' /> 
         
      </form>
     </center>
    </div>
  )
}
export default Register;