import React from 'react'
import styles from "../styles/table.module.css"
import { formatDate } from '../utilities/Dateformatter'
import axios from 'axios'
import { useSelector } from 'react-redux'

const Table = ({books, getBooks}) => {

    const token = useSelector(store => store.authReducer.token)

    const deleteBook = async (id) => {
        try {
            let res = await axios.delete(`${process.env.REACT_APP_BASE_URL}/books/delete/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                   
                  },
            })
            alert(res.data.msg)
            getBooks()
        } catch (error) {
            console.log(error)
        }
    }
   

  return (

   
    
    <div className={styles["main-container"]}>
        
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Added On</th>
                </tr>
            </thead>
            <tbody>
            {
        books?.map((item) => {
            const formatedDate = formatDate(item?.createdAt)
            return <tr key={item._id}>
            <td>{item?.title}</td>
            <td>{item?.author}</td>
            <td>{formatedDate}</td>
            <td><span onClick={() => deleteBook(item?._id)} style={{cursor:"pointer"}}>Delete</span></td>
        </tr>
        })
    }
                
                
            </tbody>
        </table>
    </div>
  )
}

export default Table