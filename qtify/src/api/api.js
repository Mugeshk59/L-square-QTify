import axios from "axios";

export const BACKEND_ENDPOINT="https://qtify-backend-labs.crio.do"

export const fetchTopAlbum=async ()=>{
        try{
                const response= await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
                return response.data;
        }catch(error){
                console.error(error);
        }
}

export const fetchNewAlbum = async ()=>{
        try{
                const response= await axios.get(`${BACKEND_ENDPOINT}/albums/new`);
                return response.data;
        }catch(error){
                console.error(error);
        }
}

export const fetchSongs = async ()=>{
        try{
                const response= await axios.get(`${BACKEND_ENDPOINT}/songs`);
                return response.data;
        }catch(error){
                console.error(error);
        }
}

export const fetchFilter = async ()=>{
        try{
                const response= await axios.get(`${BACKEND_ENDPOINT}/genres`);
                return response.data;
        }catch(error){
                console.error(error);
        }
}