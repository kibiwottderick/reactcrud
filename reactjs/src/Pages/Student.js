import React, { Component } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import { Pageheader } from './Pageheader';
import Loader from './Loader';
import TableHead from './TableHead';
import ViewStudents from './ViewStudents';
import Searched from './Searched';
import { Typer } from './Typer';
class Student extends Component {
    state = {
        students: [],
        loading: true,
        id: 1,
        search: [],
        searching: false,
        check: [],
        removers: [],
    }
    async componentDidMount() {
        const res = await axios.get('http://localhost/laravelReactCrud/laravelApi/public/api/students');
        if (res.data.status === 200) {
            this.setState({...this.state,
                students: res.data.students,
                loading: false,
            })
        }
    }
    scroll = () => {
        this.setState({...this.state, searching: false })
    }
    delete = async() => {
        if(this.state.check.length > 0) {
            let data = this.state.check;
        const res = await axios.get(`http://localhost/laravelReactCrud/laravelApi/public/api/delete-student/${data}`);
        if (res.data.status == 200) {
            this.state.removers.map(item => {
                item.innerHTML = '';
            })
            Swal.fire({
                title: 'deleted',
                text: res.data.message,
                timer: 3000,
            });
            this.setState({...this.state, check: [] });
        }
        }else {
            Swal.fire({
                title: "<p class='text-danger'>Error:</p>",
                text: 'No Student to  delete',
                timer: 10000,
            });
        }
    }

    destroyAll = async(e) => {
        Swal.fire({
            icon: 'warning',
            text: `Are you sure you want to delete all students`,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete them!',
        });
        let confirm = document.querySelector('button.swal2-confirm').addEventListener('click', async e => {
            const destroy = await axios.get('http://localhost/laravelReactCrud/laravelApi/public/api/delete-all');
            if (destroy.data.status == 200) {
                document.querySelector('tbody').innerHTML = ''
            }
        });
    }
    searchStudent = async(e) => {
        console.log(this.state.searching)
        if (e.target.value.length > 0) {
            this.setState({...this.state, searching: true, loading:true});
        const search = await axios.get(`http://localhost/laravelReactCrud/laravelApi/public/api/search-student/${e.target.value}`);
        if (search.data.status == 200) {
            this.setState({...this.state, search: search.data.searched, loading:false });
        }
        }else {
            this.setState({...this.state, searching: false});
        }

    }
    check = (e) => {
        this.state.check.push(e.target.value);
        this.state.removers.push(e.currentTarget.closest('tr'));

    }
        render() {
            let search = <tr className = 'w-100 h-25'><td colSpan = '2'><Typer content=".." Maincontent="Searching"/></td><td><Loader /></td></tr>;
            var student_HTMLTABLE = '';
            if (this.state.loading) {
                student_HTMLTABLE =  <tr className = 'w-100 h-25'><td colSpan = '2'><h5 className='text-info' >Please Wait</h5></td><td colSpan = '6' ><Loader /></td></tr>
            }else {
                search = <Searched data={this.state.search} event={this.check}/>
                student_HTMLTABLE = <ViewStudents data={this.state.students} event={this.check}/>
            }
            
            
            
                return(
                <div className = 'card-body col-lg-12 col-md-12 col-sm-12'>
                    <Pageheader destroyAllAction={this.destroyAll} searchAction={this.searchStudent} deleteAction={this.delete}/>
                     <table className='table table-striped' >
                             <TableHead />      
                            <tbody>
                                { this.state.searching ? search : student_HTMLTABLE }
                          </tbody>
                    </table>
                </div>
                
            )
        }
    }
    export default Student;