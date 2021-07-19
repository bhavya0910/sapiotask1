import React,{useState,useEffect} from "react"
import { useSelector } from 'react-redux';
import Card from "../cards/card";

import Grid from '@material-ui/core/Grid';


const Country = () => {

    const countrydata = useSelector((state) => state.countries);
    const count = countrydata.map((obj) => ({...obj,liked: false}) );
      sessionStorage.setItem("country",JSON.stringify(count))

    
    


    var getcountry = JSON.parse(sessionStorage.getItem("country"));

    const [likeCountry,setLikeCountry] = useState([])

    useEffect(()=>{
    
      
      
      if(likeCountry.length>1)
        { var new1 = [...likeCountry];
        
         sessionStorage.setItem("likedata",JSON.stringify(new1));}
      
 },[likeCountry])

 const sLiked = (img,name) => {
    const x = JSON.parse(sessionStorage.getItem("country"));
    const y = x.map((obj) => obj.name===name ? {...obj,liked: true}:obj);
   
    sessionStorage.setItem("country",JSON.stringify(y));
    
    setLikeCountry([...likeCountry,{countryName: name,countryFlag: img}])
 } 

 const sDisLiked = (img,name) => {
   const x = JSON.parse(sessionStorage.getItem("country"));
   const y = x.map((obj) => obj.name===name ? {...obj,liked: false}:obj);
  
   sessionStorage.setItem("country",JSON.stringify(y));
   
   let indexDisLiked = -1;
   likeCountry.forEach((country,index) => {
      if(country.countryName === name)
      {
         indexDisLiked = index;
      
         return;
      }
   });
   const newLike = likeCountry;
   newLike.splice(indexDisLiked,1);
   setLikeCountry(newLike);
   
  if(likeCountry.length>=1)
   {var newLiked = [...likeCountry];
  
   sessionStorage.setItem("likedata",JSON.stringify(newLiked));}

 }

    return(
     <div >
      <Grid container spacing={3}>  
      {getcountry.map((country,index)=> (<Grid key={index} item xs={3}>
        <Card key={country.name}   name={country.name} img={country.flag} likeState={country.liked} setLike={sLiked} setDisLike={sDisLiked} />
        </Grid>))}
      </Grid>
        </div>)
}

export default Country;