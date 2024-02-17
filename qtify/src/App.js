import logo from './logo.svg';
import './App.css';

import React from "react";
import StyledEngineProvider from "@mui/material/StyledEngineProvider"

import Navbar from "./components/Navbar/Navbar"
import SearchBar from './components/Search/SearchBar';
function App() {
  return (
    <>
    <StyledEngineProvider injectFirst>
      <Navbar />
    </StyledEngineProvider>
    </>
  );
}

export default App;
