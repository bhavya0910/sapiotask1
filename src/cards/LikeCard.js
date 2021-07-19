import React,{useState} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';


export default function LikeCard({key,img,name}) {
   
    console.log(img);
  
    return (
      <Card className="card" >
        <CardActionArea>
          <img
           
            src = {img}
           
          />
          <CardContent>
            <h1>
            {name}
            </h1>
          </CardContent>
        </CardActionArea>
        
      </Card>
    );
  }
  