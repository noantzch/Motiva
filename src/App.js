import "./App.css";
import Navbar2 from "./components/Navbar2";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuienesSomos from "./components/QuienesSomos";
import Capacitaciones from "./components/Capacitaciones";
<<<<<<< HEAD
import Servicios from "./components/servicios";
import Contacto from "./components/contacto";
import { Bienvenida } from "./components/bienvenida";

=======
import { Bienvenida } from "./components/bienvenida";
import Servicios from "./components/servicios";
import Contacto from "./components/contacto";
>>>>>>> ab82b325b377f81d25f81f6ba1f94c562c23cc33
function App() {
  return (
    <BrowserRouter>
      <body>
        <header>
          <nav>
            <Navbar2 />
          </nav>
        </header>
        <main>
          <Routes>
<<<<<<< HEAD
            <Route path="/" element={<Bienvenida />} />
            <Route path="/quienes-somos" element={<QuienesSomos />} />
            <Route path="/capacitaciones" element={<Capacitaciones />} />
            <Route path="/terapias" element={<Servicios />} />
            <Route path="/contacto" element={<Contacto />} />
=======
          <Route path="/" element={<Bienvenida />} />
            <Route path="/quienes-somos" element={<QuienesSomos />} />
            <Route path="/capacitaciones" element={<Capacitaciones />} />
            <Route path="/servicios" element ={<Servicios />} />
            <Route path="/contacto" element ={<Contacto />} />
>>>>>>> ab82b325b377f81d25f81f6ba1f94c562c23cc33
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </BrowserRouter>
  );
}

export default App;
