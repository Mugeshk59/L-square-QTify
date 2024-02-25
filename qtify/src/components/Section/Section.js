import React, { useState } from "react";
import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import styles from "./Section.module.css"
import Corousal from "../corousal/Corousal";
import SongFilter from "../SongFilter/SongFilter";

export default function Section({ title, data, filterSource=[],type }) {
  const [filters,setFilters]=useState({key:"rock",lable:"Rock"});
  const [corousel,SetCourosal] =useState(0);
  console.log("inside section", title, data, type,filterSource);
  let songData = data;
  if(type == 'song' && filters.key != 'all') {
    songData = data.filter((a)=>a.genre.key == filters.key)
  }

  const handleSongFilter =( key,lable)=>{
    console.log("inside section handlefilter",key,lable);
    setFilters({key:key,lable:lable})
  }
  const handleTogle=()=>{
    SetCourosal((prevState)=> !prevState);
  }
  return (
    <>
    <div className={styles.titlesection}>
    <p className={styles.sectiontitle}>{title}</p>
    {corousel && type == 'album' && (<span className={styles.click} onClick={handleTogle}>show all</span>)}
    {!corousel && type == 'album' && (<span className={styles.click}  onClick={handleTogle}>Collapse</span>)}
    </div>
      
      {type == 'song' && filterSource.length!=0 &&(
        <div >
          <SongFilter data={filterSource} filters={filters} handleSongFilter={handleSongFilter}/>
        </div>
      ) }
      {data.length === 0 && <CircularProgress />}
    
      {data.length > 0 && <Corousal data={songData} type={type}/>} 

    </>
  );
}