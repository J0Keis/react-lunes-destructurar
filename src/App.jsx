import './App.css'
import Saludos from './Saludos.jsx'
import Alumnos from './Alumnos.jsx'

function App() {
  const alumno = {
    nombre: 'Andres',
    apellido: 'Leon',
    carrera:"Ingenieria en Sistemas",
  }

  return (
    <>
      <Saludos nombre="Mundo" apellido="Perez" />
      <Alumnos datos={alumno} />
    </>
  )
}

export default App
