import {Link} from "react-router-dom";
export default function Topo() {
    return (
        <header>
            <div>
                <img src="assets/logo.png" alt="logo" />
            </div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/sabores'>Sabores</Link>
                <Link to='/sobre'>Sobre</Link>
            </nav>

        </header>
    )
} 