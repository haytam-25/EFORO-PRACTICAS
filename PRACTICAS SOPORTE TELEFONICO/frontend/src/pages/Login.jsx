import { useState } from 'react'
import { loginApi } from '../api/auth'

function Login({ onLogin }) {
  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')
  const [error, setError]       = useState(null)
  const [cargando, setCargando] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setCargando(true)
    try {
      const respuesta = await loginApi(email, password)
      onLogin(respuesta.data) // Pasamos los datos del usuario al App
    } catch (err) {
      setError('Email o contraseña incorrectos')
    } finally {
      setCargando(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-md">

        <div className="flex items-center gap-3 mb-8">
          <div className="bg-orange-500 rounded-xl p-3">
            <span className="text-white text-2xl">📞</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800">Soporte Telefónico</h1>
            <p className="text-sm text-gray-500">Foro Técnico Formación</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-1">Bienvenido</h2>
        <p className="text-gray-500 text-sm mb-6">Inicia sesión para continuar</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="tu@empresa.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Contraseña</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-500 text-sm px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={cargando}
            className="bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white font-semibold py-2 rounded-lg transition"
          >
            {cargando ? 'Entrando...' : 'Entrar'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login