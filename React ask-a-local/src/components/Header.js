import { Navbar, NavbarBrand } from 'reactstrap';
import askLogo from '../app/assets/img/askLogo.png';



const Header = () => {
    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
            <NavbarBrand className='ms-5' href='/'>
                <img src={askLogo} alt='ask a local logo' className='float-start'/>
                <h1 className='mt-1'>Ask A Local</h1>
            </NavbarBrand>

            
        </Navbar>
    )
}



export default Header;