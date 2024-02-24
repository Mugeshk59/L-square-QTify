import logo from './logo.svg';
import './App.css';

import React, { useEffect, useState } from "react";
import StyledEngineProvider from "@mui/material/StyledEngineProvider"

import Navbar from "./components/Navbar/Navbar"
import  {fetchTopAlbum , fetchNewAlbum ,fetchSongs,fetchFilter} from "../src/api/api.js"
import {Outlet} from 'react-router-dom'

function App() {
  const [data,setData]=useState({})

  function generateData(key,source){
    source().then((data)=>{
      setData((prevState)=>{
        return {...prevState,[key]:data}
      })
    })
  }
  useEffect(() => {
    generateData("topAlbum",fetchTopAlbum);
    generateData("newAlbum",fetchNewAlbum);
    generateData("songs",fetchSongs);
    generateData("SongsFilters",fetchFilter);
    
  }, []);

  let {topAlbum=[],newAlbum=[],songs=[],SongsFilters=[]}= data;

  return (
    <>
    <StyledEngineProvider injectFirst>
      <Navbar />
      <Outlet context={{data:{topAlbum,newAlbum,songs,SongsFilters}}}/>
    
    </StyledEngineProvider>
    </>
  );
}

export default App;
