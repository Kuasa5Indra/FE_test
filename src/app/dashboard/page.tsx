"use client"
import PageContent from "@/components/layout/PageContent";
// import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome'
// import { faThumbsUp, faBell, faBars, faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);
// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

export const dataBar = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
        {
            label: 'Sales',
            data: [120, 150, 180, 90, 200],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
        },
    ],
};

const DashboardPage = () => {
    return (
        <>
            <PageContent>
                <div className="pl-4 pt-5 text-4xl">
                    Dashboard
                </div>
                <div className="content px-4">
                    <div className="flex justify-start card-actions my-3">
                        <input type="date" className="input w-50" />
                        <button className="btn btn-primary">Filter</button>
                    </div>
                    {/* <Doughnut data={data} width={100}
                        height={50} /> */}
                    <div className="flex justify-between">
                        <div className="card bg-base-100 w-96 shadow-sm">
                            <div className="card-body">
                                <Bar data={dataBar} />
                            </div>
                        </div>
                        <div className="card bg-base-100 w-96 shadow-sm">
                            <div className="card-body">
                                <Doughnut data={data} />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between my-3">
                        <div className="card bg-base-100 w-96 shadow-sm">
                            <div className="card-body">
                                <Bar data={dataBar} />
                            </div>
                        </div>
                        <div className="card bg-base-100 w-96 shadow-sm">
                            <div className="card-body">
                                <Doughnut data={data} />
                            </div>
                        </div>
                    </div>
                </div>
            </PageContent>
        </>
    );
}

export default DashboardPage;