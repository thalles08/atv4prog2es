import { Button, Table } from "react-bootstrap";

export default function TabelaCadFornecedores(props) {

  function excluirFornecedor(cnpj){
    const novaLista = props.listaFornecedores.filter(fornecedor => fornecedor.cnpj !== cnpj);
    props.setListaFornecedores(novaLista);
  }

  function alterarFornecedor(fornecedor){
    props.setFornecedorSelecionado(fornecedor);
    props.setModoEdicao(true);
    props.setExibirTabela(false);
  }

  return (
    <div>
      <Button
        variant="secondary"
        onClick={() => {
          props.setExibirTabela(false);
        }}
      >
        Cadastrar novo Fornecedor
      </Button>
      <Table className="mt-3" striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>CNPJ</th>
            <th>Razão Social</th>
            <th>Nome Fantasia</th>
            <th>Endereço</th>
            <th>Telefone</th>
            <th>E-mail</th>
            <th>Nome representante</th>
            <th>Telefone representante</th>
            <th>E-mail representante</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {props.listaFornecedores?.map((fornecedor, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{fornecedor.cnpj}</td>
                <td>{fornecedor.razaoSocial}</td>
                <td>{fornecedor.nomeFantasia}</td>
                <td>{fornecedor.endereco}</td>
                <td>{fornecedor.telefone}</td>
                <td>{fornecedor.email}</td>
                <td>{fornecedor.nomeRepresentante}</td>
                <td>{fornecedor.telefoneRepresentante}</td>
                <td>{fornecedor.emailRepresentante}</td>
                <td>
                  <Button 
                    variant="danger"
                    onClick={()=>{
                      excluirFornecedor(fornecedor.cnpj)
                    }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-trash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                      <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                    </svg>{" "}
                    excluir
                  </Button>{" "}
                  <Button 
                    onClick={()=>{
                      alterarFornecedor(fornecedor);
                    }}                  
                    variant="primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-pencil-square"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                      <path
                        fill-rule="evenodd"
                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                      />
                    </svg>{" "}
                    editar
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
