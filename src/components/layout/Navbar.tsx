import Image from "next/image";
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome'
import { faBell, faBars, faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
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
    );
}

export default Navbar;