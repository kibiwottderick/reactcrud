import axios from 'axios';
import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
class Addstudent extends Component 
{
    state = {
        name:'',
        course:'',
        email:'',
        phone:'',
        error_list:[],
    }
    handleInput = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    saveStudent = async (e) => {
        e.preventDefault();
        document.getElementById('save').innerText = 'Saving...';
        const res = await axios.post('http://localhost/laravelReactCrud/laravelApi/public/api/add-student', this.state)
        if (res.data.status === 200){
            document.getElementById('save').innerText = 'Save Student';
            Swal.fire({
                text: `${this.state.name} saved successfully`,
                icon : 'success',
                timer: 2000 
            })
            this.setState({
                name:'',
                course:'',
                email:'',
                phone:''
            });
  
        }else {
            this.setState({
                error_list:res.data.validation_error
            })
            console.log(this.state.error_list)
        }
    } 
    render() {
        return (
           <div className='container'>
               <div className='row justify-content-center'>
                   <div className='col-md-6'>
                        <div className='card'>
                            <div className='card-header'>
                                <h4>Add student</h4>
                                <Link to={'/'} className="btn btn-info btn-sm float-end">Back Home</Link>
                            </div>
                            <div className='card-body'>
                                <form onSubmit={this.saveStudent}>
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
                                        <button type='submit' className='btn btn-primary' id='save'>Save Student</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                   </div>
               </div>
           </div>
        )
  }
}
export default Addstudent;