import AskLogo from '../app/assets/img/AskLogo.png';
import '../App.css';
import {useState} from 'react';
import {Navbar, 
        NavbarBrand,
        Collapse, 
        NavbarToggler,
        Nav,
        NavItem
        } from 'reactstrap';
import {NavLink} from 'react-router-dom';
import UserLoginForm from '../features/user/UserLoginForm';



const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
            <NavbarBrand className='ms-5' href='/'>
                <img src={AskLogo} alt='askLogotest' className='float-start' style={{width:1000}}/>
                
            </NavbarBrand>

            <NavbarToggler onClick ={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen= {menuOpen} navbar>
                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            <i className='fa fa-home fa-lg'/> Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/quiz'>
                            <i className='fa fa-list fa-lg'/> Quiz
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/contact'>
                            <i className='fa fa-address fa-lg'/> Contact
                        </NavLink>
                    </NavItem>
                </Nav>
                <UserLoginForm>
                </UserLoginForm>
            </Collapse>
    </Navbar>
    )
};

export default Header;



