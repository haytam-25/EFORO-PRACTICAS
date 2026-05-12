import { useState } from 'react'

const AGENTES = ['María López', 'Carlos Ramírez', 'Ana Torres', 'Jorge Silva', 'Lucía Fernández']

const DATOS_INICIALES = [
  { id: 1, fecha: '24/05/2024 17:32', alumno: 'Juan Pérez',      iniciales: 'JP', color: 'bg-purple-400',  incidencia: 'Problemas para acceder a la plataforma',  agente: 'María López',     estado: 'Resuelta',  gravedad: 'Alta'  },
  { id: 2, fecha: '24/05/2024 16:15', alumno: 'Ana Martínez',    iniciales: 'AM', color: 'bg-pink-400',    incidencia: 'Duda sobre el contenido del curso',        agente: 'Carlos Ramírez',  estado: 'Pendiente', gravedad: 'Baja'  },
  { id: 3, fecha: '24/05/2024 15:08', alumno: 'Luis González',   iniciales: 'LG', color: 'bg-green-400',   incidencia: 'Error al descargar certificado',           agente: 'Ana Torres',      estado: 'Resuelta',  gravedad: 'Media' },
  { id: 4, fecha: '24/05/2024 14:22', alumno: 'María Castillo',  iniciales: 'MC', color: 'bg-orange-400',  incidencia: 'No recibe correos de confirmación',        agente: 'Jorge Silva',     estado: 'Pendiente', gravedad: 'Alta'  },
  { id: 5, fecha: '24/05/2024 13:47', alumno: 'Diego Ramírez',   iniciales: 'DR', color: 'bg-blue-400',    incidencia: 'Problema con el método de pago',           agente: 'Lucía Fernández', estado: 'Resuelta',  gravedad: 'Media' },
]

const VACIO = { alumno: '', incidencia: '', agente: '', estado: 'Pendiente', gravedad: 'Media' }

function BadgeEstado({ estado }) {
  const estilos = {
    'Resuelta':   'bg-green-100 text-green-600',
    'Pendiente':  'bg-orange-100 text-orange-500',
    'En curso':   'bg-blue-100 text-blue-500',
  }
  const puntos = {
    'Resuelta':  'bg-green-500',
    'Pendiente': 'bg-orange-400',
    'En curso':  'bg-blue-500',
  }
  return (
    <span className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${estilos[estado]}`}>
      <span className={`w-2 h-2 rounded-full ${puntos[estado]}`}></span>
      {estado}
    </span>
  )
}

function BadgeGravedad({ gravedad }) {
  const estilos = {
    'Alta':  'bg-red-100 text-red-500',
    'Media': 'bg-yellow-100 text-yellow-600',
    'Baja':  'bg-green-100 text-green-600',
  }
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${estilos[gravedad]}`}>
      {gravedad}
    </span>
  )
}

function Modal({ titulo, datos, onChange, onGuardar, onCerrar }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <h2 className="text-xl font-bold text-gray-800 mb-6">{titulo}</h2>

        <div className="flex flex-col gap-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Nombre del alumno</label>
            <input
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={datos.alumno}
              onChange={e => onChange({ ...datos, alumno: e.target.value })}
              placeholder="Nombre completo"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Incidencia</label>
            <input
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={datos.incidencia}
              onChange={e => onChange({ ...datos, incidencia: e.target.value })}
              placeholder="Describe la incidencia"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Agente</label>
            <select
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={datos.agente}
              onChange={e => onChange({ ...datos, agente: e.target.value })}
            >
              <option value="">Selecciona agente</option>
              {AGENTES.map(a => <option key={a}>{a}</option>)}
            </select>
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="text-sm font-medium text-gray-700">Estado</label>
              <select
                className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                value={datos.estado}
                onChange={e => onChange({ ...datos, estado: e.target.value })}
              >
                <option>Pendiente</option>
                <option>En curso</option>
                <option>Resuelta</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="text-sm font-medium text-gray-700">Gravedad</label>
              <select
                className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                value={datos.gravedad}
                onChange={e => onChange({ ...datos, gravedad: e.target.value })}
              >
                <option>Baja</option>
                <option>Media</option>
                <option>Alta</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-8">
          <button
            onClick={onCerrar}
            className="px-5 py-2 rounded-xl border border-gray-300 text-sm text-gray-600 hover:bg-gray-50 transition"
          >
            Cancelar
          </button>
          <button
            onClick={onGuardar}
            className="px-5 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold transition"
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  )
}

