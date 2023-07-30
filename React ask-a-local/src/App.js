
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactPage from './pages/ContactPage';
import QuizPage from './pages/QuizPage';
import HomePage from './pages/HomePage';

import './App.css';

function App() {
  return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/quiz" element={<QuizPage />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;