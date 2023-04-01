import './rodape.css';

export default function Rodape() {
    return (
        <footer className="container-footer">
            <div className='content-footer'>
                <div className='item-footer'>
                <img src="assets/logo.png" alt="logo" className='img-footer' />
                </div>
                <div className='item-footer'>
                    <h2>ENDEREÇO</h2>
                    <p>Av. Bernardino de Campos, 98</p>
                    <p>São Paulo, SP 12345-678</p>
                </div>
                <div className='item-footer'>
                    <h2>CONTATO</h2>
                    <p>info@meusite.com</p>
                    <p>Tel: (41) 3456-7890</p>
                </div>
                <div className='item-footer'>
                    <h2>HORÁRIOS</h2>
                    <p>ABERTO TODOS OS DIAS</p>
                    <p>10:00 - 22:00</p>
                </div>
            </div>
            <div className='descricao-footer'>
                <p>Desenvolvido por Jardel Vasconcelos</p>
            </div>
        </footer>
    )
} 
