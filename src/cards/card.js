import React,{useState} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import "../index.css";
  



export default function MediaCard({img,name,likeState, setLike,setDisLike}) {
 ;
  const [buttonState, setButtonState] = useState(likeState);

  const handleLike = (e) => {
      e.preventDefault();
      setButtonState(true);
     setLike(img,name);
  }

  const handleDisLike = (e) => {
    e.preventDefault();
    setButtonState(false);
    setDisLike(img,name);
  }
  

  return (
    
    
    <Card className="card">
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
      <CardActions>
        {(buttonState === false ?<Button size="small" color="primary" onClick={handleLike}>
        
          <h1>Like</h1>
        </Button>:
        <Button size="small" color="primary"  onClick={handleDisLike}>
       
        <h1>Dislike</h1>
      </Button> )}
      </CardActions>
    </Card>
  
  );
}
