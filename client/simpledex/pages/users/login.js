import Link from 'next/link'
import Head from 'next/head'
import axios from 'axios'
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const APIDomain = "https://alexgiasson.me"; // for debug, replace with http://localhost:8084
const APIRootPath = "/comp4537/termproject/api/v1";
const resource = "/users/login";

export default function Login() {
    const router = useRouter();


    const loginUser = async (event) => {
        event.preventDefault() // don't redirect the page

        var user = {
            email: event.target.email.value,
            password: event.target.password.value
        }

        await axios.post(APIDomain + APIRootPath + resource, user)
            .then((res) => {
                localStorage.setItem('jwt', res.data.accessToken);
                toast("Login succeeded");
                router.push('/search')
            })
            .catch((err) => {
                toast("Login failed");
                console.log(err);
            })
    }

    return (
        <>
            <Head>
                <title>SimpleDex Login</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1>Login</h1>
                <form onSubmit={loginUser}>
                    <label htmlFor="Email">Email</label>
                    <input name='email' type="text" placeholder="Email" id="email" required />

                    <label htmlFor="password">Password</label>
                    <input name='password' type="password" placeholder="Password" id="password" required />

                    <button type="submit">Login</button>
                    <ToastContainer position="top-center" />
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
                }`
            }</style>
        </>


    )
}
