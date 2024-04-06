import './estilos.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaHome from "./componentes/telas/telaHome";
import TelaCadastroFuncionarios from "./componentes/telas/telaCadastroFuncionarios";
import TelaCadastroProduto from "./componentes/telas/telaCadastroProdutos";
import TelaCadastroFornecedores from "./componentes/telas/telaCadastroFornecedores";
import Tela404 from './componentes/telas/tela404';
import TelaLogin from './componentes/telas/telaLogin';
import { useState } from 'react';
import ContextoUsuario from './componentes/contextos/contextoUsuario';

function App() {

const [usuario, setUsuario] = useState({
  nome:'',
  logado:''
})

  if (!usuario.logado) {
    return (
      <ContextoUsuario.Provider value={[usuario, setUsuario]}>
        <TelaLogin />
      </ContextoUsuario.Provider>

    );
  }
  else {
    return (
      <div className="App">
        <ContextoUsuario.Provider value={[usuario, setUsuario]}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<TelaHome />} />
              <Route path="/funcionario" element={<TelaCadastroFuncionarios />} />
              <Route path="/produto" element={<TelaCadastroProduto />} />
              <Route path="/fornecedor" element={<TelaCadastroFornecedores />} />
              <Route path="/*" element={<Tela404 />} />
            </Routes>
          </BrowserRouter> 
        </ContextoUsuario.Provider>             
      </div>
    );
  }
}

export default App;
