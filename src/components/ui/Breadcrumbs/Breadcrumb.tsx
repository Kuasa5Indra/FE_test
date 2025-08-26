import React, { ReactElement } from "react";
import BreadcrumbItem from "./BreadcrumbItem";

interface BreadcrumbProps {
  children: ReactElement<typeof BreadcrumbItem>[] | ReactElement<typeof BreadcrumbItem>;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ children }) => {
    return (
        <div className="breadcrumbs text-sm pl-4">
            <ul>
                { children }
            </ul>
        </div>
    );
}

export default Breadcrumb;