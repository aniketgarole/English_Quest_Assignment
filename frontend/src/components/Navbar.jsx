import React from 'react'
import styles from "../styles/navbar.module.css"
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.setItem("EnglishQuestToken", "")
    navigate("/login")
  }

  const {userName, role} = useSelector(store => store.authReducer)

  return (
    <div className={styles["main-container"]}>
        <span>Library</span>
        <span>Welcome, {userName}{role === "CREATOR" ? "(creator)" : "(viewer)"}</span>
        <span style={{cursor:"pointer"}} onClick={handleLogout}>Logout</span>
    </div>
  )
}

export default Navbar