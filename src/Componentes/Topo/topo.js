import { Link } from "react-router-dom";
import './topo.css';
import '../../App.css';

export default function Topo() {
    return (
        <header className="container-topo limitar-secao">
                <div className="container-logo">
                    <img src="assets/logo.png" alt="logo" className="img-logo" />
                </div>
                <nav className="container-link">
                    <Link to='/' className="item-link">Home</Link>
                    <Link to='/sabores' className="item-link">Sabores</Link>
                    <Link to='/sobre' className="item-link">Sobre</Link>
                </nav> 
        </header>
    )
} 