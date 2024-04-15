import React, { useState } from 'react'
import "./login.css";
import {user} from "../Components";
import { useNavigate } from "react-router-dom";


export default function Login() {
    const [userName, setUserName] = useState("");
    const [password,setPassword] = useState("");
  const [message,setMessage] = useState("")
  const navigate = useNavigate();

  
  const handleSubmit = (e) => {
    e.preventDefault()
   
  }

  const checkLogin = () => {
    let userLock =false;
    user.find(element => {
      
      if (element.userName === userName && element.password === password) {
        userLock = true;
        localStorage.setItem('user', element.userName);
        navigate(`/`)
      }
      
    });
      if(!userLock) {
        setMessage("Invalid Username or Password")
      }
    }

  return (
    <div className='all'>
        <h1>Welcome to login Form</h1>
         
         <form action="#" method='post'
           onSubmit={handleSubmit}
         >
         
         <p className='email'>
          <label htmlFor=""> User Name : </label>
          <input type="text" placeholder='First Name' 
             value={userName}
             onChange={(e)=>setUserName(e.target.value)}
          />
      </p>

      <p class="password">
            <label for="password">password : </label>
            <input type="password" required placeholder='*******'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
            />
          </p>

          <p class="btn">
          <h3>{message}</h3>
            <button type="submit" onClick={checkLogin}>
              Sign In 
            </button>

            <p class="dont-have-account">
            Don't have an account? <a href="#">Sign up and get started!</a>
          </p>

          </p>
          </form>
          <div>
            
          </div>
    </div>
  )
}
