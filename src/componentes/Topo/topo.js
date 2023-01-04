import {Link} from 'react-router-dom';

export default function Topo(){
    return(
        <header>
            <div>
                <img src="assets/logo.png" alt="logo_sorveteria" />
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/sabores'>Sabores</Link>
                    <Link to='/sobre'>Sobre</Link>
                </nav>
            </div>
        </header>
    )
}