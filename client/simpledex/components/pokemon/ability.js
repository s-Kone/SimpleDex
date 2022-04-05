
const Abilities = ({ pokemon }) => {

    return (
        <ul className={styles.box}>
            {pokemon.abilities.map((data, key) => {
                return (
                    <li key={key} className={styles.type}> {data.ability.name} </li>
                )
            })}
        </ul>
    )
}

export default Abilities;