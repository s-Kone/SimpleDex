import React, { useState, useEffect } from "react";
import axios from 'axios'

export function PokemonDisplay() {
    const [pokemon, setPokemon] = useState(null);
    const baseURL = "https://pokeapi.co/api/v2/pokemon/ditto";

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPokemon(response.data);
        });
    }, []);

    if (!pokemon) return null;

    return (
        <div>
            <Sprite pokemon={pokemon} />
            <p>{pokemon.name}</p>
            <Types pokemon={pokemon} />
            <Stats pokemon={pokemon} />

        </div>
    );
}
const Sprite = ({ pokemon }) => {
    return (
        <img src={pokemon.sprites.other.home.front_default}
            alt={pokemon.name} />
    )
}
const Types = ({ pokemon }) => {
    return (
        <div id="types">


            {pokemon.types.map((data, key) => {
                return (
                    <div key={key}> {data.type.name} </div>
                )
            })}
        </div>
    )
}

const Stats = ({ pokemon }) => {
    return (
        <div id="stats">
            {pokemon.stats.map((data, key) => {
                return (
                    <div key={key}>
                        {data.stat.name} : {data.base_stat}
                    </div>
                )
            })}
        </div>
    )
}


export const PokedexEntry = () => {

    const url = `https://pokeapi.co/api/v2/pokemon/ditto`
    const [pokemon, setPokemon] = useState([])
    const [loading, setLoading] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)

            try {
                const { pokemon: response } = await axios.get(url)
                setPokemon(response)
            }
            catch (error) {
                console.error(error.message)
            }
            setLoading(false)
        }
        fetchData()
    }, [])
    return (
        < div className="PokedexEntry" >
            {loading && <div>Loading</div>}
            {!loading && (
                <div>
                    {pokemon.map(item => (<span>{item.name}</span>))}
                </ div>
            )}
        </div >
    )
}