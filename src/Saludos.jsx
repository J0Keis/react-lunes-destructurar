function Saludos(props) {
    return (
        <div>
            <h1>Hola, {props.nombre} {props.apellido}!</h1>
        </div>
    );
}
export default Saludos;