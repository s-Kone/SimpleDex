import React, { useState, useEffect } from "react";
import axios from "axios";
import { Team } from "./team";
import { getAuthHeaders } from "../../util/token";

export function TeamList() {
    const [data, setData] = useState(null)
    const [loaded, setLoaded] = useState(false)


    useEffect(() => {
        const fetchTeams = async () => {
            const request = `https://alexgiasson.me/comp4537/termproject/api/v2/teams`
            axios.get(request, getAuthHeaders()
            ).then((response) => {
                setData(response.data)
                setLoaded(true)
                // console.log(response.data)
            }).catch((err) => {
                console.log(err)
            })
        }
        fetchTeams()
    }, [])

    return (
        <>
            {loaded ?
                <div >{data.map((data, key) => {
                    return (
                        <Team key={key} data={data} />
                    )
                })}
                </div> :
                <div>test</div>}
        </>
    )
}