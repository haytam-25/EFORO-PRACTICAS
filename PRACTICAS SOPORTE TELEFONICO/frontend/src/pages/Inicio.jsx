import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Reportes from './Reportes'
import Equipo from './Equipo'
import CalendarioSemanal from './CalendarioSemanal'

const TURNOS = [
  '09:00 - 10:00',
  '10:00 - 11:00',
  '11:00 - 12:00',
  '12:00 - 13:00',
  '13:00 - 14:00',
  '14:00 - 15:00',
  '15:00 - 16:00',
  '16:00 - 17:00',
  '17:00 - 18:00',
]

const DIAS = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes']

const DATOS_TURNOS = {
  'Lunes':      ['María López', 'Carlos Ramírez', 'Ana Torres', 'Lucía Fernández', 'Jorge Silva', 'María López', 'Carlos Ramírez', 'Ana Torres', 'Lucía Fernández'],
  'Martes':     ['Carlos Ramírez', 'Ana Torres', 'Jorge Silva', 'María López', 'Lucía Fernández', 'Carlos Ramírez', 'Ana Torres', 'Jorge Silva', 'María López'],
  'Miércoles':  ['Ana Torres', 'Jorge Silva', 'Lucía Fernández', 'Carlos Ramírez', 'María López', 'Ana Torres', 'Jorge Silva', 'Lucía Fernández', 'Carlos Ramírez'],
  'Jueves':     ['Jorge Silva', 'Lucía Fernández', 'María López', 'Ana Torres', 'Carlos Ramírez', 'Jorge Silva', 'Lucía Fernández', 'María López', 'Ana Torres'],
  'Viernes':    ['María López', 'Carlos Ramírez', 'Ana Torres', 'Jorge Silva', 'Lucía Fernández', 'María López', 'Carlos Ramírez', 'Ana Torres', 'Jorge Silva'],
}

function PaginaInicio() {
  return (
    <div className="p-8 flex flex-col gap-6">

      {/* Cabecera */}
      <div className="flex gap-8 items-start">
        <div className="flex-1">
          <h1 className="text-4xl font-black text-gray-900">Soporte Telefónico</h1>
          <p className="text-orange-500 font-semibold mt-1 text-lg">Organización semanal de turnos</p>
          <p className="text-gray-500 mt-2 text-sm max-w-md">
            Consulta quién estará en turno cada día y hora para asegurar la mejor atención a nuestras personas usuarias.
          </p>
          <div className="mt-4 bg-gray-50 border rounded-xl p-4 flex items-center gap-3 w-64">
            <div className="bg-green-100 rounded-full p-2">
              <span className="text-green-600">🕐</span>
            </div>
            <div>
              <p className="text-xs text-gray-500">Horario de Atención</p>
              <p className="text-orange-500 font-bold">Lun - Vie</p>
              <p className="text-xs text-gray-500">09:00 - 18:00</p>
            </div>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=500&q=80"
          alt="Equipo de soporte"
          className="w-80 rounded-2xl object-cover h-48"
        />
      </div>

      {/* Tabla de turnos */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2">
            <span className="text-orange-500">📅</span>
            <h2 className="font-bold text-gray-800 text-lg">Organización Semanal de Turnos</h2>
          </div>
          <p className="text-xs text-gray-400">ⓘ Los turnos pueden estar sujetos a cambios.</p>
        </div>
        <p className="text-xs text-gray-400 mb-4 ml-6">Lunes a Viernes de 9:00 a 18:00</p>

        <table className="w-full text-sm">
          <thead>
            <tr>
              <th className="bg-orange-500 text-white px-4 py-3 rounded-tl-lg text-left">Horario</th>
              {DIAS.map((dia, i) => (
                <th
                  key={dia}
                  className={`bg-orange-500 text-white px-4 py-3 text-left ${i === DIAS.length - 1 ? 'rounded-tr-lg' : ''}`}
                >
                  {dia}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TURNOS.map((turno, i) => (
              <tr key={turno} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-4 py-3 text-gray-600 font-medium">{turno}</td>
                {DIAS.map((dia) => (
                  <td key={dia} className="px-4 py-3 text-gray-700">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center text-xs text-orange-600 font-bold">
                        {DATOS_TURNOS[dia][i].charAt(0)}
                      </div>
                      {DATOS_TURNOS[dia][i]}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-end mt-4">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-xl text-sm font-medium transition flex items-center gap-2">
            📅 Ver calendario mensual
          </button>
        </div>
      </div>

    </div>
  )
}

function Inicio({ usuario, onLogout }) {
  const [pagina, setPagina] = useState('Inicio')

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar paginaActual={pagina} setPagina={setPagina} />

      <div className="flex-1 flex flex-col">

        {/* Topbar */}
        <div className="bg-white border-b px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-gray-400 text-xl cursor-pointer">☰</span>
            <span className="text-gray-700 font-medium">Bienvenido, {usuario.nombre} 👋</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-400 text-xl">🔔</span>
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                {usuario.nombre.charAt(0)}
              </div>
              <button
                onClick={onLogout}
                className="text-sm text-gray-500 hover:text-red-500 transition"
              >
                Cerrar sesión
              </button>
            </div>
          </div>
        </div>

        {/* Contenido según página activa */}
        <div className="flex-1">
          {pagina === 'Inicio'    && <PaginaInicio />}
          {pagina === 'Reportes'  && <Reportes />}
          {pagina === 'Calendario Semanal' && <CalendarioSemanal />}
          {pagina === 'Equipo' && <Equipo />}
          {pagina === 'Configuración' && (
            <div className="p-8 text-gray-400">Configuración — próximamente</div>
          )}
        </div>

      </div>
    </div>
  )
}

export default Inicio