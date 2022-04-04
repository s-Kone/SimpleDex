
const Types = ({ pokemon }) => {

    return (
        <div>
            {pokemon.types.map((data, key) => {
                return (
                    <div key={key} id={data.type.name}> {data.type.name} </div>
                )
            })}
        </div>
    )
}

export default Types;