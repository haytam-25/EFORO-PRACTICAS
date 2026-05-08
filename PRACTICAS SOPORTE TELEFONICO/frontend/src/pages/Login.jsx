function Login({ onLogin }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    onLogin()
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
            <label className="text-sm font-medium text-gray-700">Usuario</label>
            <input
              type="text"
              placeholder="tu@forotf.com"
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Contraseña</label>
            <input
              type="password"
              placeholder="••••••••"
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login