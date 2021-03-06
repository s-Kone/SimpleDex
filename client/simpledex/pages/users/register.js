import Link from 'next/link'
import Head from 'next/head'
import axios from 'axios'
import { useRouter } from 'next/router';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './background.module.css'

const APIDomain = "https://alexgiasson.me"; // for debug, replace with http://localhost:8084
const APIRootPath = "/comp4537/termproject/api/v2";
const resource = "/users/register";

let goSearch = (router) => {
    router.push('/search')
}

export default function Register() {
    const router = useRouter();

    const registerUser = async (event) => {
        event.preventDefault(); // next js forms auto-redirect, cancel that.

        if (event.target.password.value != event.target.confirmPassword.value) {
            toast("Passwords must match")
            return;
        }

        let user = {
            name: event.target.username.value,
            email: event.target.email.value,
            password: event.target.password.value
        }

        axios.post(APIDomain + APIRootPath + resource, user)
            .then((res) => {
                localStorage.setItem('jwt', res.data.accessToken);
                toast("Registration succeeded!");
                setTimeout(goSearch(router), 100)
            })
            .catch((err) => {
                console.log(err);
                toast("Password: length 8 and at least 1 number. Email must be valid-looking");
            })
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>SimpleDex Register</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>

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
                    <button><Link href="/">
                        <a>Back to Home</a>
                    </Link></button>

                    <ToastContainer position={"top-center"} />
                </form>


            </main>
            <style jsx>{`
                .container{
                    background-image: url('../../public/background.png');
                }
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
                    height: 60%;
                    width: 30%;
                    font-weight: 500;
                    background-color: rgba(169, 231, 255, 0.90);
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
                    margin-top: 10px;
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
                    margin-top: 5px;
                    font-size: 16px;
                    font-weight: 500;
                }`

            }</style>
        </div>

    )
}
