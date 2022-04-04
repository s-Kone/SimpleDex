import Head from 'next/head'
import { PokemonDisplay } from '../components/search/pokemon_display'
export default function search() {
    return (
        <>
        {/* <Nav /> */}
        <head>
            <title>SimplDex search</title>
            <link rel='icon' href="/favicon.ico"/>
        </head>
    
        <PokemonDisplay />
        {/* <Footer/> */}
        </>
    )
}
