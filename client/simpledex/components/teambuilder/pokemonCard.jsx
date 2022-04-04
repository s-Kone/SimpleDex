import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Types from '../pokemon/types'
import Sprite from '../pokemon/sprite'
import Stats from '../pokemon/stats'
import styles from './teambuilder.module.css'

export const PokemonCard = ({ pokemon_name, jsondata }) => {
    const [data, setData] = useState(null)
    const [loaded, setLoaded] = useState(false)
    const [formState, updateForm] = useState({
        name: "",
        gender: "",
        level: "",
        item: "",
        ability: "",
        move1: "",
        move2: "",
        move3: "",
        move4: "",
        types: [],
        sprite: "",
        stats: []
    })
    const handleChange = e => {
        const { name, value } = e.target

        updateForm(prevState => ({
            ...prevState, [name]: value
        }))
    }

    const handleSubmit = () => {
        updateForm(prevState => ({
            ...prevState,
        }))
        console.log(formState)
    }
    useEffect(() => {
        const getPokemonData = async () => {
            const request = `https://alexgiasson.me/comp4537/termproject/api/v1/searchPokemon/name?name=${pokemon_name}`
            const token = localStorage.getItem('jwt');
            axios.get(request, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then((response) => {
                setData(response.data)
                setLoaded(true)
            }).catch((e) => {
                console.log(e)
            })
        }
        getPokemonData()
    }, [])
    return (

        <div>
            <button onClick={handleSubmit}></button>
            {data &&
                <>
                    <h1>{data.name}</h1>
                    <div>
                        <h3>level</h3>
                        <input type="text" name="level" onChange={handleChange} value={formState.level} />
                    </div>
                    <div>
                        <h3>gender</h3>
                        <input type="text" name="gender" onChange={handleChange} value={formState.gender} />
                    </div>
                    <div>
                        <h3>Item</h3>
                        <input type="text" name="item" onChange={handleChange} value={formState.item} />
                    </div>
                    <div>
                        <h3>Ability</h3>
                        <input type="text" name="ability" onChange={handleChange} value={formState.ability} />
                    </div>
                    <h2>Moves</h2>
                    <div className={styles.moves}>
                        <ul>
                            <li> <input className={styles.move} type="text" name="move1" onChange={handleChange} value={formState.move1} /></li>
                            <li> <input className={styles.move} type="text" name="move2" onChange={handleChange} value={formState.move2} /></li>
                            <li> <input className={styles.move} type="text" name="move3" onChange={handleChange} value={formState.move3} /></li>
                            <li> <input className={styles.move} type="text" name="move4" onChange={handleChange} value={formState.move4} /></li>
                        </ul>
                    </div>
                    <Types pokemon={data} />
                    <Sprite pokemon={data} />
                    <Stats pokemon={data} />

                </>
            }
        </div>
    )
}
