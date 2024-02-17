import React from "react";
import styles from "./Navbar.module.css"
import Logo from "../Logo/Logo";
import Feedback from "../FeedBackButton/Feedback";
import SearchBar from "../Search/SearchBar";

function Navbar(){
        return (
                <nav className={styles.Navbar}>
                <Logo />
                <SearchBar />
                <Feedback />
                </nav>
        )
}


export default Navbar;