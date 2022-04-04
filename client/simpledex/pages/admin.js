import Link from 'next/link'
import Head from 'next/head'
import axios from 'axios'
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react'
import { getAuthHeaders } from '../util/token';

const APIDomain = "htts://alexgiasson.me"; // for debug, replace with http://localhost:8084
const APIRootPath = "/comp4537/termproject/api/v1";
const resource = "/admin";

export default function AdminStats() {
    var initialList = []
    const [list, setData] = useState(initialList)
    const [loaded, setLoaded] = useState(false)

    const request = APIDomain + APIRootPath + resource

    useEffect(() => {
        const fetchStats = async () => {
            const token = localStorage.getItem('jwt');
            console.log(token)
            axios.get(request, getAuthHeaders()
            ).then((response) => {
                console.log(response.data)
                const newList = list.concat(response.data)
                setData(newList)
                setLoaded(true)
                console.log(newList)
            }).catch((e) => {
                console.log(e)
            })
        }
        fetchStats()


    }, [])


    return (
        <>
            <Head>
                <title>SimpleDex Admin Stats</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1>Admin Stats</h1>
                <div>
                    
                    <table>
                        <th>EndpointDesc</th><th>Count</th><th>Method</th><th>EndpointPath</th>
                        {list.map( (i) => (
                        <tr>   
                            <td>{i.endpointdesc}</td>
                            <td>{i.count}</td>
                            <td>{i.method}</td>
                            <td>{i.endpointpath} </td>
                        </tr>
                        ))}
                    </table>
                        
                    
                </div>

                <Link href="/">
                    <a>Back to Home</a>
                </Link>
            </main>

            
        </>


    )
}
