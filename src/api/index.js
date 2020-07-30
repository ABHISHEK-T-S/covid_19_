import React from 'react'
import axios from 'axios'

const url ='https://covid19.mathdro.id/api';
const FetchData = async() =>{
    try{
        //const response = await axios.get(url);
         const response = await fetch( `${url}`);
        const data = await response.json();
        // console.log(data2);
        //return data;
        const modifiedData= {
            confirmed : data.confirmed,
            recovered : data.recovered,
            deaths : data.deaths,
            lastUpdate : data.lastUpdate    
        };
        return modifiedData;
    }
    catch(error){
        return error;
    }
}

export default FetchData