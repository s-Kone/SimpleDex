import React, { useState } from 'react'
export const AutoComplete = (props) => {

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
            <ul className={styles.list}>
                {suggestions.map((suggestion, index) => {
                    return (
                        <li
                            id="item"
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
        <div className={styles.box}>
            <h3>Search for your pokemon</h3>
            <input
                type="text"
                value={value}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                className={styles.input}
            />
            {suggestionsActive && <Suggestions />}
        </div>
    );

};
