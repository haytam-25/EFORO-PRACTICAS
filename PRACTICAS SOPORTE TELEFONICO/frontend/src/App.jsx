import { useState } from 'react'
import Login from './pages/Login'
import Inicio from './pages/Inicio'

function App() {
  const [usuario, setUsuario] = useState(null)

  return usuario
    ? <Inicio usuario={usuario} onLogout={() => setUsuario(null)} />
    : <Login onLogin={(u) => setUsuario(u)} />
}

export default App