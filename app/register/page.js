"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
const Register = () => {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setUsername] = useState("");
    const [adress, setAdress] = useState("");
    const [unvalid, setUnvalid] = useState("");

    const showError = err => {
        console.log(err);
        const error = " * already Used E-mail";
        setUnvalid(error)
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        setUnvalid("")
        try {
            axios.post('http://127.0.0.1:3001/api/User', {
                name,
                adress,
                email,
                password
            }).then(() => { router.push('/login'); setUnvalid("") }).catch(err => { showError() })


        } catch (error) {
            console.log(error);
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
                                    <h2><em>Register</em> For The Full <span>Experience</span></h2>
                                </div>
                            </div>
                            <br />
                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="email_field">
                                    Name
                                </label>
                                <input
                                    type="username"
                                    id="username_field"
                                    className="form-control"
                                    value={name}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="email_field">
                                    adress
                                </label>
                                <input
                                    type="adress"
                                    id="adress_field"
                                    className="form-control"
                                    value={adress}
                                    onChange={(e) => setAdress(e.target.value)}
                                />
                            </div>
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
                            {unvalid && <span style={{ color: "red" }}> {unvalid}</span>}
                            <br />
                            <button
                                type="submit"
                                className="btn btn-block w-100 btn-primary btn-block mb-4"
                            >
                                Validate
                            </button>
                            <center>
                                You Have an Account ? <Link href="/login">login</Link>


                            </center>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};
export default Register; 