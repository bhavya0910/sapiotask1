/*import React from "react";
import LikeCard from "../cards/LikeCard";

const LikeCountries = (props) => {

    const localCountry = JSON.parse(sessionStorage.getItem("likedata"));
    return(<>
    {localCountry ?
  
      localCountry.map((country)=>(
      
        <div >
        
         <h1>{country.countryName}</h1>
          <img src = {country.countryFlag}></img>

         
        </div>
      
      )):
      <h1>No liked flags</h1>
      }
       
      
        </>)
}

export default LikeCountries;*/
/*
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function LikeCountries() {
  const classes = useStyles();
  
  
    const localCountry = JSON.parse(sessionStorage.getItem("likedata"));

     return (
    <>
   {localCountry ? localCountry.map((country)=>(
     <Grid container spacing={3}> 
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={country.countryFlag}
        
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {country.countryName}
          </Typography>
          
        </CardContent>
      </CardActionArea>
      
    </Card>
    </Grid>
     )):
     <h1>No liked flags</h1>
    }
    </>
  );
  
  }*/

 /* import React from 'react'
  import CardMedia from '@material-ui/core/CardMedia';
  import { makeStyles } from '@material-ui/core/styles'
  import {
      Grid,
      Card,
      CardContent,
      Typography,
      CardActionArea
      

  } from '@material-ui/core/'
  
  const useStyles = makeStyles(theme => ({
      root: {
          flexGrow: 1,
          padding: theme.spacing(3)
      }
  }))
  
  export default function LikedCountries() {
      const classes = useStyles()
      const localCountry = JSON.parse(sessionStorage.getItem("likedata"));
     
      return (
          <div className={classes.root}>
               <Grid
                container
                spacing={3}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
            >

                  { localCountry ? localCountry.map((country)=> (
                      <Grid   key={localCountry.indexOf(country)}>
                          <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={country.countryFlag}
        
        />
                              <CardContent>
                                  <Typography variant="h5" gutterBottom>
                                  {country.countryName}
                                  </Typography>
                              </CardContent>
                              </CardActionArea>
                          </Card>
                       </Grid>
                  )):
                  <h1>No liked flags</h1>
                }
              </Grid>
          </div>
      )
  }*/
import React from "react";
import LikeCard from "../cards/LikeCard";
import { Grid } from '@material-ui/core';
const LikeCountries = (props) => {

    const localCountry = JSON.parse(sessionStorage.getItem("likedata"));
    console.log(localCountry);
    return(<>
    <div>
    <Grid container spacing={3}>  
    {localCountry ?
  localCountry.map((country,index)=> (<Grid key={index} item xs={3}>
      
        <LikeCard key={country.countryName}  name={country.countryName} img={country.countryFlag}/>
        </Grid>)):
      <h1>No liked flags</h1>
      }
        </Grid>
       </div>
      
        </>)
}
export default LikeCountries;