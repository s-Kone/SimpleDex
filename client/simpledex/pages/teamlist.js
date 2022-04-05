import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layouts/layout'

import { TeamList } from '../components/teamlist/teamlist'
export default function teamlist() {
    return (
        <>
            <Layout>
                <Link href="/teambuilder">
                    <a>New Team</a>
                </Link>
                <TeamList />
            </Layout>
        </>
    )
}