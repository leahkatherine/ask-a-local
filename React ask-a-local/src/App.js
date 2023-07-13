import {Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactPage from './pages/ContactPage';
import ExplorePage from './pages/ExplorePage';
import HomePage from './pages/HomePage';

//import { Container, Navbar, NavbarBrand } from 'reactstrap';
//import askLogo from './app/assets/img/askLogo.png';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header/>
          <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='contact' element={<ContactPage/>}/>
              <Route path='quiz' element={<ExplorePage/>}/>
          </Routes>
      <Footer/>
    </div>
  );
}

export default App;
