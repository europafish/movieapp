import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';

function Detail() {
    const location = useLocation();

    useEffect(()=>{
        if (location.state === undefined){
            window.history.push('/');
        }
    });

    
    return (
       <span>{location.state.title}</span> 
    )    
}

export default Detail;