import Cabecalho from "./cabecalho";
import Menu from "./menu";
import Rodape from "./rodape";


export default function Pagina(props) {
    return (
        <div className="pagina-container">
            <Cabecalho titulo="Sistema de Gestão Empresarial"/>
            <Menu />
            <div className="container">
                {props.children}
            </div>
            <Rodape titulo="Desenvolvido pelo aluno Thalles F. S. Souza para a disciplina Programação 2, Módulo 1 - UNOESTE" />
        </div>
    );
}