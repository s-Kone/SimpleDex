import styles from './stats.module.css'

const Stats = ({ pokemon }) => {
    return (
        <ul className={styles.list}>
            {pokemon.stats.map((data, key) => {
                return (
                    <li key={key} className={styles.stat}>
                        {data.stat.name} : {data.base_stat}
                        <progress value={data.base_stat} max="255"></progress>
                    </li>
                )
            })}
        </ul>
    )
}

export default Stats;