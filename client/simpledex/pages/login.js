import Head from "next/head";


function login(){
    return( 
        <>
            <Head>
                <title>SimpleDex Login</title>
                <link rel="icon" href="./favicon.ico"/>
            </Head>
            <h1>Login page</h1>


            <style jsx global>{`
                html,
                body {
                padding: 0;
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                    sans-serif;
                }

                * {
                box-sizing: border-box;
                }
            `}</style>
        </>
    )
}

export default login;