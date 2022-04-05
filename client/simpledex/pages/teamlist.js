import Head from 'next/head'
import Link from 'next/link'
import { Nav } from '../components/Nav'

import { TeamList } from '../components/teamlist/teamlist'
export default function teamlist() {
    return (
        <>
            <Nav/>
            <Link href="/teambuilder">
                <a>New Team</a>
            </Link>
            <TeamList />
        </>
    )
}