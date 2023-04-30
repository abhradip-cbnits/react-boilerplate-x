import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Input} from "antd";
import { useDispatch} from 'react-redux';
import { doLogin } from '../../Redux/Features/user';
import { unwrapResult } from '@reduxjs/toolkit';
import Cookies from 'universal-cookie';
import toast, {Toaster} from 'react-hot-toast';

const cookies = new Cookies();

const LoginModule = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const login = (event) => {
        event.preventDefault();
        const request_payload = {
            "login_username" : email,
            "login_password" : password,
        }
        dispatch(doLogin(request_payload))
        .then((unwrapResult))
        .then((result) => {
            if (result.status === 200){
                cookies.set("jwt", result.headers['auth-token']);
                toast.success('Logged in successfully');
                navigate('/admin/dashboard');
            }
        }).catch((e)=>{
            toast.error('Something went wrong, try again');
        })

    }
    return (
        <>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 items-center">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold body-font font-josefin-sans leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label className="block text-sm font-medium leading-6 text-gray-900 body-font font-josefin-sans">Email address</label>
                            <div className="mt-2">
                                <Input value={email} onChange={(e)=>setEmail(e.target.value)} id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"/>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                            <label className="block text-sm font-medium leading-6 text-gray-900 body-font font-josefin-sans">Password</label>
                            </div>
                            <div className="mt-2">
                                <Input value={password} onChange={(e)=>setPassword(e.target.value)} id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"/>
                            </div>
                        </div>

                        <div>
                            <button onClick={(e)=> login(e)} type="submit" className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 body-font font-josefin-sans">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )

}
export default LoginModule;
