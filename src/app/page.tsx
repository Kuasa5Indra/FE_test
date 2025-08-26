"use client"
import { useState } from 'react';
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-2xl font-bold text-center mb-4">Karirku</h2>

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
                                {/* <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="input input-bordered w-full"
                                /> */}
                                <div className="relative">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="••••••••"
                                        className="input input-bordered w-full pr-12"
                                    />
                                    <label className="swap absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-500">
                                        <input type="checkbox" onClick={() => setShowPassword(!showPassword)} />
                                        <div className="swap-on"><FaIcon icon={faEye}/></div>
                                        <div className="swap-off"><FaIcon icon={faEyeSlash}/></div>
                                    </label>
                                </div>
                            </div>

                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <input type="checkbox" className="checkbox" />
                                    <span className="label-text ml-2">Remember me</span>
                                </label>
                            </div>

                            <button className="btn btn-primary btn-block">Login</button>
                            <button className="btn bg-black text-white border-black">
                                <FaIcon icon={faGithub} />
                                Login with GitHub
                            </button>
                            <div className="divider">Dont have account</div>
                            <button className="btn btn-outline btn-secondary btn-block">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginPage;