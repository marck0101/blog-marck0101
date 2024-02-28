import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blog from '../blog/Blog'
import Dieta from '../pages/Dieta'
import Treino from '../pages/Treino'
import Music from '../pages/Musicas'
import Tech from '../pages/Tech'
import Dancas from '../pages/Dancas'
const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/dieta" element={<Dieta />} />
        <Route path="/treino" element={<Treino />} />
        <Route path="/musicas" element={<Music />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/danca" element={<Dancas />} />
      </Routes>
    </BrowserRouter>
  )
}
export default RoutesApp
