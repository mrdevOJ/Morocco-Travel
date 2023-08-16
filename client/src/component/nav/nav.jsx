import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import style from './nav.module.css';

export function  Nav(){
    const[cookies,setCookies]=useCookies("token")
    const navigate = useNavigate()

const removeCookies = ()=>{
    setCookies("token",'')
    window.localStorage.removeItem("userID")
    window.location.reload(false)
     navigate("/")
}
const nav =[style.Nav ,'data-bs-theme="dark float-right'].join(' ')

return(
    <div className={style.Homenavbar}>
    <nav className={nav}>
    <ul >
        <li> <Link to="/"><a className={style.btn}>HOME</a></Link></li>
        {
              cookies.token
            ? <li><a className={style.btn} onClick={removeCookies}>Logout</a></li>
            :(
                <> 
            <Link to="/Register">
        <li><a className={style.btn}>Sing Up</a></li>  
        
         </Link>
            <Link to="/login">
        <li><a className={style.btn}>Sing In</a></li> 
        </Link>
        </>
        
        )
        

        }
    </ul>
    </nav>
</div>
)
}
