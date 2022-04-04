import Head from 'next/head'
import { Nav } from '../components/Nav'

import { TeamItems } from '../components/teambuilder/team_items'
export default function teambuilder() {
    return (
        <>
            <Nav/>
            <TeamItems />
        </>
    )
}
