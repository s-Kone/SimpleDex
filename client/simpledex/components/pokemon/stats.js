import styles from '../../styles/search.module.css'

const Stats = ({ pokemon }) => {
    return (
        <div id="stats">
            {pokemon.stats.map((data, key) => {
                return (
                    <div key={key} className={styles.stat}>
                        {data.stat.name} : {data.base_stat}
                    </div>
                )
            })}
        </div>
    )
}

export default Stats;