import React from "react";
import Card from "../Card/Card";
import 'swiper/css';
import 'swiper/css/navigation'
import { Navigation } from "swiper/modules";
import { SwiperSlide,Swiper } from 'swiper/react';
import styles from "./Corousal.module.css"
export default function Corousal({data,type}){
return (
        <Swiper
        modules ={[Navigation]}
        // className={styles.container}
        navigation
        spaceBetween={10}
        slidesPerView={8}
        onSlideChange={()=>console.log('slide change')}
        onSwipe={(swiper)=>console.log(swiper)}
        >
        {data.map((dataItem) => (
        <SwiperSlide key={dataItem.id}>
        <Card key={dataItem.id} data={dataItem} type={type} />
        </SwiperSlide>
      ))}
        </Swiper>
)
}