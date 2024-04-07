import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import urlBaseFuncionario from "../../utilitarios/configuracoes";

export default function FormCadFuncionarios(props) {
  const [validado, setValidado] = useState(false);
  const [funcionario, setFuncionario] = useState(
    props.modoEdicao
      ? props.funcionarioSelecionado
      : {
          nome: "",
          dataNascimento: "",
          cpf: "",
          endereco: "",
          telefone: "",
          email: "",
        }
  );

  async function enviarFuncionarioBackend() {
    const resposta = await fetch(urlBaseFuncionario, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(funcionario)
    })
    const dados = await resposta.json();
    return dados;
  }

  async function alterarFuncionarioBackend() {
    const resposta = await fetch(urlBaseFuncionario, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(funcionario)
    })
    const dados = await resposta.json();
    return dados;
  }

  function manipularMudanca(evento) {
    const componente = evento.currentTarget;
    setFuncionario({ ...funcionario, [componente.name]: componente.value });
  }

  function manipularSubmissao(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    const form = evento.currentTarget;
    if (form.checkValidity() === false) {
      setValidado(true);
    } else {
      setValidado(false);
      if (!props.modoEdicao) {
        enviarFuncionarioBackend().then((dados) => {
          if (dados.status) {
              props.setListaFuncionarios([...props.listaFuncionarios, funcionario]);
              props.setExibirTabela(true);
          }
          alert(dados.mensagem);
        })
        .catch((erro) => {
          alert('Não foi possível conectar ao backend. Erro: ' + erro.message);
        });
      } 
      else {
        alterarFuncionarioBackend().then((dados) => {
          alert(dados.mensagem);
          if (dados.status) {
            const posicao = props.listaFuncionarios
            .map(funcionario => funcionario.id)
            .indexOf(props.funcionarioSelecionado.id);
            let novaLista = [...props.listaFuncionarios];
            novaLista[posicao] = funcionario;
            props.setListaFuncionarios(novaLista);
            props.setExibirTabela(true);
          }
        })
        .catch((erro) => {
          alert('Não foi possível conectar ao backend. Erro: ' + erro.message);
        });        
      }
    }
  }

  return (
    <Form noValidate validated={validado} onSubmit={manipularSubmissao}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Insira o nome"
            value={funcionario.nome}
            name="nome"
            id="nome"
            onChange={manipularMudanca}
          />
          <Form.Control.Feedback type="invalid">
            Informe o nome.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Data de nascimento</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="00/00/0000"
            value={funcionario.dataNascimento}
            name="dataNascimento"
            id="dataNascimento"
            onChange={manipularMudanca}
          />
          <Form.Control.Feedback type="invalid">
            Informe a data de nascimento.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>CPF</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="000.000.000-00"
            value={funcionario.cpf}
            name="cpf"
            id="cpf"
            onChange={manipularMudanca}
          />
          <Form.Control.Feedback type="invalid">
            Informe o CPF.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6">
          <Form.Label>Endereço completo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Informe endereço, CEP, cidade e estado"
            value={funcionario.endereco}
            name="endereco"
            id="endereco"
            onChange={manipularMudanca}
            required
          />
          <Form.Control.Feedback type="invalid">
            Informe o endereço completo.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3">
          <Form.Label>Telefone</Form.Label>
          <Form.Control
            type="text"
            placeholder="Informe o telefone"
            value={funcionario.telefone}
            name="telefone"
            id="telefone"
            onChange={manipularMudanca}
            required
          />
          <Form.Control.Feedback type="invalid">
            Informe o telefone.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            type="text"
            placeholder="Informe o e-mail"
            value={funcionario.email}
            name="email"
            id="email"
            onChange={manipularMudanca}
            required
          />
          <Form.Control.Feedback type="invalid">
            Informe o e-mail.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Button type="submit">
        {props.modoEdicao ? "Alterar" : "Cadastrar"}
      </Button>
      <Button
        onClick={() => {
          props.setModoEdicao(false);
          props.setExibirTabela(true);
        }}
      >
        Voltar
      </Button>
    </Form>
  );
}
