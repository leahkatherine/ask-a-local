import React from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import askLogo from './app/assets/img/askLogo.png';
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar color='#77DD77' sticky='top' expand='md'>
        <Container>
              <NavbarBrand href='/'>
                  <img src={askLogo} alt='ask a local logo' />
              </NavbarBrand>
          </Container>
      </Navbar>
    </div>
  );
}

export default App;
