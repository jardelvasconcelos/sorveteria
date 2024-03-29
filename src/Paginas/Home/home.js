import { Link } from 'react-router-dom';
import Topo from '../../Componentes/Topo/topo';
import Rodape from '../../Componentes/Rodape/rodape';
import './home.css';

export default function Home() {
    return (
        <div>
            <Topo />
            <main>
                <section className="container-banner">
                    <div className='content-banner'>
                        <h1 className='item-banner'>SORVETE ARTESANAL</h1>
                    </div>
                </section>
                <section className='container-sabores'>
                    <div className='item-sabores'>
                        <img src="assets/banner-sabores.jpg" alt="sabores" className='img-sabores' />
                    </div>
                    <div className='descricao-sabores'>
                        <h2>NOSSOS SABORES</h2>
                        <span>Novos e deliciosos!</span>
                        <p>Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!</p>
                    </div>
                </section>
                <section className='container-eventos'>
                    <div className='descricao-eventos'>
                     <h2>NOSSOS EVENTOS</h2>
                        <span>Delicias com sorvete!</span>
                        <p>Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvete da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.</p>
                    </div>
                    <div className='item-eventos'>
                        <img src="assets/eventos-image.jpg" alt="evento" className='img-eventos'/>
                    </div>
                </section>
                <section className='container-sobre'>
                    <div className='item-sobre'>
                        <img src="assets/sobre-image.jpg" alt="sobre" className='img-sobre'/>
                    </div>
                    <div className='descricao-sobre'>
                        <h2>SOBRE NÓS</h2>
                        <span>Alegria em cada casquinha!</span>
                        <p>Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para o 	nosso cliente e você não pode ficar fora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade.</p>
                    </div>
                </section>
            </main>
            <Rodape />
        </div>
    )
}
