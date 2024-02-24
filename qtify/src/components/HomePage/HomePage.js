import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import { useOutletContext } from "react-router-dom";
import Section from "../Section/Section";
import  {fetchFilter} from "../../api/api.js"

export default function HomePage(){
        const {data} = useOutletContext();
        let {newAlbum,topAlbum,songs,SongsFilters} = data;
        SongsFilters = SongsFilters.length!=0? SongsFilters.data:SongsFilters;
        SongsFilters =[{key:"all",lable:"All"},...SongsFilters];
        console.log("inside home-filter list",SongsFilters.data)
        
        return (
                <>
                <HeroSection />
                <div>
                        <Section title="Top Albums" data={topAlbum} type="album" />
                        <Section title="New Albums" data={newAlbum} type="album" />
                        <Section 
                        title="Songs"
                        data={songs}
                        filterSource={SongsFilters}
                        type="song"
                        />
                        
                </div>
                </>
        )
} 