import React from 'react'
import styles from "../styles/register.module.css"

const Register = () => {
  return (
    <div className={styles["main-container"]}>
        <span className={styles.title}>Register</span>
        <form >
            <label>Username</label>
            <input type="text" placeholder='Username' required/>
            <br />

            <label htmlFor="">Email</label>
            <input type="email" placeholder='Email' required/>
            <br />

            <label htmlFor="">Password</label>
            <input type="password" placeholder='Password' required/>
            <br />

            <label htmlFor="">Role</label>
            <select name="role" id="role" placeholder="select a role" required>
            <option value="" disabled selected>Select a role</option>
                <option value="creator">CREATOR</option>
                <option value="viewer">VIEWER</option>
            </select>
            <br />

            <button type="submit">Register</button>
            <span className={styles.footer}>Already have an account? <span>Login</span></span>
        </form>
    </div>
  )
}

export default Register