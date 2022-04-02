import Link from 'next/link'
import Head from 'next/head'

export default function Register() {
    const registerUser = event => {
        event.preventDefault() // don't redirect the page

        // TODO: post to SimpleDex API /register endpoint
    }

    return ( 
        <>
            <Head>
                <title>SimpleDex Register</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1>Register</h1>
                    <form onSubmit={registerUser}>
                    <label htmlFor="Email">Email</label>
                    <input type="text" placeholder="Email" id="email" required />

                    <label htmlFor="Username">Username</label>
                    <input type="text" placeholder="Username" id="username" required />

                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Password" id="password" required />

                    <label htmlFor="password">Confirm Password</label>
                    <input type="password" placeholder="Password" id="confirmPassword" required />

                    <button type="submit">Register</button>

                </form>

                <Link href="/">
                    <a>Back to Home</a>
                </Link>
            </main>

            <style jsx>{`
                form *{
                    font-family: 'Poppins',sans-serif;
                    outline: none;
                    border: none;
                    letter-spacing: 0.5px;
                }
                
                form h3{
                    font-size: 32px;
                    font-weight: 500;
                    line-height: 30px;
                    text-align: center;
                }
                
                form {
                    height: 450px;
                    width: 400px;
                    font-weight: 500;
                    background-color: rgba(169, 231, 255, 0.13);
                    position: absolute;
                    transform: translate(-50%,-50%);
                    top: 50%;
                    left: 50%;
                    border-radius: 10px;
                    backdrop-filter: blur(10px);
                    border: 2px solid rgba(255,255,255,0.1);
                    box-shadow: 0 0 40px rgba(8,7,16,0.6);
                    padding: 50px 35px;
                }
                
                button {
                    margin-top: 25px;
                    width: 100%;
                    background-color: #FFC1A8;
                    color: #080710;
                    padding: 15px 0;
                    font-size: 18px;
                    font-weight: 500;
                    border-radius: 5px;
                    cursor: pointer;
                }
                
                input{
                    display: block;
                    height: 50px;
                    width: 100%;
                    background-color: #D4F3FF;
                    border-radius: 3px;
                    padding: 0 10px;
                    margin-top: 8px;
                    font-size: 14px;
                    font-weight: 300;
                }
                
                label{
                    display: block;
                    margin-top: 20px;
                    font-size: 16px;
                    font-weight: 500;
                }
            `}</style>
        </>


    )
}
