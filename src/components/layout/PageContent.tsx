import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import React, { ReactNode } from 'react';

interface PageContentProps {
    children?: ReactNode;
}

const PageContent: React.FC<PageContentProps> = ({ children }) => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content relative h-screen">
                {/* Page content here */}
                {/* <label htmlFor="my-drawer" className="btn btn-primary">Open drawer</label> */}
                <Navbar />
                { children }
                {/* <Footer /> */}
            </div>
            <Sidebar />
        </div>
    );
}

export default PageContent;