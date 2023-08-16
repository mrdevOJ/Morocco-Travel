import Axios from 'axios';
import { useState   } from 'react';
import { useCookies } from 'react-cookie';
import classes from './singIn.module.css';
import { useNavigate } from 'react-router-dom';

const api = "http://localhost:3001";

export function SingIn(){
  const navigate = useNavigate()

const body =[classes.body].join(' ')
    const[username,setUsernam]=useState("")
    const[password,setPassword]=useState("")

    const[,setCookies]=useCookies(['token'])


const onSubmit = async(e)=>{
e.preventDefault();
      const respons =  await  Axios.post(`${api}/login`,{username,password})
setCookies("token",respons.data.token)
window.localStorage.setItem("userID",respons.data.adminID)  
window.localStorage.setItem("userID",respons.data.adminID) 

  navigate("/")

 

}

    return(

        <div className={body}>
    <div className={classes.card}>
    <div className="card-body ">
                  <p className='fs-5'>Login</p>
    
            <form onSubmit={onSubmit}>
                  <div className="mb-3 m-2">
    
    <div className="mb-3 ">        <div className="input">

      <input type="text"
      value={username}
       onChange={e=>setUsernam(e.target.value)} className="input-field" />
            <label htmlFor="username" className="form-label">Username</label>

    </div>
    </div>
    
    <div className="mb-3">
    <div class="input">

      <input type="password" 
      value={password} htmlFor="password" onChange={e=>setPassword(e.target.value)} className="input-field" />
    </div>      <label  className="form-label">Password</label>
      <div id="password" className="form-text">We'll never share password</div>

    </div>
    
    <button  className="btn btn-dark w-100">Login</button>
    </div>
            </form>
            </div>
            </div>
            </div>
        );
}