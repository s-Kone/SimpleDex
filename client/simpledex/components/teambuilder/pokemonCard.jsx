import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Types from '../pokemon/types'
import Sprite from '../pokemon/sprite'
import Stats from '../pokemon/stats'
import styles from './teambuilder.module.css'
import { AutoComplete } from '../util/autocomplete'
import { pokemon_lookups } from '../../lookups/pokemon_lookup'
export const PokemonCard = ({ data, onChange, index }) => {
    const [name, setName] = useState("")
    const [res, setRes] = useState(null)
    const handleSubmitName = async () => {
        console.log(name)
        const request = `https://alexgiasson.me/comp4537/termproject/api/v1/searchPokemon/name?name=${name}`
        const token = localStorage.getItem('jwt');
        await axios.get(request, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((response) => {
            setRes(response.data)
            data.name = name
            data.types = response.data.types.map(x => x.type.name)
            data.stats = response.data.stats
            data.stats = response.data.stats.map(x => ({ [x.stat.name]: x.base_stat }))
            console.log(data)
        }).catch((e) => {
            console.log(e)
        })

    }
    return (
        <div>
            <button onClick={handleSubmitName}>Submit</button>
            <AutoComplete data={pokemon_lookups} name={setName} />
            <input type="text" name="gender" value={data.gender} onChange={e => onChange(e, index)} />
            <input type="text" name="ability" value={data.ability} onChange={e => onChange(e, index)} />
            <input type="text" name="move1" value={data.move1} onChange={e => onChange(e, index)} />
            <input type="text" name="move2" value={data.move2} onChange={e => onChange(e, index)} />
            <input type="text" name="move3" value={data.move3} onChange={e => onChange(e, index)} />
            <input type="text" name="move4" value={data.move4} onChange={e => onChange(e, index)} />
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