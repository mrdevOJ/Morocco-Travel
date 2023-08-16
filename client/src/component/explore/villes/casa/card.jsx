import style from './card.module.css';
import styles from './reaction.module.css';
import { Link } from "react-router-dom";
import classs from "./explore.module.css"
import { Nav } from "../../../nav/nav";
import { useState, useEffect } from 'react';
import Axios from 'axios';
import 'boxicons'

// import { Reaction } from "./reaction";
export const api = "http://localhost:3001";





export function Casa(){
const card =[style.card,'card w-100 mt-1 p-1'].join(' ')
const cardBody=[style.cardBody,'card-body w-100 p-3'].join(' ')
const boxlike =[styles.icon,'bx fs-3 bx-like w-100'].join(' ')
const boxheart =[styles.icon,'bx fs-3 bx-heart w-100'].join(' ')
const [showFunction1, setShowFunction1] = useState(true);
    const [showFunction2, setShowFunction2] = useState(true);
const [post,postSet]=useState([]);


    useEffect(()=>{
      Axios.get(`${api}/Casa`).then(res=> postSet(res.data));
      
    },[post])

      

    return(
      
      <div>
      <div className={classs.nav}>  
<Nav  />


      </div>   

<div className={classs.main}>  

<div className={classs.aside}> 

<ul class="list-group list-group-flush"><div className="w-100">
      <Link to="/create" >
<a className="btn btn-dark  mt-1">New Post</a></Link></div>
<li>  <Link to="/ExploreContry" >
      <button className="btn">Tou les villes</button>
  </Link></li>

</ul>


</div>
<div className={classs.article}>



      
      <div className={style.cardContainer}> 

        {
            post.map(post=>{ 


const  LikeClick = async   (postID)=>{
  setShowFunction1(false);

          return  await Axios.put(`${api}/updateLIKE/${postID}`)
 .then(res=> console.log(res.data)
 .catch(error => console.error(error)));


}
const  DecrLikeClick = async  (postID)=>{
  setShowFunction1(true);

 return   await Axios.put(`${api}/updateLIKEDecr/${postID}`)
 .then(res=> console.log(res.data)
 .catch(error => console.error(error)));
}
const  HeartClick = async  (postID)=>{
  setShowFunction2(false);

 return    await Axios.put(`${api}/updateHeart/${postID}`)
 .then(res=> console.log(res.data) 
 .catch(error => console.error(error)));
}


const  DecrHeartClick = async  (postID)=>{
  setShowFunction2(true);

return   await Axios.put(`${api}/updateHeartDecr/${postID}`)
.then(res=> console.log(res.data) 

.catch(error => console.error(error)));

}

            return <div className={card} key={post._id}> 
        <div className={cardBody}>
        <div>
        </div>
              <h4>{post.name} </h4>  
          <div className='mb-3 '>   
            <span className="input-field">{post.description}</span>
        </div>
        
        <img className={style.image}  src={`/explore/${post.articleImage}`}   />
        
                        

        </div>  
        
        <div className={styles.reaction}>
         
         <div className={styles.cardReaction}>
           <div className={styles.cardBody}>
               <div className={styles.main}>
                   <div  className={styles.reaction}>
    
      {    showFunction1 === false


                  ?<> <button  onClick={()=>DecrLikeClick(post._id)} className={styles.button} >
                   <i className={boxlike} ></i>
           </button>

           </> 

         :  <><button   onClick={()=>LikeClick(post._id)} className={styles.button} >
                   <i className={boxlike} ></i>
           </button> 
           </> 


} 
           <span className='m-1'>{post.LIKE}</span>
                                                                   </div>
                                                
               </div>              

               <div className={styles.main}>
                   <div className={styles.reaction}>

                  {  showFunction2 === false
                  ?<>
                    <button className={styles.button}  onClick={()=>DecrHeartClick(post._id)} > 
                     <i className={boxheart} ></i>   
                      </button>
                     </>

                     :<><button className={styles.button}  onClick={()=>HeartClick(post._id)} > 
                     <i className={boxheart} ></i>     </button>
                    </> 


                  } 
                    
                      <span className='m-1'>{post.Heart}</span>
                           </div>
                           
               </div> 

               <div className={styles.main}>
                   <div className={styles.reaction}>
                   <Link to="https://www.linkedin.com/in/omar-ezzarouali-9962b9224/" >
                   <box-icon className={styles.icon}  name='share' ></box-icon></Link>
                   </div>
               </div>

           </div>
         </div>
           
         </div>
           </div>

            
          })
          }
       
        </div>

</div>
</div>



</div>
    )
}