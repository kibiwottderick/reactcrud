import { Link } from "react-router-dom";
import React from "react";
const TableHead = ({ request }) => {
    return(
  <>
  
    <h3 className='text-center m-0 text-dark'>Students Crud</h3>
    <div className='mb-2 w-100'>
        <div className = 'btn btn-sm btn-danger col-2 float-end ms-2' onClick = { this.destroyAll } > Delete all &nbsp; < span className = 'fa fa-trash' > </span></div>
        <div className = 'btn btn-sm btn-danger col-2 float-end'  onClick = { this.delete } >
        Delete &nbsp; 
        < span className = 'fa fa-trash' ></span>
        </div>
        <Link to = { 'add-student' } className = "btn btn-success btn-sm float-end m-2 my-0" > Add student </Link> 
        <div className='awesome-form-control'>
            <input onChange = { this.searchStudent } id="search" type='text'  value ={ this.state.searched } placeholder="Search Student"/>
        </div>
    </div>
  </>

    )
}
export default TableHead;






