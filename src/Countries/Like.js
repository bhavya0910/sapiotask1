import React,{useEffect} from "react";
import Navbar from "../Navbar/Navbar";
import LikedCountries from "../Countries/likedCountries";


function Like() {

    return(
        <>
        <Navbar />
        <LikedCountries />
        </>
    )
}
export default Like;