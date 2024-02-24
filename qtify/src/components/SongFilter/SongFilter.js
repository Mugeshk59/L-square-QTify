import React from "react";
import styles from "./SongFilter.module.css"
export default function SongFilter({data,filters,handleSongFilter}){
        console.log("inside songfilter componenet",data,filters)
        return(
                <div className={styles.filterSection}>
                       { data.map((genre)=>{
                       const selectedClass = genre.key === filters.key ? `${styles.songFilter} ${styles.selected}` : `${styles.songFilter} ${styles.notselected}`;
                        return (
                                <span className={selectedClass} onClick={(e)=>{
                                        console.log("inside songfilter",genre.key,genre.leble)
                                        handleSongFilter(genre.key,genre.lebel)
                                }}>{genre.key}</span>
                        )
                })}
                </div>
        )
}