import "./App.css";
import Navbar2 from "./components/Navbar2";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuienesSomos from "./components/QuienesSomos";
import Capacitaciones from "./components/Capacitaciones";
import { Bienvenida } from "./components/bienvenida";
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
          <Route path="/" element={<Bienvenida />} />
            <Route path="/quienes-somos" element={<QuienesSomos />} />
            <Route path="/capacitaciones" element={<Capacitaciones />} />
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