function Reportes() {
  const [reportes, setReportes]       = useState(DATOS_INICIALES)
  const [modalAbierto, setModal]      = useState(false)
  const [modoEditar, setModoEditar]   = useState(false)
  const [formulario, setFormulario]   = useState(VACIO)
  const [editandoId, setEditandoId]   = useState(null)
  const [menuAbierto, setMenuAbierto] = useState(null)
  const [filtroEstado, setFiltroEstado]     = useState('Todos los estados')
  const [filtroGravedad, setFiltroGravedad] = useState('Todas las gravidades')
  const [filtroAgente, setFiltroAgente]     = useState('Todos los agentes')

  const ahora = () => {
    const d = new Date()
    return `${d.toLocaleDateString('es-ES')} ${d.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}`
  }

  const abrirNuevo = () => {
    setFormulario(VACIO)
    setModoEditar(false)
    setModal(true)
  }

  const abrirEditar = (r) => {
    setFormulario({ alumno: r.alumno, incidencia: r.incidencia, agente: r.agente, estado: r.estado, gravedad: r.gravedad })
    setEditandoId(r.id)
    setModoEditar(true)
    setModal(true)
    setMenuAbierto(null)
  }

  const guardar = () => {
    if (!formulario.alumno || !formulario.incidencia || !formulario.agente) return
    if (modoEditar) {
      setReportes(prev => prev.map(r => r.id === editandoId ? { ...r, ...formulario } : r))
    } else {
      const iniciales = formulario.alumno.split(' ').map(p => p[0]).join('').slice(0, 2).toUpperCase()
      const colores = ['bg-purple-400', 'bg-pink-400', 'bg-blue-400', 'bg-green-400', 'bg-yellow-400', 'bg-red-400']
      const color = colores[Math.floor(Math.random() * colores.length)]
      setReportes(prev => [...prev, { id: Date.now(), fecha: ahora(), iniciales, color, ...formulario }])
    }
    setModal(false)
  }

  const eliminar = (id) => {
    setReportes(prev => prev.filter(r => r.id !== id))
    setMenuAbierto(null)
  }

  const filtrados = reportes.filter(r => {
    const okEstado   = filtroEstado   === 'Todos los estados'     || r.estado   === filtroEstado
    const okGravedad = filtroGravedad === 'Todas las gravidades'  || r.gravedad === filtroGravedad
    const okAgente   = filtroAgente   === 'Todos los agentes'     || r.agente   === filtroAgente
    return okEstado && okGravedad && okAgente
  })

  return (
    <div className="p-8 flex flex-col gap-6 flex-1">

      {/* Cabecera */}
      <div className="flex items-center gap-3">
        <span className="text-orange-500 text-3xl">📊</span>
        <div>
          <h1 className="text-3xl font-black text-gray-900">Reportes</h1>
          <p className="text-gray-400 text-sm">Registro de llamadas e incidencias</p>
        </div>
      </div>

      {/* Filtros */}
      <div className="flex items-center gap-3 flex-wrap">
        <select
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
          value={filtroAgente}
          onChange={e => setFiltroAgente(e.target.value)}
        >
          <option>Todos los agentes</option>
          {AGENTES.map(a => <option key={a}>{a}</option>)}
        </select>

        <select
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
          value={filtroEstado}
          onChange={e => setFiltroEstado(e.target.value)}
        >
          <option>Todos los estados</option>
          <option>Pendiente</option>
          <option>En curso</option>
          <option>Resuelta</option>
        </select>

        <select
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
          value={filtroGravedad}
          onChange={e => setFiltroGravedad(e.target.value)}
        >
          <option>Todas las gravidades</option>
          <option>Alta</option>
          <option>Media</option>
          <option>Baja</option>
        </select>

        <div className="ml-auto flex gap-3">
          <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition">
            ⬇️ Exportar
          </button>
          <button
            onClick={abrirNuevo}
            className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition"
          >
            + Nuevo reporte
          </button>
        </div>
      </div>

      {/* Tabla */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-orange-500 text-white">
              <th className="px-5 py-4 text-left font-semibold">Fecha y hora</th>
              <th className="px-5 py-4 text-left font-semibold">Alumno</th>
              <th className="px-5 py-4 text-left font-semibold">Incidencia</th>
              <th className="px-5 py-4 text-left font-semibold">Agente</th>
              <th className="px-5 py-4 text-left font-semibold">Estado</th>
              <th className="px-5 py-4 text-left font-semibold">Gravedad</th>
              <th className="px-5 py-4 text-left font-semibold">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filtrados.map((r, i) => (
              <tr key={r.id} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-5 py-4 text-gray-500">{r.fecha}</td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold ${r.color}`}>
                      {r.iniciales}
                    </div>
                    <span className="font-medium text-gray-800">{r.alumno}</span>
                  </div>
                </td>
                <td className="px-5 py-4 text-gray-600">{r.incidencia}</td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold text-gray-600">
                      {r.agente.charAt(0)}
                    </div>
                    <span className="text-gray-700">{r.agente}</span>
                  </div>
                </td>
                <td className="px-5 py-4"><BadgeEstado estado={r.estado} /></td>
                <td className="px-5 py-4"><BadgeGravedad gravedad={r.gravedad} /></td>
                <td className="px-5 py-4 relative">
                  <button
                    onClick={() => setMenuAbierto(menuAbierto === r.id ? null : r.id)}
                    className="text-gray-400 hover:text-gray-600 text-xl px-2"
                  >
                    ⋮
                  </button>
                  {menuAbierto === r.id && (
                    <div className="absolute right-8 top-8 bg-white border border-gray-200 rounded-xl shadow-lg z-10 overflow-hidden">
                      <button
                        onClick={() => abrirEditar(r)}
                        className="flex items-center gap-2 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 w-full text-left"
                      >
                        ✏️ Editar
                      </button>
                      <button
                        onClick={() => eliminar(r.id)}
                        className="flex items-center gap-2 px-4 py-3 text-sm text-red-500 hover:bg-red-50 w-full text-left"
                      >
                        🗑️ Eliminar
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="px-5 py-4 border-t text-sm text-gray-400">
          Mostrando {filtrados.length} de {reportes.length} registros
        </div>
      </div>

      {modalAbierto && (
        <Modal
          titulo={modoEditar ? 'Editar incidencia' : 'Nueva incidencia'}
          datos={formulario}
          onChange={setFormulario}
          onGuardar={guardar}
          onCerrar={() => setModal(false)}
        />
      )}
    </div>
  )
}

export default Reportes