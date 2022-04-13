import React from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
const Search = async ({state, action, action2, value}) => {
        this.setState({...state, action});
        const search = await axios.get(`http://localhost/laravelReactCrud/laravelApi/public/api/search-student/${value}`);
         this.setState({...state, action, action2});
        if(search.data.status==200){
            this.setState({...state, action, action2});
        }
    
}
export default Search;
