import Head from 'next/head'
import Layout from '../components/layouts/layout';

export default function about() {
    return(  
    <>
    <Layout>
            <div style={{margin:"2%"}} >
                <h2>About Page</h2>
                <h4>About Simpledex</h4>
                <p style={{width:"60%"}}> 
                    Simpledex can be used by anyone interested in pokemon to 
                    learning about the stats and abilities of their 
                    favourite pokemon via the search feature.
                    We offer a team builder feature that allows users to
                    customize teams of 5 pokemon at a time and save it to 
                    view later.</p>
                <h4>About team O2</h4>
                <ul style={{ listStyleType: "none" }}>
                    <li>Alexander Giasson</li>
                    <li>Aidan Waterson</li>
                    <li>Connie Wu</li>
                    <li>Saga Munkhbold</li>
                </ul>
            </div>
    </Layout>
    </>  
    )
}