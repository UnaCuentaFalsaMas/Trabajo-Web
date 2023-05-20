
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Logo from '../assets/img/logo1.jpeg';

function Navbare() {
    return (
        <header>
            <Navbar expand="lg">
                <Container>
                    <NavLink to="/" className="nav-link ">
                        <img src={Logo} alt="" />
                        FatFit
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="/" className="nav-link" >
                                Inicio
                            </NavLink>
                            <NavLink to="/acerca" className="nav-link"  >
                                Acerca de nosotros
                            </NavLink>
                            <NavLink to="/contacto" className="nav-link letra"  >
                                Contacto
                            </NavLink>
                            <NavLink to="/acceder" className="nav-link letra"  >
                                Acceder
                            </NavLink>
                            <NavLink to="/registro" className="nav-link letra"  >
                                Registro
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Navbare;
