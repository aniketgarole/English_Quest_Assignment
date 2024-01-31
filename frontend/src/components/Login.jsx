import React from 'react'
import styles from "../styles/login.module.css"

const Login = () => {
  return (
    <div className={styles["main-container"]}>
        <span className={styles.title}>Login</span>
        <form >
            

            <label htmlFor="">Email</label>
            <input type="email" placeholder='Email' required/>
            <br />

            <label htmlFor="">Password</label>
            <input type="password" placeholder='Password' required/>
            <br />

            <button type="submit">Login</button>
            <span className={styles.footer}>Create a new account? <span>Register</span></span>

        </form>
    </div>
  )
}

export default Login