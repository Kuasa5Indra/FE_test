/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faBell, faBars, faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

const Template = () => {
    return (
        <>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content relative h-screen">
                    {/* Page content here */}
                    {/* <label htmlFor="my-drawer" className="btn btn-primary">Open drawer</label> */}
                    <div className="navbar bg-base-100 shadow-sm">
                        <div className="navbar-start">
                            <div className="lg:hidden">
                                <label htmlFor="my-drawer" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                    <FaIcon icon={faBars} className="fa-xl" />
                                </label>
                            </div>
                            <a className="btn btn-ghost text-xl drawer-button lg:hidden">KarirKu</a>
                        </div>
                        <div className="navbar-end">
                            <label className="swap swap-rotate">
                                    {/* this hidden checkbox controls the state */}
                                    <input type="checkbox" className="theme-controller" value="karirku-dark" />

                                    {/* sun icon */}
                                    <FaIcon icon={faSun} className="fa-xl swap-off" />

                                    {/* moon icon */}
                                    <FaIcon icon={faMoon} className="fa-xl swap-on" />
                                </label>
                            <button className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <FaIcon icon={faBell} className="fa-xl" />
                                    <span className="badge badge-xs badge-primary indicator-item">1</span>
                                </div>
                            </button>
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <Image
                                            alt="Profile Picture"
                                            src="/images/anon-profile.jpg"
                                            width={100}
                                            height={100} />
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                    <li>
                                        <a className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                    <li><a>Settings</a></li>
                                    <li><a>Logout</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="pl-4 pt-5 text-4xl">
                        Starter
                    </div>
                    <div className="breadcrumbs text-sm pl-4">
                        <ul>
                            <li><a>Home</a></li>
                            <li><a>Documents</a></li>
                            <li>Starter</li>
                        </ul>
                    </div>
                    <div className="content px-4">
                        <div className="card lg:card-side bg-base-100 shadow-sm">
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                                    alt="Album" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">New album is released!</h2>
                                <p>Click the button to listen on Spotiwhy app.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Listen</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4 absolute bottom-0">
                        <aside>
                            <p>Copyright © {new Date().getFullYear()} - KarirKu </p>
                        </aside>
                    </footer>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                        {/* Sidebar content here */}
                        <a className="btn btn-ghost text-xl hidden lg:inline-block pt-1">KarirKu</a>
                        <li className="menu-title">Title</li>
                        <li><a><FaIcon icon={faThumbsUp} className="fa-fw" />Sidebar Item 1</a></li>
                        <li><a><FaIcon icon={faThumbsUp} className="fa-fw" />Sidebar Item 2</a></li>
                        <li>
                            <details open>
                                <summary><FaIcon icon={faThumbsUp} className="fa-fw" />Parent</summary>
                                <ul>
                                    <li><a><FaIcon icon={faThumbsUp} className="fa-fw" />Submenu 1</a></li>
                                    <li><a><FaIcon icon={faThumbsUp} className="fa-fw" />Submenu 2</a></li>
                                    <li>
                                        <details open>
                                            <summary><FaIcon icon={faThumbsUp} className="fa-fw" />Parent</summary>
                                            <ul>
                                                <li><a><FaIcon icon={faThumbsUp} className="fa-fw" />Submenu 1</a></li>
                                                <li><a><FaIcon icon={faThumbsUp} className="fa-fw" />Submenu 2</a></li>
                                            </ul>
                                        </details>
                                    </li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    );
}

export default Template;