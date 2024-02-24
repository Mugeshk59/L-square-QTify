import React from "react"
import styles from "./HeroSection.module.css"
import HeroImage from "../HeroSection-logo/HeroSection-logo"
import { height } from "@mui/system"

export default function HeroSection(){
        return (
                <div className={styles.herosection}>
                <div className={styles.herocontent}>
                        <div className={styles.wordcontent}>
                        <p >100 Thousand Songs, ad-free over Thousand podcast episodes        
                        </p>
                        </div>
                        <HeroImage />
                </div>
                </div>
        )
}