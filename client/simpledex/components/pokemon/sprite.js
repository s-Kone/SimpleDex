import styles from '../../styles/search.module.css'

const Sprite = ({ pokemon }) => {
    return (
        <img className={styles.spirte} src={pokemon.sprites.other.home.front_default}
            alt={pokemon.name} />
    )
}
export default Sprite