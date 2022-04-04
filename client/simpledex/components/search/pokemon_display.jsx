import React, { useState, useEffect } from "react";
import axios from 'axios'
import styles from './pokemon_display.module.css'
import { pokemon_lookups } from '../../lookups/pokemon_lookup'
import { AutoComplete } from "../util/autocomplete";
import Stats from "../pokemon/stats";
import Types from "../pokemon/types";

export function PokemonDisplay() {
    const [pokemon, setPokemon] = useState(null)
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState("")
    const handleClick = async () => {

        await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((response) => {
            setPokemon(response.data)
            setLoading(true)
        })
    }

    return (
        <div >
            <AutoComplete data={pokemon_lookups} name={setName} />
            <button onClick={handleClick}>delete</button>
            {loading ? <div className={styles.container}>
                <Sprite pokemon={pokemon} />
                <p>{pokemon.name}</p>
                <Types pokemon={pokemon} />
                <Stats pokemon={pokemon} />
            </div> : <div></div>}
        </div>

    );
}
const Sprite = ({ pokemon }) => {
    return (
        <img className={styles.spirte} src={pokemon.sprites.other.home.front_default}
            alt={pokemon.name} />
    )
}
