import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar.tsx";
import Home from "./pages/Home";
import AddTask from "./pages/AddTask.tsx";
import Stats from "./pages/Stats.tsx";
import Settings from "./pages/Settings.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <div className="container py-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/agregar" element={<AddTask />} />
            <Route path="/estadisticas" element={<Stats />} />
            <Route path="/ajustes" element={<Settings />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
