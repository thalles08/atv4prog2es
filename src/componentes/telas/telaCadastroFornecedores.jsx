import FormCadFornecedores from "../formularios/formCadFornecedores";
import TabelaCadFornecedores from "../tabelas/tabelaCadFornecedores";
import Pagina from "../templates/pagina";
import { useState } from "react";

export default function TelaCadastroFornecedores(props) {
    const [exibirTabela, setExibirTabela] = useState(true);
    const [listaFornecedores, setListaFornecedores] = useState([]);
    const [fornecedorSelecionado, setFornecedorSelecionado] = useState({});
    const [modoEdicao, setModoEdicao] = useState(false);

    if (exibirTabela) {
        return (
            <div>
                <Pagina>
                    <h4 className="mt-5">Cadastro de Fornecedores</h4>
                    <h5 className="mt-5">Lista de Fornecedores</h5>
                    <div className="mt-3">
                        <TabelaCadFornecedores 
                            listaFornecedores={listaFornecedores}
                            setListaFornecedores={setListaFornecedores} 
                            setExibirTabela={setExibirTabela}
                            setFornecedorSelecionado={setFornecedorSelecionado}
                            setModoEdicao={setModoEdicao}
                        />
                    </div>

                </Pagina>
            </div>
        )
    }
    else {
        return (
            <div>
                <Pagina>
                    <h4 className="mt-5">Cadastro de Fornecedores</h4>
                    <h5 className="mt-5">Formulário de cadastro de Fornecedores</h5>
                    <div className="mt-3">
                        <FormCadFornecedores 
                            setExibirTabela={setExibirTabela}
                            listaFornecedores={listaFornecedores}
                            setListaFornecedores={setListaFornecedores}
                            fornecedorSelecionado={fornecedorSelecionado}
                            setModoEdicao={setModoEdicao}
                            modoEdicao={modoEdicao}                            
                        />
                    </div>
                </Pagina>
            </div>
        )
    }
}