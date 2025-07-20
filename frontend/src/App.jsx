import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Acá podrías poner más rutas si querés agregar editar o detalles */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
