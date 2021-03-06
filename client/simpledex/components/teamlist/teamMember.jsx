import axios from "axios"
import { useEffect, useState } from "react"
import { getAuthHeaders } from "../../util/token"
import Sprite from '../../components/pokemon/sprite'


export const TeamMember = ({ pokemon }) => {
    const [res, setRes] = useState(null)
    useEffect(() => {
        const getPokemonData = async () => {
            var name = pokemon.name
            name = name.toLowerCase()
            const request = `https://alexgiasson.me/comp4537/termproject/api/v2/searchPokemon/name?name=${name}`

            axios.get(request, getAuthHeaders()
            ).then((response) => {
                setRes(response.data)
            }).catch((e) => {
                console.log(e)
            })
        }
        getPokemonData()
    }, [])

    return (

        <>
            {res &&
                <Sprite pokemon={res} style='teambuilder' />
            }

            <style jsx>{`

        `}</style>
        </>

    )
}
