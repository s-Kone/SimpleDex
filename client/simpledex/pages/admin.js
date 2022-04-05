import Link from 'next/link'
import Head from 'next/head'
import axios from 'axios'
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react'
import { getAuthHeaders } from '../util/token';

const APIDomain = "https://alexgiasson.me"; // for debug, replace with http://localhost:8084
const APIRootPath = "/comp4537/termproject/api/v2";
const resource = "/admin";

export default function AdminStats() {
    const router = useRouter()
    var initialList = []
    const [list, setData] = useState(initialList)
    const [loaded, setLoaded] = useState(false)

    const request = APIDomain + APIRootPath + resource

    useEffect(() => {
        const fetchStats = async () => {
            const token = localStorage.getItem('jwt');
            if (!token) {
                router.push('/')
            }
            axios.get(request, getAuthHeaders()
            ).then((response) => {
                const newList = list.concat(response.data)
                setData(newList)
                setLoaded(true)
            }).catch((e) => {
                console.log(e)
                router.push('/')
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
                    
                    <table border='1'>
                        <thead><tr>
                            <th>EndpointDesc</th><th>Count</th><th>Method</th><th>EndpointPath</th>
                        </tr></thead>
                        <tbody>
                        {list.map( (i) => (
                        <tr key = {i.endpointid}>   
                            <td>{i.endpointdesc}</td>
                            <td>{i.count}</td>
                            <td>{i.method}</td>
                            <td>{i.endpointpath} </td>
                        </tr>
                        ))}
                        </tbody>
                    </table>
                        
                    
                </div>

                <Link href="/">
                    <a>Back to Home</a>
                </Link>
            </main>

            <style jsx>{`
                td {
                    padding: 0 15px;
                    padding-bottom: 1em;
                    text-align:left;
                    vertical-align: middle;
                }
  
            `}</style>
        </>


    )
}
