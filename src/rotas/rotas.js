import Home from '../paginas/Home/home.js';
import Sabores from '../paginas/Sabores/sabores.js';
import Sobre from '../paginas/Sobre/sobre.js';
import { BrowserRouter,Routes,Route } from "react-router-dom";

export default function Rotas (){
    return (

        <BrowserRouter>
            <Routes>
                <Route exact path="/" element= {<Home/>}/>
                <Route path='/sabores' element={<Sabores/>}/>
                <Route path='/sobre' element={<Sobre/>}/>
            </Routes>
        </BrowserRouter>

    )
}