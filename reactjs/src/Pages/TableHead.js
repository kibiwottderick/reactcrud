
import React from "react";
const TableHead = ({ request }) => {
    return(
        <thead className='sticky-top table-bordered bg-dark text-light'>
    <tr >
        <th><span className = 'fa fa-key' ></span></th>
        <th><span className = 'fa fa-user' ></span></th>
        <th><span className = 'fa fa-book' ></span></th>
        <th><span className = 'fa fa-envelope' ></span></th>
        <th><span className = 'fa fa-phone' ></span></th>
        <th><span className = 'fa fa-edit' ></span></th>
        <th><span className = 'fa fa-unlock'></span></th>
        <th><span className = 'fa fa-check-square' > </span></th>
    </tr> 
    </thead>

    )
}
export default TableHead;