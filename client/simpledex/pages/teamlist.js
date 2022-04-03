import Head from 'next/head'
import Link from 'next/link'
import { TeamList } from '../components/teamlist/teamlist'
export default function teamlist() {
    return (
        <>
            <Link href="/teambuilder">
                <a>New Team</a>
            </Link>
            <TeamList />
        </>
    )
}