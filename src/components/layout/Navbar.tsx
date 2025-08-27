import Image from "next/image";
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="lg:hidden">
                    <label htmlFor="my-drawer" aria-label="open sidebar" className="btn btn-square btn-ghost">
                        <FaIcon icon={faBars} className="fa-xl" />
                    </label>
                </div>
                <Image
                    alt="Profile Picture"
                    src="/images/Logo_Jasamarga_Related_Business.png"
                    width={100}
                    height={100}
                    className="lg:hidden"
                />
            </div>
            <div className="navbar-end">
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
                        <li><a>Account</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;