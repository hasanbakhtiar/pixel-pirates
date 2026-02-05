import { FaShoppingCart } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from "react-use-cart";

const Header = () => {
    const { totalItems } = useCart();
    return (
        <Navbar expand="lg" className={"bg-light"}>
            <Container>
                <Navbar.Brand href="/">Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <NavLink to="/" className='nav-link'> Home</NavLink>
                        <NavLink to="/about" className='nav-link'> About</NavLink>
                        <NavLink to="/products" className='nav-link'> Products</NavLink>
                    </Nav>
                    <Link to={'/basket'} className="btn btn-primary position-relative">
                        <FaShoppingCart size={25} />

                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {totalItems}
                        </span>
                    </Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;