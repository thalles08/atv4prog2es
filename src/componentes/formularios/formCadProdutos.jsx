import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export default function FormCadProdutos(props) {
    const [validado, setValidado] = useState(false);
    const [produto, setProduto] = useState(props.modoEdicao ? props.produtoSelecionado : {
      codigoProduto: "",
      descricaoProduto: "",
      marcaProduto: "",
      modeloProduto: "",
      categoriaProduto: "",
      precoCusto: "",
      precoVenda: "",
      fornecedor: ""
    });

    function manipularMudanca(evento) {
      const componente = evento.currentTarget;
      setProduto({ ...produto, [componente.name]: componente.value})
    }

    function manipularSubmissao(evento) {
      evento.preventDefault();
      evento.stopPropagation();
      const form = evento.currentTarget;
      if (form.checkValidity() === false) {
        setValidado(true);
      }
      else {
        setValidado(false);
        if (!props.modoEdicao) {
          props.setListaProdutos([...props.listaProdutos, produto]);
        }
        else {
          const posicao = props.listaProdutos.map(produto => produto.codigoProduto).indexOf(props.produtoSelecionado.codigoProduto);
          let novaLista = [...props.listaProdutos];
          novaLista[posicao] = produto;
          props.setListaProdutos(novaLista);
        }
        props.setExibirTabela(true);
      }
    };
      
  return (
    <Form noValidate validated={validado} onSubmit={manipularSubmissao}>
      <Row className="mb-3">
        <Form.Group as={Col} md="3" controlId="validationCustom01">
          <Form.Label>Código do produto</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Digite o código do produto"
            value={produto.codigoProduto}
            name="codigoProduto"
            id="codigoProduto"
            onChange={manipularMudanca}
          />
          <Form.Control.Feedback type="invalid">
            Informe o código do produto.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="9" controlId="validationCustom02">
          <Form.Label>Descrição do produto</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Insira a descrição do produto"
            value={produto.descricaoProduto}
            name="descricaoProduto"
            id="descricaoProduto"
            onChange={manipularMudanca}
          />
          <Form.Control.Feedback type="invalid">
            Faça uma descrição do produto.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">  
        <Form.Group as={Col} md="3" controlId="validationCustom03">
          <Form.Label>Marca</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Informe a marca do produto"
            value={produto.marcaProduto}
            name="marcaProduto"
            id="marcaProduto"
            onChange={manipularMudanca}
          />
          <Form.Control.Feedback type="invalid">
            Informe a marca.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Modelo</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Informe o modelo do produto"
          value={produto.modeloProduto}
          name="modeloProduto"
          id="modeloProduto"
          onChange={manipularMudanca}
          required />
          <Form.Control.Feedback type="invalid">
            Informe o modelo.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom05">
          <Form.Label>Categoria</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Informe a categoria do produto"
          value={produto.categoriaProduto}
          name="categoriaProduto"
          id="categoriaProduto"
          onChange={manipularMudanca}
          required />
                    <Form.Control.Feedback type="invalid">
            Informe a categoria.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="3" controlId="validationCustom06">
          <Form.Label>Preço de custo</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="R$"
          value={produto.precoCusto}
          name="precoCusto"
          id="precoCusto"
          onChange={manipularMudanca}
          required />
          <Form.Control.Feedback type="invalid">
            Informe o preço de custo.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom07">
          <Form.Label>Preço de venda</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="R$"
          value={produto.precoVenda}
          name="precoVenda"
          id="precoVenda"
          onChange={manipularMudanca}
          required />
            <Form.Control.Feedback type="invalid">
            Informe o preço de venda.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom08">
          <Form.Label>Fornecedor</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Informe o fornecedor"
          value={produto.fornecedor}
          name="fornecedor"
          id="fornecedor"
          onChange={manipularMudanca}
          required />
          <Form.Control.Feedback type="invalid">
            Informe qual é o fornecedor.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Button type="submit">{props.modoEdicao ? "Alterar" : "Cadastrar"}</Button>
      <Button onClick={() => {
        props.setModoEdicao(false);
        props.setExibirTabela(true);
      }}>Voltar</Button>
    </Form>
  );
}
