import { Location } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import React, {Component} from "react";
export default class VeiwStudent  extends Component
{   state = {
        loading: true,
        search : ''
    }
   async componentDidMount(){
        let id = document.location.href.replace('http://localhost:3000/search/', '');
        const res = await axios.get(`http://localhost/laravelReactCrud/laravelApi/public/api/search/${id}`);
            if (res.data.status == 200) {
                this.setState({
                    loading: false,
                    search : res.data.searched,
                });
            }else {
                this.setState({
                    loading: false,
                    search : res.data.searched,
                });
            }
    }
    deleteStudent = async (e, id, name) => {
        const thisClickedFunda = e.currentTarget;
        thisClickedFunda.innerText = 'Deleting..'
        const res = await axios.get(`http://localhost/laravelReactCrud/laravelApi/public/api/delete-student/${id}`)
        if (res.data.status == 200) {
            thisClickedFunda.closest('tr').remove();
            Swal.fire({
                icon:'success',
                text:`${name} Deleted Successfully `,
            });
            document.location = '/';
        }
    }
    render(){
        
        return(
            <div className="container-fluid col-lg-8 col-md-10 col-sm-12 card">
                <div className="row">
                {this.state.loading && this.state.search.length > 20 ? <div><div className="d-flex">Please Wait <div className="spinner-grow ms-4"></div></div>
              
                </div>
                :
                    <table className="table table-striped">
                    <thead></thead>
                    {!this.state.search.name ?<tbody><tr>
                    <td><div className='text-danger fs-3'>{this.state.search}</div></td>
                    <td><div className='btn btn-success'><Link to={'/'}>Go Back</Link></div></td>
                    </tr></tbody>:
                    <tbody className="ms-3">
                    <tr><td colSpan={7} className="fs-3 text-center text-info">{this.state.search.name} Details</td></tr>
                    <tr><td className="text-success fs-5">Id <span className='fa fa-key'></span>:</td><td className="fs-5" colSpan='2'>{this.state.search.id}</td></tr>
                    <tr><td className="text-success fs-5">Name <span className='fa fa-user'></span>:</td><td className="fs-5" colSpan='2'>{this.state.search.name}</td></tr>
                    <tr><td className="text-success fs-5">Course <span className='fa fa-book'></span>:</td><td className="fs-5" colSpan='2'>{this.state.search.course}</td></tr>
                    <tr><td className="text-success fs-5">Email<span className='fa fa-envelope'></span>:</td><td className="fs-5" colSpan='2'>{this.state.search.email}</td></tr>
                    <tr><td className="text-success fs-5">Phone <span className='fa fa-phone'></span>:</td><td className="fs-5" colSpan='2'>{this.state.search.phone}</td></tr>
                    <tr>
                        <td colSpan='1'><button type='button' onClick={(e) => this.deleteStudent(e, this.state.search.id, this.state.search.name)}className='btn btn-danger'><span className='fa fa-trash'></span>Delete</button></td>
                        <td colSpan='1'><Link to={`/`} className='btn btn-success'><span className='fa fa-home'></span>Back Home</Link></td>
                        <td colSpan='1'><Link to={`../../edit-student/${this.state.search.id}`} className='btn btn-primary'><span className='fa fa-edit'></span>Edit</Link></td>
                    </tr>
                    </tbody>
                    }
                </table>
                }
                </div>
            </div>
        )
    }
}