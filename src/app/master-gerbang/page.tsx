import PageContent from "@/components/layout/PageContent";
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrashCan, faEye, faCaretDown, faMagnifyingGlass, faSquarePlus } from '@fortawesome/free-solid-svg-icons'

const MasterGerbangPage = () => {
    return (
        <>
            <PageContent>
                <div className="pl-4 pt-5 text-4xl">
                    Master Gerbang
                </div>
                <div className="content px-4 mt-10">
                    <div className="card bg-base-100 shadow-sm">
                        <div className="card-body">
                            <div className="flex justify-between">
                                <label className="input">
                                    <FaIcon icon={faMagnifyingGlass} />
                                    <input type="search" placeholder="Search" className="grow" />
                                </label>
                                <button className="btn btn-primary"><FaIcon icon={faSquarePlus} /> Tambah</button>
                            </div>

                            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                                <table className="table">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th>No.</th>
                                            <th>Ruas</th>
                                            <th>Gerbang</th>
                                            <th>Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* row 1 */}
                                        <tr>
                                            <th>1</th>
                                            <td>Cy Ganderton</td>
                                            <td>Quality Control Specialist</td>
                                            <td>
                                                <div className="join">
                                                    <button className="btn btn-ghost join-item"><FaIcon icon={faPen} /></button>
                                                    <button className="btn btn-ghost join-item"><FaIcon icon={faEye} /></button>
                                                    <button className="btn btn-ghost join-item"><FaIcon icon={faTrashCan} /></button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                            <div className="flex justify-end">
                                <div className="dropdown dropdown-start">
                                    <div tabIndex={0} role="button" className="btn mx-1">Show : 5 entries <FaIcon icon={faCaretDown} /></div>
                                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                        <li><a>5 entries</a></li>
                                        <li><a>10 entries</a></li>
                                        <li><a>25 entries</a></li>
                                        <li><a>50 entries</a></li>
                                    </ul>
                                </div>
                                <div className="join">
                                    <button className="join-item btn">«</button>
                                    <button className="join-item btn">1</button>
                                    <button className="join-item btn">2</button>
                                    <button className="join-item btn">3</button>
                                    <button className="join-item btn">»</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </PageContent>
        </>
    );
}

export default MasterGerbangPage;