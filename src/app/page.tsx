"use client"
import { useState } from 'react';
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image';

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <div className='min-h-screen flex flex-col md:flex-row'>
                <div className='w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-10'>
                    <div className="flex items-center justify-center min-h-screen">
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                {/* <h2 className="text-2xl font-bold text-center mb-4">Karirku</h2> */}
                                <div className='flex items-center justify-center'>
                                    <Image
                                        alt="Profile Picture"
                                        src="/images/Logo_Jasamarga_Related_Business.png"
                                        width={100}
                                        height={100}
                                    />
                                </div>

                                <form className="flex flex-col gap-4">
                                    <div>
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="email@example.com"
                                            className="input input-bordered w-full"
                                        />
                                    </div>

                                    <div>
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>

                                        <div className="relative">
                                            <input
                                                type={showPassword ? 'text' : 'password'}
                                                placeholder="••••••••"
                                                className="input input-bordered w-full pr-12"
                                            />
                                            <label className="swap absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-500">
                                                <input type="checkbox" onClick={() => setShowPassword(!showPassword)} />
                                                <div className="swap-on"><FaIcon icon={faEye} /></div>
                                                <div className="swap-off"><FaIcon icon={faEyeSlash} /></div>
                                            </label>
                                        </div>
                                    </div>

                                    <button className="btn btn-primary btn-block">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden md:flex w-1/2 bg-white items-center justify-center">
                    <figure>
                        <Image
                            alt="Profile Picture"
                            src="/images/highway-toll-plaza-vector-13224001.jpg"
                            width={896}
                            height={896} />
                    </figure>
                </div>
            </div>
        </>
    );
}

export default LoginPage;