import React, { useState, useEffect } from "react";
import axios from 'axios'
import styles from './pokemon_display.module.css'
import { pokemon_lookups } from '../../lookups/pokemon_lookup'
import { AutoComplete } from "../util/autocomplete";
import Stats from "../pokemon/stats";
import Types from "../pokemon/types";
import Abilities from "../pokemon/ability"

import Sprite from "../pokemon/sprite"
export function PokemonDisplay() {
    const [pokemon, setPokemon] = useState(null)
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState("")
    const handleClick = async () => {

        await axios.get(`https://alexgiasson.me/comp4537/termproject/api/v1/searchPokemon/name?name=${name}`).then((response) => {
            setPokemon(response.data)
            setLoading(true)
        })
    }

    return (
        <div >
            <AutoComplete data={pokemon_lookups} name={setName} />
            <div className={styles.box}>
                <button onClick={handleClick} className={styles.button}>Search</button>
            </div>
            {loading ? <div className={styles.container}>
                <Sprite pokemon={pokemon} />
                <p>{pokemon.name}</p>
                <h3><u>Types</u></h3>
                <Types pokemon={pokemon} />
                <h3><u>Abilities</u></h3>
                <Abilities pokemon={pokemon} />
                <br></br>
                <div className={styles.box}>
                <Stats pokemon={pokemon}/>
                </div>
            </div> : <div></div>}
        </div>

    );
}
