import styles from '../../styles/search.module.css'

const Types = ({ pokemon }) => {
    return (
        <div id="types">
            {pokemon.types.map((data, key) => {
                return (
                    <div key={key} className={styles.type}> {data.type.name} </div>
                )
            })}
        </div>
    )
}

export default Types;