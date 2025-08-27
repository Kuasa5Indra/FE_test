import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faBridgeWater, faTrafficLight } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image';
import Link from 'next/link';

const Sidebar = () => {
    return (
        <div className="drawer-side">
            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                {/* Sidebar content here */}
                <div className='flex items-center justify-center pt-1 pb-2 hidden lg:inline-block'>
                    <Image
                        alt="Profile Picture"
                        src="/images/Logo_Jasamarga_Related_Business.png"
                        width={100}
                        height={100}
                    />
                </div>

                <li><Link href="/dashboard"><FaIcon icon={faChartLine} className="fa-fw" />Dashboard</Link></li>
                <li>
                    <details open>
                        <summary><FaIcon icon={faTrafficLight} className="fa-fw" />Laporan Lalin</summary>
                        <ul>
                            <li><Link href="/laporan-lalin/harian">Laporan Per Hari</Link></li>
                        </ul>
                    </details>
                </li>
                <li><Link href="/master-gerbang"><FaIcon icon={faBridgeWater} className="fa-fw" />Master Gerbang</Link></li>
            </ul>
        </div>
    );
}

export default Sidebar;