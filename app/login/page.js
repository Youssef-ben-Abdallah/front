"use client";
import React, { useState } from "react";
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
const Login = () => {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [unvalid, setUnvalid] = useState("");


    const submitHandler = async (e) => {
        e.preventDefault();
        setUnvalid("")
        try {
            const data = await signIn('credentials', {
                redirect: false,
                email,
                password
            })
            setUnvalid("");
            router.push('/order');
        } catch (error) {
            console.log(error)
        }
    };
    return (
        <div className="contact-us section" id="contact">
            <div className="container container-fluid">
                <div className="row mt-5 d-flex justify-content-center">
                    <div className="col-10 col-lg-5 ">

                        <form
                            id="contact-form"

                            onSubmit={submitHandler}
                        >
                            
                            <div class="col-lg-12">
                                <div class="section-heading">
                                    <h2><em>Login</em> For The Full <span>Experience</span></h2>
                                </div>
                                {unvalid?<Label>{unvalid}</Label>:null}   
                            </div>
                            <br />
                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="email_field">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    id="email_field"
                                    className="form-control"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="password_field">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password_field"
                                    className="form-control"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            {unvalid ? <span style={{ color: "red" }}> {unvalid}</span> : null}
                            <br />
                            <button
                                type="submit"
                                className="btn btn-block w-100 btn-primary btn-block mb-4"
                            >
                                Validate
                            </button>
                            <center>
                                Don't have an Account ? <Link href="/register">Register</Link>
                            </center>
                        </form>


                    </div>
                </div>
            </div>
        </div>
    );
};
export default Login; 