import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                       <NavLink to="/" className='nav-link'> Home</NavLink>
                       <NavLink to="/about" className='nav-link'> About</NavLink>
                       <NavLink to="/products" className='nav-link'> Products</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;