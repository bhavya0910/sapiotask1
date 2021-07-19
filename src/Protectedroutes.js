import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
const Protectedroutes=(props)=>{
    let Cmp = props.Cmp
    const history = useHistory();
    useEffect(()=>{
        if(!sessionStorage.getItem('user')){
            history.push("/")
        } 
        
    },[])
    return(
        <Cmp />
    )
}
export default Protectedroutes;