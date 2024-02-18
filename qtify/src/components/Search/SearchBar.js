import React from "react";
import styles from "./SearchBar.module.css"
import { IconButton } from '@mui/material';
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
// import SearchIcon from "../../assets/search-icon.svg"

export default function SearchBar(){
        return (
                <div className={styles.container}>
                        <input name = "search" className={styles.search} placeholder="search an album" />
                        <button className={styles.searchButton}>
                        <SearchIcon/>
                        </button>
                </div>
        )
}