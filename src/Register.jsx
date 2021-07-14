import react, { useState } from 'react';
import {useHistory } from 'react-router-dom';
const Register = () =>{
 const [user,setuser]   =useState({
    name:"",
    username : "",
    password:""

 });
 const history = useHistory();
const [records,setrecords] =useState([]);
    const handleInput =(e)=>{
const name = e.target.name;
const value = e.target.value;
//console.log(name,value)
setuser({...user,[name]:value});
    }
const handleSubmit= (e)=>{
e.preventDefault();
const newrecords = {...user,id: new Date().getTime().toString()}
console.log(newrecords);
//localStorage.setItem('user',JSON.stringify(newrecords));
//setrecords([...records,newrecords]);
const variable =JSON.parse(localStorage.getItem('user'));
if(variable===null)
localStorage.setItem('user',JSON.stringify([newrecords]))
else
localStorage.setItem('user',JSON.stringify([...variable,newrecords]))
console.log(variable);
//localStorage.setItem('user',JSON.stringify(records));
setuser({name :"",username:"",password:""})
//alert("now you can login :)")
history.push("/");
}
return (<>
<h2>Register Here</h2>
    <form onSubmit={handleSubmit}>
         <div className="container">
           <label htmlFor="username">Name</label>
           <input type = "text" autoComplete ="off" 
           value ={user.name}
           onChange={handleInput}
           name = "name" id="name" placeholder="Enter your Full Name"></input>
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
           <a href ="/">Click here to Login</a>
           </div>
         </div>
    
       </form>
    </>
   
);
}
export default Register;
