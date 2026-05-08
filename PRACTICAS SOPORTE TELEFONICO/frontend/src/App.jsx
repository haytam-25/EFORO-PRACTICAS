import { useState } from 'react'
import Login from './pages/Login'
import Inicio from './pages/Inicio'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  return loggedIn 
    ? <Inicio /> 
    : <Login onLogin={() => setLoggedIn(true)} />
}

export default App