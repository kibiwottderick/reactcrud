import React from 'react'
import { Link } from 'react-router-dom'
import Button from './button'
export const Pageheader = ({destroyAllAction, deleteAction, searchAction}) => {
  return (
 <div className='page-header '>
<h3 className='text-center m-0 text-dark'>Students Crud</h3>
    <div className='w-100'>
    <div className=''>
            <Button content="Delete all" icon="fa fa-trash" event={destroyAllAction} elementWidth="150px"/>
            <Button content="Delete" icon='fa fa-trash' event={ deleteAction } elementWidth="100px"/>
            <Link to = { 'add-student' } className = "btn btn-success float-end btn-sm  m-2 my-0" > Add student </Link> 
            <input onChange = { searchAction } className="form-control w-25 m-4" type='text' placeholder="Search Student"/>
    </div>
    </div>
 </div>
  )
}
