import styles from '../../styles/search.module.css'

const Sprite = ({ pokemon, style }) => {
    const spritestyle = ""
    const spritesrc = ""
    switch (style) {
        case ('teambuilder'): {
            spritestyle = styles.teambuilder
            spritesrc = pokemon.sprites.front_default
            break
        }
        case ('search'): {
            spritestyle = styles.search
            break
        }
        default: {
            spritestyle = styles.default
            spritesrc = pokemon.sprites.other.home.front_default
        }
    }

    return (
        <img className={spritestyle} src={spritesrc}
            alt={pokemon.name} />
    )
}
export default Sprite
