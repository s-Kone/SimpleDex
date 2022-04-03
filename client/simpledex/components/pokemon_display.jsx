import React, { useState, useEffect } from "react";
import axios from 'axios'
import styles from './pokemon_display.module.css'
import { pokemon_lookups } from '../lookups/pokemon_lookup'
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
        <div id="container">
            <AutoComplete data={pokemon_lookups} name={setName} />
            <button onClick={handleClick}></button>
            {loading ? <div className={styles.container}>
                <Sprite pokemon={pokemon} />
                <p>{pokemon.name}</p>
                <Types pokemon={pokemon} />
                <Stats pokemon={pokemon} />
            </div> : <div>not loaded</div>}
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
const AutoComplete = (props) => {

    const [suggestions, setSuggestions] = useState([]);
    const [suggestionIndex, setSuggestionIndex] = useState(0);
    const [suggestionsActive, setSuggestionsActive] = useState(false);
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        const query = e.target.value.toLowerCase();
        setValue(query);
        props.name(query)
        if (query.length > 1) {
            const filterSuggestions = props.data.filter(
                (suggestion) =>
                    suggestion.toLowerCase().indexOf(query) > -1
            );
            setSuggestions(filterSuggestions);
            setSuggestionsActive(true);
        } else {
            setSuggestionsActive(false);
        }
    };

    const handleClick = (e) => {
        setSuggestions([]);
        setValue(e.target.innerText.toLowerCase());
        props.name(e.target.innerText.toLowerCase());
        setSuggestionsActive(false);
    };

    const handleKeyDown = (e) => {
        // UP ARROW
        if (e.keyCode === 38) {
            if (suggestionIndex === 0) {
                return;
            }
            setSuggestionIndex(suggestionIndex - 1);
        }
        // DOWN ARROW
        else if (e.keyCode === 40) {
            if (suggestionIndex - 1 === suggestions.length) {
                return;
            }
            setSuggestionIndex(suggestionIndex + 1);
        }
        // ENTER
        else if (e.keyCode === 13) {
            setValue(suggestions[suggestionIndex]);
            setSuggestionIndex(0);
            setSuggestionsActive(false);
            props.name(suggestions[suggestionIndex].toLowerCase());
        }
    };

    const Suggestions = () => {
        return (
            <ul className="suggestions">
                {suggestions.map((suggestion, index) => {
                    return (
                        <li
                            className={index === suggestionIndex ? "active" : ""}
                            key={index}
                            onClick={handleClick}
                        >
                            {suggestion}
                        </li>
                    );
                })}
            </ul>
        );
    };

    return (
        <div className="autocomplete">
            <input
                type="text"
                value={value}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
            {suggestionsActive && <Suggestions />}
        </div>
    );

};
