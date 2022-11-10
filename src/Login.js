import React, {useState} from 'react'
import  './App.css'
const Login = () => {

    const [data, setData] = useState({
        username:"",
        password: ""
      })
    const {username,password} = data
       const changehandler = (e) => {
         setData({...data, [e.target.name]:[e.target.value]})
      }
      const submithandler = (e) => {
        e.preventDefault()
        console.log(data)
      }

  return (
    <div className='log'>
         
    <center>
      <form onSubmit = {submithandler} className= "logform">
      <h1>Login</h1>
        <label>username</label>
        <input type = 'text' name= "username" placeholder='username'  onChange = {changehandler} /><br/><br/>
        <label>password</label>
        <input type= 'password' name = "password" placeholder = 'password' onChange = {changehandler} />
        <br/><br/>
        <input type = 'submit' name = 'submit'  /> <br/><br/>
       </form>
    </center>
</div>
  )
}

export default Login