import styles from '../../styles/search.module.css'

const Sprite = ({ pokemon, style }) => {
    var spritestyle
    switch (style) {
        case('teambuilder'): {
            spritestyle = styles.teambuilder
            break
        }
        case('search'): {
            spritestyle = styles.search
            break
        }
        default: {
            spritestyle = styles.default
        }
    }
    if (style == 'teambuilder')
        spritestyle = styles.teambuilder

    return (
        <img className={spritestyle}  src={pokemon.sprites.other.home.front_default}
            alt={pokemon.name} />
    )
}
export default Sprite
