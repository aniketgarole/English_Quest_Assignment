import React, { useState } from 'react'
import styles from "../styles/register.module.css"
import { Link, useNavigate } from 'react-router-dom'

import axios from 'axios'


const Register = () => {

  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState()

  
  const navigate = useNavigate()

 

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const formData = {userName, email, password, role}
      const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/users/register`, formData)
      alert(res.data.msg)
      navigate("/login")
      

    } catch (error) {
      console.log(error)
    }
    
    


  }

  return (
    <div className={styles["main-container"]}>
        <span className={styles.title}>Register</span>
        <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input type="text" placeholder='Username' value={userName} required onChange={(e) => setUserName(e.target.value)}/>
            <br />

            <label htmlFor="">Email</label>
            <input type="email" placeholder='Email' value={email} required onChange={(e) => setEmail(e.target.value)}/>
            <br />

            <label htmlFor="">Password</label>
            <input type="password" placeholder='Password' value={password} required onChange={(e) => setPassword(e.target.value)}/>
            <br />

            <label htmlFor="">Role</label>
            <select name="role" id="role" placeholder="select a role" value={role} required onChange={(e) => setRole(e.target.value)}>
            <option value="" disabled selected>Select a role</option>
                <option value="CREATOR">CREATOR</option>
                <option value="VIEWER">VIEWER</option>
            </select>
            <br />

            <button type="submit">Register</button>
            <span className={styles.footer}>Already have an account? <span><Link to="/login">Login</Link></span></span>
        </form>
    </div>
  )
}

export default Register