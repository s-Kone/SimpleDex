import React, { useState, useEffect } from "react";
import { PokemonCard } from "./pokemonCard";
import styles from './teambuilder.module.css'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAuthHeaders } from "../../util/token";
import { APIDomain, APIRootPath, teamRoute, PokemonTemplate } from "../../common/defs";
export const TeamItems = () => {



    const init_state = []
    useEffect(() => {
        const res = []
        if (res = JSON.parse(localStorage.getItem('team')))
            init_state = res
    })

    const [team, updateTeam] = useState(init_state)
    const addPokemon = () => {
        updateTeam(team => [...team, PokemonTemplate])
        console.log(team)
    }
    const handleInputChange = (e, index) => {
        const { name, value } = e.target
        const list = [...team]
        list[index][name] = value
        updateTeam(list)
        console.log(list)
    }
    const handleRemoveClick = index => {
        const list = [...team]
        list.splice(index, 1)
        updateTeam(list)
    }
    const saveTeam = () => {
        const body = { pokemon: team }
        axios.post(APIDomain + APIRootPath + teamRoute, body, getAuthHeaders())
            .then((res) => {
                toast("Saved!");
                console.log(body)
            })
            .catch((err) => {
                console.log(err);
                toast("Save Failed");
            })
    }
    return (
        <div>
            {team.map((item, i) => (
                <div key={i}><PokemonCard data={item} onChange={handleInputChange} index={i} />
                    <button onClick={handleRemoveClick}>Delete</button></div>
            ))}
            <button onClick={addPokemon}>Add a pokemon</button>
            <button onClick={saveTeam}>Save Team</button>
            <ToastContainer position={"top-center"} />
        </div>

    )
}