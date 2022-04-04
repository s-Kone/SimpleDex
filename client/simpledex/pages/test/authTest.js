import Link from 'next/link'
import Head from 'next/head'
import axios from 'axios'
import '../../util/token'
import { getAuthHeaders } from '../../util/token';

const APIDomain = "https://alexgiasson.me"; // for debug, replace with http://localhost:8084
const APIRootPath = "/comp4537/termproject/api/v1";
const resource = "/searchPokemon/name?name=charizard";
const unauthResource = "/searchPokemon/unauth?name=charizard";

export default function CookieTest() {
    const searchPokemon = async (event) => {
        event.preventDefault() // don't redirect the page
        
        let config = getAuthHeaders();
        axios.get(APIDomain + APIRootPath + resource, config)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const searchPokemonUnauth = async (event) => {
        event.preventDefault() // don't redirect the page
        
        axios.get(APIDomain + APIRootPath + unauthResource)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })     
    }

    return ( 
        <>
            <Head>
                <title>SimpleDex CookieTest</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1>CookieTest</h1>
                 
                 <button onClick={searchPokemon}>SearchAuth</button>
                 <button onClick={searchPokemonUnauth}>SearchUnAuth</button>

                <Link href="/">
                    <a>Back to Home</a>
                </Link>
            </main>

        </>


    )
}
