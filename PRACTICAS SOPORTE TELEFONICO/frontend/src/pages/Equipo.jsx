import { useState } from 'react'

const EQUIPO = [
  { id: 1,  nombre: 'María López',     rol: 'Agente de Soporte', email: 'maria.lopez@empresa.com',     telefono: '(011) 1234-5678', foto: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { id: 2,  nombre: 'Carlos Ramírez',  rol: 'Agente de Soporte', email: 'carlos.ramirez@empresa.com',  telefono: '(011) 2345-6789', foto: 'https://randomuser.me/api/portraits/men/32.jpg'   },
  { id: 3,  nombre: 'Ana Torres',      rol: 'Agente de Soporte', email: 'ana.torres@empresa.com',      telefono: '(011) 3456-7890', foto: 'https://randomuser.me/api/portraits/women/68.jpg' },
  { id: 4,  nombre: 'Jorge Silva',     rol: 'Agente de Soporte', email: 'jorge.silva@empresa.com',     telefono: '(011) 4567-8901', foto: 'https://randomuser.me/api/portraits/men/75.jpg'   },
  { id: 5,  nombre: 'Lucía Fernández', rol: 'Agente de Soporte', email: 'lucia.fernandez@empresa.com', telefono: '(011) 5678-9012', foto: 'https://randomuser.me/api/portraits/women/90.jpg' },
  { id: 6,  nombre: 'Diego Martínez',  rol: 'Agente de Soporte', email: 'diego.martinez@empresa.com',  telefono: '(011) 6789-0123', foto: 'https://randomuser.me/api/portraits/men/46.jpg'   },
  { id: 7,  nombre: 'Sofía Ortega',    rol: 'Agente de Soporte', email: 'sofia.ortega@empresa.com',    telefono: '(011) 7890-1234', foto: 'https://randomuser.me/api/portraits/women/55.jpg' },
  { id: 8,  nombre: 'Andrés Castro',   rol: 'Agente de Soporte', email: 'andres.castro@empresa.com',   telefono: '(011) 8901-2345', foto: 'https://randomuser.me/api/portraits/men/22.jpg'   },
  { id: 9,  nombre: 'Valentina López', rol: 'Agente de Soporte', email: 'valentina.lopez@empresa.com', telefono: '(011) 9012-3456', foto: 'https://randomuser.me/api/portraits/women/33.jpg' },
  { id: 10, nombre: 'Emilio Morales',  rol: 'Agente de Soporte', email: 'emilio.morales@empresa.com',  telefono: '(011) 0123-4567', foto: 'https://randomuser.me/api/portraits/men/60.jpg'   },
  { id: 11, nombre: 'Laura Gómez',     rol: 'Agente de Soporte', email: 'laura.gomez@empresa.com',     telefono: '(011) 1357-2468', foto: 'https://randomuser.me/api/portraits/women/12.jpg' },
  { id: 12, nombre: 'Roberto Pérez',   rol: 'Agente de Soporte', email: 'roberto.perez@empresa.com',   telefono: '(011) 2468-1357', foto: 'https://randomuser.me/api/portraits/men/88.jpg'   },
  { id: 13, nombre: 'Isabel Ramos',    rol: 'Agente de Soporte', email: 'isabel.ramos@empresa.com',    telefono: '(011) 3579-4680', foto: 'https://randomuser.me/api/portraits/women/77.jpg' },
  { id: 14, nombre: 'Miguel Herrera',  rol: 'Agente de Soporte', email: 'miguel.herrera@empresa.com',  telefono: '(011) 4680-5791', foto: 'https://randomuser.me/api/portraits/men/15.jpg'   },
  { id: 15, nombre: 'Patricia Núñez',  rol: 'Agente de Soporte', email: 'patricia.nunez@empresa.com',  telefono: '(011) 5791-6802', foto: 'https://randomuser.me/api/portraits/women/23.jpg' },
  { id: 16, nombre: 'Fernando Ruiz',   rol: 'Agente de Soporte', email: 'fernando.ruiz@empresa.com',   telefono: '(011) 6802-7913', foto: 'https://randomuser.me/api/portraits/men/39.jpg'   },
  { id: 17, nombre: 'Carmen Vega',     rol: 'Agente de Soporte', email: 'carmen.vega@empresa.com',     telefono: '(011) 7913-8024', foto: 'https://randomuser.me/api/portraits/women/61.jpg' },
  { id: 18, nombre: 'Pablo Soto',      rol: 'Agente de Soporte', email: 'pablo.soto@empresa.com',      telefono: '(011) 8024-9135', foto: 'https://randomuser.me/api/portraits/men/53.jpg'   },
  { id: 19, nombre: 'Elena Castillo',  rol: 'Agente de Soporte', email: 'elena.castillo@empresa.com',  telefono: '(011) 9135-0246', foto: 'https://randomuser.me/api/portraits/women/48.jpg' },
  { id: 20, nombre: 'Javier Molina',   rol: 'Agente de Soporte', email: 'javier.molina@empresa.com',   telefono: '(011) 0246-1357', foto: 'https://randomuser.me/api/portraits/men/71.jpg'   },
]

const POR_PAGINA = 10

function Equipo() {
  const [busqueda, setBusqueda]   = useState('')
  const [pagina, setPagina]       = useState(1)

  const filtrados = EQUIPO.filter(a =>
    a.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    a.email.toLowerCase().includes(busqueda.toLowerCase())
  )

  const totalPaginas = Math.ceil(filtrados.length / POR_PAGINA)
  const inicio       = (pagina - 1) * POR_PAGINA
  const visibles     = filtrados.slice(inicio, inicio + POR_PAGINA)

  const cambiarPagina = (nueva) => {
    if (nueva >= 1 && nueva <= totalPaginas) setPagina(nueva)
  }

  // Resetear página al buscar
  const handleBusqueda = (valor) => {
    setBusqueda(valor)
    setPagina(1)
  }

  return (
    <div className="p-8 flex flex-col gap-6 flex-1">

      {/* Cabecera */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-orange-500 text-3xl">👥</span>
          <div>
            <h1 className="text-3xl font-black text-gray-900">Equipo</h1>
            <p className="text-gray-400 text-sm">Perfiles de los trabajadores de la empresa</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 bg-white">
            <span className="text-gray-400">🔍</span>
            <input
              className="text-sm focus:outline-none w-52"
              placeholder="Buscar por nombre o correo..."
              value={busqueda}
              onChange={e => handleBusqueda(e.target.value)}
            />
          </div>
          <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition">
            ⚙️ Filtrar
          </button>
        </div>
      </div>

      {/* Grid de tarjetas */}
      {visibles.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          No se encontró ningún agente con ese nombre o correo
        </div>
      ) : (
        <div className="grid grid-cols-5 gap-4">
          {visibles.map(agente => (
            <div key={agente.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col items-center text-center hover:shadow-md transition">
              <img
                src={agente.foto}
                alt={agente.nombre}
                className="w-24 h-24 rounded-full object-cover mb-3 border-4 border-gray-100"
              />
              <p className="font-bold text-gray-800 text-sm">{agente.nombre}</p>
              <p className="text-gray-400 text-xs mb-3">{agente.rol}</p>
              <div className="w-full border-t border-gray-100 pt-3 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>✉️</span>
                  <span className="truncate">{agente.email}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>📞</span>
                  <span>{agente.telefono}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Paginación */}
      <div className="flex items-center justify-between mt-2">
        <p className="text-sm text-gray-400">
          Mostrando {inicio + 1} a {Math.min(inicio + POR_PAGINA, filtrados.length)} de {filtrados.length} trabajadores
        </p>
        <div className="flex items-center gap-2">
          <button
            onClick={() => cambiarPagina(pagina - 1)}
            disabled={pagina === 1}
            className="px-4 py-2 rounded-lg border border-gray-300 text-sm text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition"
          >
            Anterior
          </button>
          {Array.from({ length: totalPaginas }, (_, i) => i + 1).map(n => (
            <button
              key={n}
              onClick={() => cambiarPagina(n)}
              className={`w-9 h-9 rounded-lg text-sm font-semibold transition ${
                n === pagina
                  ? 'bg-orange-500 text-white'
                  : 'border border-gray-300 text-gray-600 hover:bg-gray-50'
              }`}
            >
              {n}
            </button>
          ))}
          <button
            onClick={() => cambiarPagina(pagina + 1)}
            disabled={pagina === totalPaginas}
            className="px-4 py-2 rounded-lg border border-gray-300 text-sm text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition"
          >
            Siguiente
          </button>
        </div>
      </div>

    </div>
  )
}

export default Equipo