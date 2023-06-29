import { NavLink, useNavigate } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Logo from '../assets/img/logo1.jpeg';
import { useContext } from 'react';
import AuthContext from '../componentes/AuthContext';
import { AuthProvider } from '../componentes/AuthContext';

interface NavbarProps {
    // Propiedades del componente Navbar
}

function Navbare(_props: NavbarProps) {
    const authContext = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        // Lógica para cerrar sesión
        authContext?.logout();
        navigate('/acceder');
      };
  

  return (
    <header>
        <AuthProvider>
      <Navbar expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {authContext?.isLoggedIn ? (
                <>
                    <NavLink to="/inicio" className="nav-link">
                        <img src={Logo} alt="" />
                        FatFit
                    </NavLink>
                    <NavLink to="/inicio" className="nav-link">
                        Inicio
                    </NavLink>
                  
                    <NavLink to="/acerca" className="nav-link">
                        Acerca de nosotros
                    </NavLink>
                    <NavLink to="/contacto" className="nav-link letra">
                        Contacto
                    </NavLink>
                    {authContext?.isAdmin ? (
                      <NavLink to="/admin" className="nav-link letra">
                       Administrador
                      </NavLink>
                    ) : (
                      <NavLink to="/inicio" className="nav-link letra">
                       usuario
                      </NavLink>
                    )}
                    
                    <Nav.Link onClick={handleLogout}>Cerrar sesión</Nav.Link>
                </>
              ) : (
                <>
                    <NavLink to="/acceder" className="nav-link">
                        <img src={Logo} alt="" />
                        FatFit
                    </NavLink>
                    <NavLink to="/acerca" className="nav-link">
                        Acerca de nosotros
                    </NavLink>
                    <NavLink to="/contacto" className="nav-link letra">
                        Contacto
                    </NavLink>
                    <NavLink to="/acceder" className="nav-link letra">
                        Acceder
                    </NavLink>
                    <NavLink to="/registro" className="nav-link letra">
                        Registro
                    </NavLink>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </AuthProvider>
    </header>
  );
}

export default Navbare;