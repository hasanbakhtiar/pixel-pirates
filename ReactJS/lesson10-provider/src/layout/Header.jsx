import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { LangContext } from '../context/LangProvider';

const Header = () => {
    const [lang, setLang] = useContext(LangContext);
    const changeLang = () => {
        if (lang === "AZ") {
            setLang('EN');
            localStorage.setItem('lang', 'EN');
        } else {
            setLang('AZ')
            localStorage.setItem('lang', 'AZ');
        }
    }
    return (
        <Navbar expand="lg" className={lang==="AZ"?"bg-info":"bg-warning"}>
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
                <Button variant='warning' onClick={changeLang}>{lang === "AZ" ? "EN" : "AZ"}</Button>
            </Container>
        </Navbar>
    );
}

export default Header;