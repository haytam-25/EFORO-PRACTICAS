import { useState } from 'react'

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

const AGENTES = [
  { nombre: 'María López',     foto: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { nombre: 'Carlos Ramírez',  foto: 'https://randomuser.me/api/portraits/men/32.jpg'   },
  { nombre: 'Ana Torres',      foto: 'https://randomuser.me/api/portraits/women/68.jpg' },
  { nombre: 'Lucía Fernández', foto: 'https://randomuser.me/api/portraits/women/90.jpg' },
  { nombre: 'Jorge Silva',     foto: 'https://randomuser.me/api/portraits/men/75.jpg'   },
]

// Rotación de agentes por turno y día
const ROTACION = [
  [0, 1, 2, 3, 4, 0, 1, 2, 3], // Lunes
  [1, 2, 3, 0, 4, 1, 2, 3, 0], // Martes
  [2, 3, 4, 1, 0, 2, 3, 4, 1], // Miércoles
  [3, 4, 0, 2, 1, 3, 4, 0, 2], // Jueves
  [0, 1, 2, 3, 4, 0, 1, 2, 3], // Viernes
]

// Genera las semanas laborales
function getSemana(offset = 0) {
  const hoy = new Date()
  const diaSemana = hoy.getDay() // 0=dom, 1=lun...
  const diffLunes = diaSemana === 0 ? -6 : 1 - diaSemana
  const lunes = new Date(hoy)
  lunes.setDate(hoy.getDate() + diffLunes + offset * 7)

  return Array.from({ length: 5 }, (_, i) => {
    const d = new Date(lunes)
    d.setDate(lunes.getDate() + i)
    return d
  })
}

function formatFecha(fecha) {
  return fecha.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit' })
}

function formatRango(dias) {
  const inicio = dias[0].toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })
  const fin    = dias[4].toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })
  return `${inicio.replace(' de ', ' - ').split(' - ')[0]} - ${fin}`
}

const NOMBRES_DIAS = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes']

function CalendarioSemanal() {
  const [offsetSemana, setOffsetSemana] = useState(0)
  const dias = getSemana(offsetSemana)
  const hoy  = new Date()

  const esHoy = (fecha) =>
    fecha.toDateString() === hoy.toDateString()

  return (
    <div className="p-8 flex flex-col gap-6 flex-1">

      {/* Cabecera */}
      <div className="flex items-center gap-3">
        <span className="text-orange-500 text-3xl">📅</span>
        <div>
          <h1 className="text-3xl font-black text-gray-900">Calendario Semanal</h1>
          <p className="text-gray-400 text-sm">Vista semanal de la organización de turnos</p>
        </div>
      </div>

      {/* Navegación de semana */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setOffsetSemana(o => o - 1)}
            className="w-9 h-9 border border-gray-300 rounded-lg flex items-center justify-center text-gray-500 hover:bg-gray-50 transition"
          >
            ‹
          </button>
          <div className="border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-700 font-medium min-w-52 text-center">
            {formatRango(dias)}
          </div>
          <button
            onClick={() => setOffsetSemana(o => o + 1)}
            className="w-9 h-9 border border-gray-300 rounded-lg flex items-center justify-center text-gray-500 hover:bg-gray-50 transition"
          >
            ›
          </button>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition">
            🖨️ Imprimir
          </button>
          <button
            onClick={() => setOffsetSemana(0)}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition"
          >
            Hoy
          </button>
        </div>
      </div>

      {/* Tabla */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-orange-500 text-white">
              <th className="px-5 py-4 text-left font-semibold w-36">Horario</th>
              {dias.map((dia, i) => (
                <th key={i} className={`px-5 py-4 text-left font-semibold ${esHoy(dia) ? 'bg-orange-600' : ''}`}>
                  <span className="block">{NOMBRES_DIAS[i]}</span>
                  <span className="text-orange-200 font-normal text-xs">{formatFecha(dia)}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TURNOS.map((turno, ti) => (
              <tr key={turno} className={ti % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-5 py-3 text-gray-500 font-medium text-xs">{turno}</td>
                {dias.map((dia, di) => {
                  const agente = AGENTES[ROTACION[di][ti]]
                  const esPasado = dia < hoy && !esHoy(dia)
                  
                  const getEstado = (dia, turnoIndex) => {
                    const ahora = new Date()

                    // Extraemos hora de inicio y fin del turno
                    // TURNOS[turnoIndex] es algo como "09:00 - 10:00"
                    const [horaInicio, horaFin] = TURNOS[turnoIndex].split(' - ')
                    const [hIni, mIni] = horaInicio.split(':').map(Number)
                    const [hFin, mFin] = horaFin.split(':').map(Number)

                    const inicioCelda = new Date(dia)
                    inicioCelda.setHours(hIni, mIni, 0, 0)

                    const finCelda = new Date(dia)
                    finCelda.setHours(hFin, mFin, 0, 0)

                    if (ahora >= inicioCelda && ahora < finCelda) return 'en-turno'
                    if (ahora >= finCelda) return 'terminado'
                    return 'pendiente'
                    }  

                  return (
                    <td key={di} className="px-4 py-3">
                        <div className="flex items-center gap-2">
                        <img
                            src={agente.foto}
                            alt={agente.nombre}
                            className={`w-8 h-8 rounded-full object-cover border-2 ${getEstado(dia, ti) === 'en-turno' ? 'border-orange-300' : 'border-gray-200'}`}
                        />
                        <div>
                            <p className={`text-xs font-medium ${getEstado(dia, ti) === 'terminado' ? 'text-gray-400' : 'text-gray-700'}`}>
                            {agente.nombre}
                            </p>
                            <div className="flex items-center gap-1">
                            {getEstado(dia, ti) === 'en-turno' && <>
                                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                <span className="text-xs text-green-500 font-semibold">En turno</span>
                            </>}
                            {getEstado(dia, ti) === 'pendiente' && <>
                                <span className="w-2 h-2 rounded-full bg-gray-300"></span>
                                <span className="text-xs text-gray-400">Pendiente</span>
                            </>}
                            {getEstado(dia, ti) === 'terminado' && <>
                                <span className="w-2 h-2 rounded-full bg-gray-200"></span>
                                <span className="text-xs text-gray-300">Turno terminado</span>
                            </>}
                            </div>
                        </div>
                        </div>
                    </td>
                   )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Leyenda */}
      <div className="flex justify-end items-center gap-6 text-sm text-gray-500">
        <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
            En turno
        </div>
        <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-gray-300"></span>
            Pendiente
        </div>
        <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-gray-200"></span>
            Turno terminado
        </div>
        </div>

    </div>
  )
}

export default CalendarioSemanal