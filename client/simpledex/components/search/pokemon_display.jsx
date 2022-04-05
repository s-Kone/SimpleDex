import React, { useState, useEffect } from "react";
import axios from 'axios'
import styles from './pokemon_display.module.css'
import { pokemon_lookups } from '../../lookups/pokemon_lookup'
import { AutoComplete } from "../util/autocomplete";
import Stats from "../pokemon/stats";
import Types from "../pokemon/types";
import { APIDomain, APIRootPath, SearchPokemonRoute } from "../../common/defs";
import Sprite from "../pokemon/sprite"
import { getAuthHeaders } from '../../util/token'
export function PokemonDisplay() {
    const [pokemon, setPokemon] = useState(null)
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState("")
    const handleClick = async () => {


        axios.get(APIDomain + APIRootPath + SearchPokemonRoute + name, getAuthHeaders()).
        then((response) => {
            setPokemon(response.data)
            setLoading(true)
        }).catch((e) => {
            console.log(e)
        })
    }

    return (
        <div >
            <AutoComplete data={pokemon_lookups} name={setName} />
            <button onClick={handleClick}>Show me that Pokemon!</button>
            {loading ? <div className={styles.container}>
                <Sprite pokemon={pokemon} />
                <p>{pokemon.name}</p>
                <Types pokemon={pokemon} />
                <Stats pokemon={pokemon} />
            </div> : <div></div>}
        </div>

    );
}
