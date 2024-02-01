import React from 'react'
import styles from "../styles/navbar.module.css"
import { useSelector } from 'react-redux'

const Navbar = () => {

  const {userName, role} = useSelector(store => store.authReducer)

  return (
    <div className={styles["main-container"]}>
        <span>Library</span>
        <span>Welcome, {userName}{role === "CREATOR" ? "(creator)" : "(viewer)"}</span>
    </div>
  )
}

export default Navbar