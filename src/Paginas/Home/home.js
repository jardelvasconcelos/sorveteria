import { Link } from 'react-router-dom';
import Topo from '../../Componentes/Topo/topo';
import Rodape from '../../Componentes/Rodape/rodape';

export default function Home() {
    return (
        <div>
            <Topo />
            <main>
                <section className="banner">
                    <div>
                        <h1>Sorveteria Artesanal</h1>
                    </div>
                </section>
                <section className='sabores'>
                    <div>
                        <img src="assets/banner-sabores.jpg" alt="sabores" />
                    </div>
                    <div>
                        <h2></h2>
                        <span></span>
                        <p></p>
                    </div>
                </section>
                <section></section>
                <section></section>
            </main>
        </div>

    )
}