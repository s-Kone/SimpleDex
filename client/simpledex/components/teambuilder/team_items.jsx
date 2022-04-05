import React, { useState, useEffect } from "react";
import { PokemonCard } from "./pokemonCard";
import { AutoComplete } from "../util/autocomplete";
import { pokemon_lookups } from '../../lookups/pokemon_lookup'
import styles from './teambuilder.module.css'

export const TeamItems = () => {
    //this is a list we are getting from the API
    const initialList = [

    ]
    let jsondata = []
    const [list, setList] = useState(initialList)
    const [name, setName] = useState('')


    const handleAddPokemon = () => {
        const newList = list.concat({ name })
        setList(newList)
    }

    return (
        <div>
            <div>
                <TeamPokemon list={list} />
                <AddPokemon
                    onAdd={handleAddPokemon}
                    setName={setName}
                />
            </div>
        </div>
    )

}
const AddPokemon = ({ onAdd, setName }) => {
    return (
        <div className={styles.addParent}>
            <div className={styles.field}><AutoComplete data={pokemon_lookups} name={setName} /></div>

            <button className={styles.addButton} onClick={onAdd}>add pokemon</button>
        </div>
    )
}
const TeamPokemon = ({ list, jsondata }) => {
    return (
        <ul>
            {list.map((item) => (
                <li key={item.id}><PokemonCard pokemon_name={item.name} /></li>
            ))}
        </ul>
    )
}