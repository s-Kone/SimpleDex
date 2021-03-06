import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Types from '../pokemon/types'
import Sprite from '../pokemon/sprite'
import Stats from '../pokemon/stats'
import styles from './teambuilder.module.css'
import { AutoComplete } from '../util/autocomplete'
import { pokemon_lookups } from '../../lookups/pokemon_lookup'
import { APIDomain, APIRootPath, SearchPokemonRoute } from '../../common/defs'
export const PokemonCard = ({ data, onChange, index }) => {

    const [name, setName] = useState("")
    const [res, setRes] = useState(null)
    useEffect(() => {
        if (data)
            updatePokemon()
    }, [])
    const updatePokemon = () => {
        const token = localStorage.getItem('jwt');
        axios.get(APIDomain + APIRootPath + SearchPokemonRoute + data.name, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((response) => {
            setRes(response.data)
            console.log("server response", res)
        }).catch((e) => {
            console.log(e)
        })
    }
    const handleSubmitName = async () => {
        // console.log(name)
        console.log("updating pokemon")
        const token = localStorage.getItem('jwt');
        axios.get(APIDomain + APIRootPath + SearchPokemonRoute + name, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((response) => {
            setRes(response.data)
            data.name = name
            data.types = response.data.types.map(x => x.type.name)
            data.stats = response.data.stats
            data.stats = response.data.stats.map(x => ({ [x.stat.name]: x.base_stat }))
            // data.spirte = response.data.sprite
            console.log(data)
        }).catch((e) => {
            console.log(e)
        })

    }

    return (
        <div>
            <button onClick={handleSubmitName} className={styles.button}>Save Pokemon</button>
            <AutoComplete data={pokemon_lookups} name={setName} />
            <input type="text" name="gender" placeholder="gender" value={data.gender} onChange={e => onChange(e, index)} />
            <input type="text" name="ability" placeholder="ability" value={data.ability} onChange={e => onChange(e, index)} />
            <input type="text" name="move1" placeholder="move 1" value={data.move1} onChange={e => onChange(e, index)} />
            <input type="text" name="move2" placeholder="move 2" value={data.move2} onChange={e => onChange(e, index)} />
            <input type="text" name="move3" placeholder="move 3" value={data.move3} onChange={e => onChange(e, index)} />
            <input type="text" name="move4" placeholder="move 4 " value={data.move4} onChange={e => onChange(e, index)} />
            {res &&
                <>
                    <Stats pokemon={res} />
                    <Types pokemon={res} />
                    <Sprite pokemon={res} />
                </>
            }

        </div>
    )
}
