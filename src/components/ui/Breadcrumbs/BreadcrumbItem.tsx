import React from 'react';

interface BreadcrumbItemProps {
  label: string,
  active: boolean
}

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({ label, active }) => {
    return ( 
        <li>{active ? <a>{label}</a> : label}</li>
    );
}
 
export default BreadcrumbItem;