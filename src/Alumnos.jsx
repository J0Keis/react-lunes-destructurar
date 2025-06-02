
function Alumnos(props) {
    const { nombre, apellido, carrera } = props.datos;
    return (
        <div>
            <h2> Informacion del Alumno</h2>
            <p>Nombre: {nombre}</p>
            <p>Apellido: {apellido}</p>
            <p>Carrera: {carrera}</p>
        </div>
    )
}
export default Alumnos;