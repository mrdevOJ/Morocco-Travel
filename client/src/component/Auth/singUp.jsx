import { useState  } from 'react';
import style from './singUp.module.css';
import { useNavigate } from 'react-router-dom';

import Axios from 'axios';
const api = "http://localhost:3001";


export function SingUp(){
  const navigate = useNavigate()

    const[username,setUsernam]=useState("")
    const[password,setPassword]=useState("")
    const onSubmit = async (e)=>{
        e.preventDefault();
      await  Axios.post(`${api}/register`,{username,password})
        alert("Admin created")
        navigate("/")

    }
       
    return( 
        
        <div className={style.body}>
    <div className={style.card}>
    <div className="card-body ">
                  <p className='fs-5'>Register</p>
    
            <form onSubmit={onSubmit}>
                  <div className="mb-3 m-2">
    
    <div className="mb-3 ">
      <label htmlFor="username" className="form-label">Username</label>
      <input type="text"
      value={username}
       onChange={e=>setUsernam(e.target.value)} className="form-control" />
      
    </div>
    
    
    <div className="mb-3">
      <label  className="form-label">Password</label>
      <input type="password" 
      value={password} htmlFor="password" onChange={e=>setPassword(e.target.value)} className="form-control" />
      <div id="password" className="form-text">We'll never share password</div>
    </div>
    
    
    <button  className="btn btn-dark w-100">Register</button>
    </div>
            </form>
            </div>
            </div>
            </div>
        );
}