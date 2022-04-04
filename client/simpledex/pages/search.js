import Head from 'next/head'
import { PokemonDisplay } from '../components/search/pokemon_display'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
export default function search() {

    return (
        <>
        <Nav/>
        <PokemonDisplay />
        {/* <Footer/> */}
        </>
    )
}
