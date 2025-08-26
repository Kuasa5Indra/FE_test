import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Breadcrumb, BreadcrumbItem } from "@/components/ui/Breadcrumbs";

const PageContent = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content relative h-screen">
                {/* Page content here */}
                {/* <label htmlFor="my-drawer" className="btn btn-primary">Open drawer</label> */}
                <Navbar />
                <div className="pl-4 pt-5 text-4xl">
                    Starter
                </div>
                <Breadcrumb>
                    <BreadcrumbItem label="Home" active={true} />
                    <BreadcrumbItem label="Home" />
                    <BreadcrumbItem label="Home" />
                </Breadcrumb>
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
                <Footer />
            </div>
            <Sidebar />
        </div>
    );
}

export default PageContent;