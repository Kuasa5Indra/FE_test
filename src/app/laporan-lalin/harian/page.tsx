'use client';

import useSWR from 'swr';
import { fetcher } from '@/lib/fetcher';
import { LaluLintasPaginated } from '@/types/lalu-lintas';
import PageContent from "@/components/layout/PageContent";
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faMagnifyingGlass, faFileExport } from '@fortawesome/free-solid-svg-icons'

const LaporanLalinHarianPage = () => {
    const { data } = useSWR<LaluLintasPaginated>(`/lalins`, fetcher);
    return (
        <>
            <PageContent>
                <div className="pl-4 pt-5 text-4xl">
                    Laporan Lalin per Hari
                </div>
                <div className="content px-4 mt-10">
                    <div className="card bg-base-100 shadow-sm">
                        <div className="card-body">
                            <div className="flex justify-start card-actions">
                                <label className="input w-50">
                                    <FaIcon icon={faMagnifyingGlass} />
                                    <input type="search" placeholder="Search" className="grow" />
                                </label>
                                <input type="date" className="input w-50" />
                            </div>
                            <div className="flex justify-start card-actions">
                                <button className="btn btn-primary">Filter</button>
                                <button className="btn btn-error">Reset</button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-sm mt-5">
                        <div className="card-body">
                            <div className="flex justify-between">
                                <div className="join join-vertical lg:join-horizontal">
                                    <button className="btn btn-info join-item">Total Tunai</button>
                                    <button className="btn btn-info join-item">Total E-toll</button>
                                    <button className="btn btn-info join-item">Total Flo</button>
                                    <button className="btn btn-info join-item">Total KTP</button>
                                    <button className="btn btn-info join-item">Total Keseluruhan</button>
                                    <button className="btn btn-info join-item">Total E-toll+Tunai+Flo</button>
                                </div>
                                <button className="btn btn-primary"><FaIcon icon={faFileExport} /> Export</button>
                            </div>

                            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                                <table className="table">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th>No.</th>
                                            <th>Ruas</th>
                                            <th>Gerbang</th>
                                            <th>Gardu</th>
                                            <th>Hari</th>
                                            <th>Tanggal</th>
                                            <th>Metode Pembayaran</th>
                                            <th>Gol I</th>
                                            <th>Gol II</th>
                                            <th>Gol III</th>
                                            <th>Gol IV</th>
                                            <th>Gol V</th>
                                            <th>Total Lalin</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* row 1 */}
                                        <tr>
                                            <th>1</th>
                                            <td>Ruas 1</td>
                                            <td>Gerbang 1</td>
                                            <td>01</td>
                                            <td>Kamis</td>
                                            <td>30-05-2024</td>
                                            <td>Tunai</td>
                                            <td>567</td>
                                            <td>234</td>
                                            <td>12</td>
                                            <td>10</td>
                                            <td>8</td>
                                            <td>831</td>
                                        </tr>
                                        <tr className="bg-base-200">
                                            <th colSpan={7} className="text-center">Total Lalin Ruas 1</th>
                                            <td>567</td>
                                            <td>234</td>
                                            <td>12</td>
                                            <td>10</td>
                                            <td>8</td>
                                            <td>831</td>
                                        </tr>
                                        <tr className="bg-base-200">
                                            <th colSpan={7} className="text-center">Total Lalin Ruas 2</th>
                                            <td>567</td>
                                            <td>234</td>
                                            <td>12</td>
                                            <td>10</td>
                                            <td>8</td>
                                            <td>831</td>
                                        </tr>
                                        <tr className="bg-base-300">
                                            <th colSpan={7} className="text-center">Total Lalin Keseluruhan</th>
                                            <td>567</td>
                                            <td>234</td>
                                            <td>12</td>
                                            <td>10</td>
                                            <td>8</td>
                                            <td>831</td>
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

export default LaporanLalinHarianPage;