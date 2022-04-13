import axios from 'axios';
import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import { Location } from 'react-router-dom';
import Swal from 'sweetalert2';
class Editstudent extends Component
{
    state = {
        name:'',
        course:'',
        email:'',
        phone:''
    }
    handleInput = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    async componentDidMount() {
        const stud_id = document.location.href.replace('http://localhost:3000/edit-student/', '');
        const res = await axios.get(`http://localhost/laravelReactCrud/laravelApi/public/api/edit-student/${stud_id}`)
        if (res.data.status == 200) {
            // console.log(res);

            this.setState({
                id:res.data.student.id,
                name: res.data.student.name,
                course:res.data.student.course,
                email:res.data.student.email,
                phone:res.data.student.phone 
            })
        }
    }
    updateStudent = async (e) => {
        e.preventDefault();
        document.getElementById('update').innerText = 'Updating....';
        const stud_id = document.location.href.replace('http://localhost:3000/edit-student/', '');
        const res = await axios.put(`http://localhost/laravelReactCrud/laravelApi/public/api/update-student/${stud_id}`, this.state)
        if (res.data.status === 200){
            document.getElementById('update').innerText = 'Update student';
            Swal.fire({
                text: `${this.state.name} updated successfully`,
                icon : 'success',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                timer: 2000 
            })
        }
    } 
    render() {
        return (
           <>
           <div className='container'>
               <div className='row justify-content-center'>
                   <div className='col-md-6'>
                        <div className='card'>
                            <div className='card-header'>
                                <h4>Update {this.state.name}</h4>
                                <Link to={'/'} className="btn btn-info btn-sm float-end">Back Home</Link>
                                <Link to={`../../search/${this.state.id}`} className="btn btn-secondary btn-sm float-start">View</Link>

                            </div>
                            <div className='card-body'>
                                <form onSubmit={this.updateStudent}>
                                    <div className='form-group mb-4'>
                                        <label>Student Name</label>
                                        <input type="text" value={this.state.name} id='' onChange={this.handleInput} name='name' className='form-control'/>
                                    </div>
                                    <div className='form-group mb-4'>
                                        <label>Student Course</label>
                                        <input type="text" value={this.state.course} id='' onChange={this.handleInput} name='course' className='form-control'/>
                                    </div>
                                    <div className='form-group mb-4'>
                                        <label>Student Email</label>
                                        <input type="text" value={this.state.email} id='' onChange={this.handleInput} name='email' className='form-control'/>
                                    </div>
                                    <div className='form-group mb-4'>
                                        <label>Student Phone Number</label>
                                        <input type="text" value={this.state.phone} id='' onChange={this.handleInput} name='phone' className='form-control'/>
                                    </div>
                                    <div className='form-group mb-4'>
                                        <button type='submit' id='update' className='btn btn-primary'>Update Student</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                   </div>
               </div>
           </div>
           </>
        )
  }
}
export default Editstudent;