import { BrowserRouter as Route, Routes, } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactPage from './pages/ContactPage';
import QuizPage from './pages/QuizPage';
import HomePage from './pages/HomePage';
import DashboardWelcome from './pages/DashboardWelcome';
import './App.css';


function App() {
  return (
      <div className="App">
        <Header />
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/quiz" element={<QuizPage />} />
              <Route path="/dashboard" element={<DashboardWelcome/>}/>
            </Routes>
        <Footer />
      </div>
  );
}

export default App;