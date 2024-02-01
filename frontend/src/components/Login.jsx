import React, { useState } from 'react'
import styles from "../styles/login.module.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { getAuth } from '../redux/AuthReducer/action'


const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit =  async (e) => {
    e.preventDefault()

  
      let formData = {email, password}
      let res =  await dispatch(getAuth(formData))
      console.log(res)
      if (res.type === "LOGIN_SUCCESS") {
        alert("Login Successful")
        navigate("/")
      } else {
        alert("Login Failed")
      }
      
    
  }

  return (
    <div className={styles["main-container"]}>
        <span className={styles.title}>Login</span>
        <form onSubmit={handleSubmit}>
            

            <label htmlFor="">Email</label>
            <input type="email" placeholder='Email' required onChange={(e) => setEmail(e.target.value)}/>
            <br />

            <label htmlFor="">Password</label>
            <input type="password" placeholder='Password' required onChange={(e) => setPassword(e.target.value)}/>
            <br />

            <button type="submit">Login</button>
            <span className={styles.footer}>Create a new account? <span><Link to="/register">Register</Link></span></span>

        </form>
    </div>
  )
}

export default Login