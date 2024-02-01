import React, { useState } from 'react'
import styles from "../styles/modal.module.css"
import axios from 'axios'
import { useSelector } from 'react-redux'

const Modal = ({getBooks, setIsOpen}) => {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    

    // const token = useSelector(store => store.authReducer.token)
    const token = localStorage.getItem("EnglishQuestToken")


    const addBook = async(e) => {
        e.preventDefault()
        try {
            const formData = {title, author}
            let res = await axios.post(`${process.env.REACT_APP_BASE_URL}/books/create`, formData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                   
                  },
            })

            setIsOpen(false)
            alert(res.data.msg)
            getBooks()
            
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className={styles["main-container"]}>
        <form onSubmit={addBook}>
            <label>Title</label>
            <input type="text" placeholder='Enter title' onChange={(e) => setTitle(e.target.value)} value = {title} required/>
            <br />

            <label>Author</label>
            <input type="text" placeholder='Enter author' onChange={(e) => setAuthor(e.target.value)} value = {author} required/>
            <br />

            <button type='submit'>Add</button>
        </form>
    </div>
  )
}

export default Modal