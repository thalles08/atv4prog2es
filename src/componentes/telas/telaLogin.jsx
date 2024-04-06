import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Cabecalho from '../templates/cabecalho';
import ContextoUsuario from '../contextos/contextoUsuario';
import { useContext, useState } from 'react';

export default function TelaLogin(props) {
    const [usuario, setUsuario] = useContext(ContextoUsuario);
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [senha, setSenha] = useState('');

    function verificarCredenciais() {
        if (nomeUsuario === 'admin' && senha === 'admin') {
            setUsuario({
                nome: nomeUsuario,
                logado: true
            });
        }
    }

    return (
        <div>
            <Cabecalho titulo="Sistema de Gestão Empresarial"/>
            <div className='container d-flex align-items-center justify-content-center w-50 mt-5'>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Usuário:</Form.Label>
                        <Form.Control 
                            type="text" 
                            id='nomeUsuario'
                            name='nomeUsuario'
                            value={nomeUsuario}
                            onChange={(e)=>setNomeUsuario(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Senha:</Form.Label>
                        <Form.Control 
                            type="password" 
                            id='senha'
                            name='senha'
                            value={senha}
                            onChange={(e)=>setSenha(e.target.value)}
                        />
                    </Form.Group>
                    <Button 
                        variant="primary" 
                        type="submit"
                        onClick={()=>{verificarCredenciais()}}
                    >Login
                    </Button>
                </Form>
            </div>
        </div>

    );
}