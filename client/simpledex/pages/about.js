import Head from 'next/head'
import Layout from '../components/layouts/layout';
import styles from '../styles/about.module.css'

export default function about() {
    return(  
    <>
    <Layout>
            <div className={styles.container} >

                <h2 style={{padding: '20px'}}>About Simpledex</h2>
                <p className={styles.content}> 
                    Simpledex can be used by anyone interested in pokemon to 
                    learning about the stats and abilities of their 
                    favourite pokemon via the search feature.
                    We offer a team builder feature that allows users to
                    customize teams of 5 pokemon at a time and save it to 
                    view later.</p>
                
                <h2 style={{padding: '20px'}}>About team O2</h2>
                <div>
                    <p>Alexander Giasson</p>
                    <p>Aidan Waterson</p>
                    <p>Connie Wu</p>
                    <p>Saga Munkhbold</p>
                </div>
            </div>
    </Layout>
    </>  
    )
}