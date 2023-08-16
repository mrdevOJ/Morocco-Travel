import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Create from './component/create';
import { Home } from './component/homeSite/home';
import { SingUp } from './component/Auth/singUp';
import { SingIn } from './component/Auth/singIn';
import { Explore } from './component/explore/explore';
import { Rabat } from './component/explore/villes/rabat/card';
import { Casa } from './component/explore/villes/casa/card';
import { Marakkech } from './component/explore/villes/marakkech/card';
function App() {
return(
  <div>
  <BrowserRouter>
    <Routes>
    <Route path='/create'  element={<Create />} /> 
    <Route path='/Register'  element={<SingUp />} /> 
    <Route path='/Login'  element={<SingIn />} /> 
    <Route path='/ExploreContry'  element={<Explore />} />
    <Route path='/ExploreRabat'  element={<Rabat />} />
    <Route path='/ExploreCasa'  element={<Casa />} />
    <Route path='/ExploreMarakkech'  element={<Marakkech />} />

    <Route path='/'  element={<Home />} />
    </Routes>
    </BrowserRouter>
  </div>
)
}

export default App;
