import react,{useState} from 'react';
import { BrowserRouter, Route,Switch, useHistory } from 'react-router-dom'

const Log=()=>{
  const [user,setuser]   =useState({
    
    username : "",
    password:""

 });
 const handleInput =(e)=>{
  const name1 = e.target.name;
  const value1 = e.target.value;
  //console.log(name,value)
  setuser({...user,[name1]:value1});
      }
      const history = useHistory();
      
      const handleSubmit= (e)=>{
        e.preventDefault();
        let olddata = localStorage.getItem('user')
        let oldarr = JSON.parse(olddata)
       console.log(oldarr);
      // console.log(user)
      let flag =0;
    for(let i =0 ;i<oldarr.length;i++)
        {
        
            if (oldarr[i].username ===user.username && oldarr[i].password === user.password) {
             // alert("login");
              //<Home/>
              //window.location = '/Home';

              
              const newrecords = {...user,id: new Date().getTime().toString()}
              
          
         sessionStorage.setItem('user',JSON.stringify([newrecords]))
         history.push("/Home");

              flag=1;
              break;
             
            }else{
              flag=0
             continue;
            
            }
            
           

        }
if(flag===0)
alert('invalid cerdentials');

      
        
       
    
  setuser({username:"",password:""})
        
      }   
  
return(<>

  <h2>Login</h2>
  <form onSubmit={handleSubmit} >
         <div className="container">
           
           <label htmlFor="username">Username</label>
       <input type = "text"  autoComplete ="off" 
        value ={user.username}
        onChange={handleInput}
       name = "username" id="username" placeholder="Enter Username"></input>
           <label htmlFor="password">Password</label>
           <input type = "password" 
           value ={user.password}
           onChange={handleInput}
           name = "password" id="password" placeholder="Enter Password"></input>
           <button type="submit">Submit</button>
           <div className="container" >
           <a href ="/register">Click here to Register</a>
           </div>
         </div>
    
       </form>
  
</>
);
}
export default Log;
