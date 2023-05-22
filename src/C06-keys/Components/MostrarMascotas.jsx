
function MostrarMascotas(props) {
    
    const {nombre, edad, color} = props.mascota

    return (
        <>
            <p>{`${nombre} (${edad}): ${color}`}</p>
        </>
    )

}

export default MostrarMascotas