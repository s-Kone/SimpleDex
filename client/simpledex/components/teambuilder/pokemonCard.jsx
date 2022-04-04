import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Types from '../pokemon/types'
import Sprite from '../pokemon/sprite'
import Stats from '../pokemon/stats'
import styles from './teambuilder.module.css'
export const PokemonCard = ({ pokemon_name, jsondata }) => {
    const [data, setData] = useState(null)
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        const getPokemonData = async () => {
            const request = `https://alexgiasson.me/comp4537/termproject/api/v1/searchPokemon/name?name=${pokemon_name}`
            const token = localStorage.getItem('jwt');
            await axios.get(request, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then((response) => {
                setData(response.data)
                setLoaded(true)
            })
        }
        getPokemonData()
    }, [])
    return (
        <div>
            {data &&
                <>
                    <h1>{data.name}</h1>
                    <div>
                        <h3>level</h3>
                        <input type="text" name="level" />
                    </div>
                    <div>
                        <h3>gender</h3>
                        <input type="text" name="gender" />
                    </div>
                    <div>
                        <h3>Item</h3>
                        <input type="text" name="Item" />
                    </div>
                    <div>
                        <h3>Ability</h3>
                        <input type="text" name="Ability" />
                    </div>
                    <h2>Moves</h2>
                    <div className={styles.moves}>
                        <ul>
                            <li> <input classname={styles.move} type="text" name="move1" /></li>
                            <li> <input classname={styles.move} type="text" name="move2" /></li>
                            <li> <input classname={styles.move} type="text" name="move3" /></li>
                            <li> <input classname={styles.move} type="text" name="move4" /></li>
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