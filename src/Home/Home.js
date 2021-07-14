import React,{useEffect} from "react";
import Navbar from "../Navbar/Navbar";
import { useDispatch } from "react-redux";
import { fetchCountries } from "../Actions/auth";
import Countries from "../Countries/country"
 

function Home() {

    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(fetchCountries());
    },[]) 
    return(
        <>
        <Navbar />
        <Countries />
        </>
    )
}
export default Home;