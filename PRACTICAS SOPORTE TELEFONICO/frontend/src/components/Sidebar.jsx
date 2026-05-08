function Sidebar({ paginaActual, setPagina }) {
  const menu = [
    { nombre: 'Inicio', icono: '🏠' },
    { nombre: 'Calendario Semanal', icono: '📅' },
    { nombre: 'Equipo', icono: '👥' },
    { nombre: 'Reportes', icono: '📊' },
    { nombre: 'Configuración', icono: '⚙️' },
  ]

  return (
    <div className="w-56 min-h-screen bg-orange-500 flex flex-col p-4 gap-2">
      
      <div className="flex items-center gap-3 mb-8 mt-2">
        <div className="bg-white rounded-xl p-2">
          <span className="text-orange-500 text-xl">📞</span>
        </div>
        <div>
          <p className="text-white font-bold text-sm leading-tight">Soporte</p>
          <p className="text-white font-bold text-sm leading-tight">Telefónico</p>
        </div>
      </div>

      {menu.map((item) => (
        <button
          key={item.nombre}
          onClick={() => setPagina(item.nombre)}
          className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition text-left
            ${paginaActual === item.nombre
              ? 'bg-white text-orange-500'
              : 'text-white hover:bg-orange-400'
            }`}
        >
          <span>{item.icono}</span>
          {item.nombre}
        </button>
      ))}

      <div className="mt-auto bg-orange-600 rounded-xl p-4">
        <p className="text-white font-semibold text-sm">¿Necesitas ayuda?</p>
        <p className="text-orange-200 text-xs mt-1">Contacta a tu supervisor</p>
        <p className="text-white text-xs mt-2">📞 (011) 1234-5678</p>
        <p className="text-white text-xs">soporte.interno@empresa.com</p>
      </div>

    </div>
  )
}

export default Sidebar