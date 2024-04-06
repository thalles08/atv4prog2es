import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useContext } from 'react';
import ContextoUsuario from '../contextos/contextoUsuario';

export default function Menu2 () {
  const [usuario, setUsuario] = useContext(ContextoUsuario);
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <div className="d-flex justify-content-start align-items-center w-100">
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            </div>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <h4>Menu</h4>
                  <h6>Usuário: {usuario.nome}</h6>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
              <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Pesquisar"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Buscar</Button>
                </Form>
                <Nav className="justify-content-end flex-grow-1 pe-3 mt-4">
                  <Nav.Link><Link to={'/'}>Página Inicial</Link></Nav.Link>
                  <Nav.Link><Link to={'/funcionarios'}>Cadastro de Funcionários</Link></Nav.Link>
                  <Nav.Link><Link to={'/produtos'}>Cadastro de Produtos</Link></Nav.Link>
                  <Nav.Link><Link to={'/fornecedores'}>Cadastro de Fornecedores</Link></Nav.Link>
                  <NavDropdown
                    title="Departamentos"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Recursos Humanos</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Atendimento
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Button 
                  variant="outline-danger" 
                  className='mt-5'
                  onClick={()=>{
                    setUsuario({
                      nome:'',
                      logado:false
                    })
                  }}
                >Logout
                </Button>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}