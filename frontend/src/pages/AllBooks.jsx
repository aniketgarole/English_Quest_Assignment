import React, { useEffect, useState } from "react";
import Table from "../components/Table";
import styles from "../styles/allbooks.module.css";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useSelector } from "react-redux";
import Modal from "../components/Modal";
import { useSearchParams } from "react-router-dom";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [filterby, setFilterBy] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [sortBy, setSortBy] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();

  const role = useSelector((store) => store.authReducer.role);

  let background;
  isOpen
    ? (background = {
        backgroundColor: "black",
        opacity: "0.8",
        height: "100vh",
        width: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: "1",
      })
    : (background = {});

  const token = useSelector((store) => store.authReducer.token);

  const handleFilter = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/books?filterBy=${filterby}&filterValue=${filterValue}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setBooks(res.data.books);
      setSortBy("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSort = async () => {
    try {
      let res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/books?sortBy=${sortBy}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setBooks(res.data.books);
      setFilterBy("");
      setFilterValue("");
    } catch (error) {
      console.log(error);
    }
  };

  const getBooks = async () => {
    try {
      let res = await axios.get(`${process.env.REACT_APP_BASE_URL}/books`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setBooks(res.data.books);
    } catch (error) {
      console.log(error);
    }
  };

  const getBooksAddedInLastTenMin = async () => {
    try {
      let res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/books?new=1`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setBooks(res.data.books);
    } catch (error) {
      console.log(error);
    }
  };

  const getBooksAddedBeforeLastTenMin = async () => {
    try {
      let res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/books?old=1`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setBooks(res.data.books);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllBooks = async () => {
    try {
      let res = await axios.get(`${process.env.REACT_APP_BASE_URL}/books`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setBooks(res.data.books);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  useEffect(() => {
    if (filterby && filterValue) {
      setSearchParams({
        filterValue: filterValue,
        filterBy: filterby,
      });
    }

    if (sortBy) {
      setSearchParams({
        sortBy: sortBy,
      });
    }
  }, [filterValue, filterby, sortBy]);

  return (
    <div>
      <Navbar />
      <div>
        <div className={styles["functionality-div"]}>
          <div className={styles["filter-div"]}>
            <form onSubmit={handleFilter}>
              <div>
                <span>Filter by</span>
                <select
                  name="filterBy"
                  id="filterBy"
                  value={filterby}
                  onChange={(e) => setFilterBy(e.target.value)}
                >
                  <option value="" disabled selected>
                    Select an option
                  </option>
                  <option value="title">Title</option>
                  <option value="author">Author</option>
                </select>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Enter author name"
                  value={filterValue}
                  onChange={(e) => setFilterValue(e.target.value)}
                />
                <button>Filter</button>
              </div>
            </form>
          </div>
          <div className={styles["sort-div"]}>
            <form>
              <span>Sort by</span>
              <select
                name="sortBy"
                id="sortBy"
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value);
                  handleSort();
                }}
              >
                <option value="" disabled selected>
                  Select an option
                </option>
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
              </select>
            </form>
          </div>
          <div className={styles["show-book-button"]}>
            <button onClick={getAllBooks}>Show All Books</button>
            <button onClick={getBooksAddedInLastTenMin}>
              Show books added in last 10 mins
            </button>
            <button onClick={getBooksAddedBeforeLastTenMin}>
              Show books added before last 10 minutes
            </button>
          </div>
          {role === "CREATOR" ? (
            <div>
              <button onClick={() => setIsOpen(true)}>
                Add a book to library
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
        <Table books={books} getBooks={getBooks} />
      </div>
      {isOpen ? (
        <div className={styles["modal-div"]}>
          <Modal getBooks={getBooks} setIsOpen={setIsOpen} />
        </div>
      ) : (
        ""
      )}

      {isOpen ? <div style={background}></div> : ""}
    </div>
  );
};

export default AllBooks;
