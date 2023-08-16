import  './home.css'
import { Nav } from '../nav/nav';
import { Link } from 'react-router-dom';



export function  Home(){

    var images = ["home/fantasia.jpg", "home/desert.jpg", "home/kasba.jpg", "home/riad.jpg","home/fes.jpg","home/hassan2.jpg","home/marrakech1.jpg","home/sahara.jpg"];

    return(

        <div>

    <div class="Homecontainer" style ={{backgroundImage :'linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)) ,url(' + images[Math.floor(Math.random() * images.length)] + ')'}}>
      <Nav />
        <div class="Homerow">
            <div class="col w-100">
                <h1 className='MoroccoT'>Morocco Travels</h1>
                <p className='w-75 text-light'>Discover Morocco with our captivating travel website! Explore breathtaking destinations,
                 find travel tips, and plan your dream vacations with ease. Unleash your wanderlust and embark on unforgettable adventures through our curated travel experiences."</p>
                    <Link to='/ExploreContry'><button className="Homebutton">Explore</button></Link>

            </div>
        
        

        
</div>
    </div>
    
        </div>
    )
}