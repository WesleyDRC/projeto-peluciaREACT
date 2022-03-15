import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Container from './components/layout/Container';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Contato from './components/pages/Contato'
import Home from './components/pages/Home';
import ChangeImage from './components/layout/ChangeImage'
import UrsosDePelucia from './components/pages/UrsosDePelucia';
import CoracoesDePelucia from './components/pages/CoracoesDePelucia';

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />}> </Route>
          <Route path="/contact" element={<Contato />}></Route>
          <Route path="/ursos-de-pelucia" element={<UrsosDePelucia />}></Route>
          <Route path="/coracoes-de-pelucia" element={<CoracoesDePelucia />}></Route>
        </Routes>
      </Container>
      
      <Footer />
    </Router>
    
  )
}

export default App;
