import React from "react";
import { Link } from "react-router-dom";
import Requesthtml from './Reqesthtml'
const Searched = ({ data, event }) => {
    return(
        data.map((item) => {
            return(
                <tr key={ item.id }>
                <td><Requesthtml request={item.id}/></td> 
                <td><Requesthtml request={item.name}/></td> 
                <td><Requesthtml request={item.course}/></td> 
                <td><Requesthtml request={item.email}/></td> 
                <td><Requesthtml request={item.phone}/></td> 
                <td>
                    <Link to = { `edit-student/${item.id}` } className = 'btn btn-sm btn-primary' ><span className = 'fa fa-edit' ></span>Edit</Link>
                </td>
                <td>
                    <Link to = { `search/${item.id}` } className = 'btn btn-sm btn-warning' ><span className = 'fa fa-eye' ></span>View</Link>
                </td> 
                <td>
                    <input type = 'checkbox' id='checked' onClick={ event } value={ item.id } />
                </td> 
                </tr>
            )
    })
    )
    
}
export default Searched;




