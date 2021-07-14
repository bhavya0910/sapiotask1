import  react from 'react';
import "./index.css";
import {Route, Switch , BrowserRouter as Router} from "react-router-dom";
  import Register from "./Register";
  import Login from "./Login";
  import Home from "./Home/Home";
  import Like from "./Countries/Like"

const App =()=>{
  return (
   <>
   <Router>
   <Switch>
     <Route exact path = "/"  component ={Login} />
     <Route exact path = "/register"  component ={Register} />
     <Route exact path = "/Home"  component ={Home} />
     <Route exact path = "/Like"  component ={Like} />

   </Switch>
   </Router>
   </>
  );

}

export default App;