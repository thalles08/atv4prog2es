import FormCadProdutos from "../formularios/formCadProdutos";
import TabelaCadProdutos from "../tabelas/tabelaCadProdutos";
import Pagina from "../templates/pagina";
import { useState } from "react";

export default function TelaCadastroProdutos(props) {
    const [exibirTabela, setExibirTabela] = useState(true);
    const [listaProdutos, setListaProdutos] = useState([]);
    const [produtoSelecionado, setProdutoSelecionado] = useState({});
    const [modoEdicao, setModoEdicao] = useState(false);

    if (exibirTabela) {
        return (
            <div>
                <Pagina>
                    <h4 className="mt-5">Cadastro de Produtos</h4>
                    <h5 className="mt-5">Lista de Produtos</h5>
                    <div className="mt-3">
                        <TabelaCadProdutos 
                            listaProdutos={listaProdutos}
                            setListaProdutos={setListaProdutos}
                            setExibirTabela={setExibirTabela}
                            setProdutoSelecionado={setProdutoSelecionado}
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
                    <h4 className="mt-5">Cadastro de Produtos</h4>
                    <h5 className="mt-5">Formulário de cadastro de Produtos</h5>
                    <div className="mt-3">
                        <FormCadProdutos 
                            setExibirTabela={setExibirTabela}
                            listaProdutos={listaProdutos}
                            setListaProdutos={setListaProdutos}
                            produtoSelecionado={produtoSelecionado}
                            setModoEdicao={setModoEdicao}
                            modoEdicao={modoEdicao}
                        />
                    </div>
                </Pagina>
            </div>
        )
    }
}