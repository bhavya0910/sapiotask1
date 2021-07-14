import React,{useState, useEffect} from "react"
import Button from "@material-ui/core/Button";
import { useSelector } from 'react-redux';
import "../index.css";
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));



const Countries = (props) => {
  
  

    const localcountryVal = useSelector((state) => state.countries);
    sessionStorage.setItem("homedata",JSON.stringify(localcountryVal));

    const home = JSON.parse(sessionStorage.getItem("homedata"));

    const [likeCountry,setLikeCountry] = useState([{countryName: "",countryFlag: ""}])

    useEffect(()=>{sessionStorage.setItem("likedata",JSON.stringify(likeCountry))
   
 },[likeCountry])
 
    return(
    <>
<div >
      <h2>List of all Countries</h2>
      <hr />

      <div className="productsContainer">
        {home.map((country) => (
          <div>
           
           <img src={country.flag} alt="flag" />
           
           <h1>{country.name}</h1>
           
          <Button onClick={(e) => {
             e.preventDefault();
             setLikeCountry([...likeCountry,{countryName: country.name,countryFlag: country.flag}])
             

           }} >Like</Button>
           
          
           </div>
          
       
           
          

        ))}
      </div>
      </div>
      
      
      
    
    
        </>)
}

export default Countries;