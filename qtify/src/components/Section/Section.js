import React, { useState } from "react";
import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import styles from "./Section.module.css"
import Corousal from "../corousal/Corousal";
import SongFilter from "../SongFilter/SongFilter";

export default function Section({ title, data, filterSource=[],type }) {
  const [filters,setFilters]=useState({key:"all",lable:"All"});
  const [corousal,SetCourosal] =useState(true);
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
    <h4 className={styles.click} onClick={handleTogle}>
          {!corousal ? "Collapse All" : "Show All"}
        </h4>
    {/* {corousal && type == 'album' && (<span className={styles.click} onClick={handleTogle}>Show All</span>)}
    {!corousal && type == 'album' && (<span className={styles.click}  onClick={handleTogle}>Collapse</span>)} */}
    </div>
      
      {type == 'song' && filterSource.length!=0 &&(
        <div >
          <SongFilter data={filterSource} filters={filters} handleSongFilter={handleSongFilter}/>
        </div>
      ) }
      {data.length === 0 && <CircularProgress />}
    
      {data.length > 0 && corousal && <Corousal data={songData} type={type}/>} 
      {data.length > 0 && !corousal && (
        <div className={styles.showAll}>
          {data.map((dataItem) => (
        <Card key={dataItem.id} data={dataItem} type={type} />
      ))}
        </div>
      )}
    </>
  );
}