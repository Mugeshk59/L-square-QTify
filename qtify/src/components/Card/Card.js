import { Chip, Tooltip } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css"

export default function Card({key,data,type}){
        console.log("inside card",type);
        switch(type){
                case "album":{
                        console.log("inside switch album")
                        const {image,follows,title,slug,songs} = data
                        return (
                                <Tooltip  title={`${songs.length} songs`} placement="top" arrow>
                                <Link  to={`/album/${slug}`}>
                                <div className={styles.wrapper} key={key}>
                                <div className={styles.card}>
                                        <div>
                                        <img src={image} alt ="album" loading="lazy"/>
                                        </div>
                                <div className={styles.banner}>
                                        <Chip 
                                        label={`${follows} Follows`}
                                        size="small"
                                        className={styles.chip}
                                        />
                                </div>
                                </div>
                                <div>
                                <p className={styles.titlewrapper}>{title}</p>
                                </div>
                                </div>
                                </Link>
                                </Tooltip>
                        
                        );
                }
                case "song":{
                        console.log("inside switch songs")
                        const {image,likes,title} = data
                        return (
                                <div className={styles.wrapper} key={key}>
                                <div className={styles.card}>
                                                <img src={image}
                                                alt="song" loading="lazy" />
                                                <div className={styles.banner}>
                                                <Chip 
                                                        label={`${likes} Likes`}
                                        size="small"
                                                        className={styles.chip}
                                                />
                                                </div>
                                </div>
                                <div>
                                        <p className={styles.titlewrapper}>{title}</p>
                                </div>
                                </div>
                        )
                }
        }
         
} 