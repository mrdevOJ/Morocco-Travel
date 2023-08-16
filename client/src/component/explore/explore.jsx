import { Link } from "react-router-dom";
import { Nav } from "../nav/nav";
import { Card } from "./card";
import style from "./explore.module.css"




export function Explore(){



    return(
        <div>
        <div className={style.nav}>  
<Nav  />


        </div>
      

<div className={style.main}>  

<div className={style.aside}> 

<ul class="list-group list-group-flush">
<div className="w-100">
        <Link to="/create" >
<a className="btn btn-dark  mt-1">New Post</a></Link></div>
<li>        
        <button className="btn">Tou les villes</button>
    </li>
   <Link to="/ExploreRabat" >
 <li>
    
        <button className="btn" >Rabat</button>
    </li>
    </Link>
  <Link to="/ExploreCasa" > 
   <li>   

        <button className="btn">Casa</button>
    </li>    </Link>

    <li>
        <button className="btn">Fes</button>
    </li>
    <li>
        <button className="btn">Tanger</button>
    </li>
    <li>
        <button className="btn">Agadir</button>
    </li>    <Link to="/ExploreMarakkech" > 

    <li>
        <button className="btn">Marakkech</button>
    </li>    </Link>

    <li>
        <button className="btn">Dakhla</button>
    </li>
    <li>
        <button className="btn">Meknes</button>
    </li>
    <li>
        <button className="btn">Oujda</button>
    </li>
    <li>
        <button className="btn">Layoun</button>
    </li>
    <li>
        <button className="btn">Chefchaoun</button>
    </li>
    <li>
        <button className="btn">Tetouan</button>
    </li>
    <li>
        <button className="btn">Asila</button>
    </li>
    <li>
        <button className="btn">Sale</button>
    </li>
</ul>


</div>

<div className={style.article}>
<Card />
</div>
</div>



</div>

    )
}