import Link from 'next/link'
import Head from 'next/head'
import axios from 'axios'
import { useRouter } from 'next/router';
import { Nav } from '../components/Nav'
import React, { useState, useEffect } from 'react'

const APIDomain = "http://localhost:8084"; // for debug, replace with http://localhost:8084
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
            axios.get(request, 
                {
                headers: {
                    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJiQGFhLmFhIiwiaWF0IjoxNjQ5MDQ3NDU4fQ.A_PE4RLi0yuRIwzEteKoNK_lpLkbhoWCO-qYsDFv0Go`
                }
            }
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
            <Nav/>
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
