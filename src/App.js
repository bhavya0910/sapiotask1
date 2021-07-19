 import  react from 'react';
import "./index.css";
import {Route, Switch , BrowserRouter as Router, BrowserRouter} from "react-router-dom";
  import Register from "./Register";
  import Login from "./Login";
  import Home from "./Home/Home";
  import Like from "./Countries/Like"
import Protectedroutes from './Protectedroutes';
import Logout from "./Logout";
const App =()=>{
  return (
   <>
   <BrowserRouter>
   <Router>
   <Switch>
     <Route exact path = "/"  component ={Login} />
     <Route exact path = "/logout"  component ={Logout} />
     <Route exact path = "/register"  component ={Register} />
     <Route  path = "/Home">
       <Protectedroutes Cmp ={Home}/>
     </Route>
   <Route path ="/like">
     <Protectedroutes Cmp ={Like}/>
    </Route>


   </Switch>
   </Router>
   </BrowserRouter>
   </>
  );

}

export default App;