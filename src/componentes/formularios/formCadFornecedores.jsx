import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export default function FormCadFornecedores(props) {
    const [validado, setValidado] = useState(false);
    const [fornecedor, setFornecedor] = useState(props.modoEdicao ? props.fornecedorSelecionado : {
      cnpj: "",
      razaoSocial: "",
      nomeFantasia: "",
      endereco: "",
      telefone: "",
      email: "",
      nomeRepresentante: "",
      telefoneRepresentante: "",
      emailRepresentante: ""
    });

    function manipularMudanca(evento) {
      const componente = evento.currentTarget;
      setFornecedor({ ...fornecedor, [componente.name]: componente.value})
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
          props.setListaFornecedores([...props.listaFornecedores, fornecedor]);
        }
        else {
          const posicao = props.listaFornecedores.map(fornecedor => fornecedor.cnpj).indexOf(props.fornecedorSelecionado.cnpj);
          let novaLista = [...props.listaFornecedores];
          novaLista[posicao] = fornecedor;
          props.setListaFornecedores(novaLista);
        }
        props.setExibirTabela(true);
      }
    };
      
  return (
    <Form noValidate validated={validado} onSubmit={manipularSubmissao}>
      <Row className="mb-3">
        <Form.Group as={Col} md="2" controlId="validationCustom01">
          <Form.Label>CNPJ</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="00.000.000/0000-00"
            value={fornecedor.cnpj}
            name="cnpj"
            id="cnpj"
            onChange={manipularMudanca}
          />
          <Form.Control.Feedback type="invalid">
            Informe o CNPJ do fornecedor.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="5" controlId="validationCustom02">
          <Form.Label>Razão Social</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Informe a razão social do fornecedor"
            value={fornecedor.razaoSocial}
            name="razaoSocial"
            id="razaoSocial"
            onChange={manipularMudanca}
          />
          <Form.Control.Feedback type="invalid">
            Informe a Razão Social do forncedor.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="5" controlId="validationCustom03">
          <Form.Label>Nome Fantasia</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Informe o nome fantasia do fornecedor"
            value={fornecedor.nomeFantasia}
            name="nomeFantasia"
            id="nomeFantasia"
            onChange={manipularMudanca}
          />
          <Form.Control.Feedback type="invalid">
            Informe o Nome Fantasia do fornecedor.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom04">
          <Form.Label>Endereço completo</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Informe endereço, CEP, cidade e estado"
          value={fornecedor.endereco}
          name="endereco"
          id="endereco"
          onChange={manipularMudanca}
          required />
          <Form.Control.Feedback type="invalid">
            Informe o endereço completo.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Telefone</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Informe o telefone"
          value={fornecedor.telefone}
          name="telefone"
          id="telefone"
          onChange={manipularMudanca}
          required />
          <Form.Control.Feedback type="invalid">
            Informe o telefone.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom06">
          <Form.Label>E-mail</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Informe o e-mail"
          value={fornecedor.email}
          name="email"
          id="email"
          onChange={manipularMudanca}
          required />
          <Form.Control.Feedback type="invalid">
            Informe o e-mail.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom07">
          <Form.Label>Nome do representante</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Informe o nome do representante"
          value={fornecedor.nomeRepresentante}
          name="nomeRepresentante"
          id="nomeRepresentante"
          onChange={manipularMudanca}
          required />
                    <Form.Control.Feedback type="invalid">
            Informe o nome do representante desse fornecedor.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom08">
          <Form.Label>Telefone do representante</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Informe o telefone do representante"
          value={fornecedor.telefoneRepresentante}
          name="telefoneRepresentante"
          id="telefoneRepresentante"
          onChange={manipularMudanca}
          required />
          <Form.Control.Feedback type="invalid">
            Informe o telefone do representante desse fornecedor.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom09">
          <Form.Label>E-mail do representante</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Informe o e-mail do representante"
          value={fornecedor.emailRepresentante}
          name="emailRepresentante"
          id="emailRepresentante"
          onChange={manipularMudanca}
          required />
                    <Form.Control.Feedback type="invalid">
            Informe o e-mail do representante desse fornecedor.
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
